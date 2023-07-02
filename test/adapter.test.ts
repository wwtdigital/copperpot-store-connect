import pino from 'pino';
import { describe, expect, it } from 'vitest';
import type { KitchenTicket } from '../src/kds-feed/ticket.js';
import { createMetrics } from '../src/metrics.js';
import { PosAdapter } from '../src/pos-adapter/adapter.js';
import { CommerceClient, CommerceError } from '../src/pos-adapter/commerce-client.js';
import type { CommerceOrder } from '../src/pos-adapter/mapping.js';
import type { PosOrderPlaced } from '../src/pos-adapter/pos-events.js';
import { MemoryBucketStore } from '../src/throttle/bucket-store.js';
import { StoreThrottle } from '../src/throttle/throttle.js';

const logger = pino({ level: 'silent' });

const placed = (storeNumber = '101', over: Partial<PosOrderPlaced> = {}): PosOrderPlaced => ({
  type: 'ORDER_PLACED',
  posOrderId: `P-${Math.random().toString(36).slice(2, 8)}`,
  storeNumber,
  registerId: 'R1',
  placedAt: new Date().toISOString(),
  lines: [{ plu: '1002', quantity: 1 }],
  tender: 'app',
  ...over,
});

function harness(
  opts: {
    capacity?: number;
    commerce?: (order: CommerceOrder, headers: Record<string, string>) => Promise<unknown>;
  } = {},
) {
  const metrics = createMetrics('test');
  const published: KitchenTicket[] = [];
  const calls: { order: CommerceOrder; headers: Record<string, string> }[] = [];
  const fetchImpl = async (_url: string, init: RequestInit) => {
    const order = JSON.parse(String(init.body)) as CommerceOrder;
    const headers = init.headers as Record<string, string>;
    calls.push({ order, headers });
    if (opts.commerce) {
      const r = await opts.commerce(order, headers);
      if (r instanceof Response) return r;
    }
    return new Response(JSON.stringify({ orderId: `o-${calls.length}`, status: 'accepted' }), {
      status: 201,
    });
  };
  const commerce = new CommerceClient({
    baseUrl: 'http://commerce.test/store/',
    apiKey: 'example-key',
    timeoutMs: 500,
    logger,
    metrics,
    fetchImpl,
  });
  const throttle = new StoreThrottle(
    new MemoryBucketStore(),
    { capacity: opts.capacity ?? 5, refillPerMinute: 60 },
    {},
    () => 0,
  );
  const adapter = new PosAdapter({
    throttle,
    commerce,
    feed: { publish: (t) => published.push(t) },
    logger,
    metrics,
  });
  return { adapter, published, calls, metrics };
}

describe('PosAdapter', () => {
  it('maps, posts to the commerce API with the correlation id, and publishes a ticket', async () => {
    const h = harness();
    const result = await h.adapter.handle(placed('101'), {
      correlationId: 'corr-1',
      requestId: 'req-1',
    });
    expect(result).toEqual({ status: 'accepted', correlationId: 'corr-1', orderId: 'o-1' });
    expect(h.calls).toHaveLength(1);
    expect(h.calls[0]?.headers['x-correlation-id']).toBe('corr-1');
    expect(h.calls[0]?.headers['x-request-id']).toBe('req-1');
    expect(h.calls[0]?.headers.authorization).toBe('Bearer example-key');
    expect(h.calls[0]?.order.externalId).toMatch(/^pos:101:P-/);
    expect(h.published).toHaveLength(1);
    expect(h.published[0]).toMatchObject({
      storeId: '101',
      orderId: 'o-1',
      correlationId: 'corr-1',
      source: 'pos',
      status: 'new',
    });
    expect(h.published[0]?.items[0]).toEqual({
      name: 'Steak Bowl',
      quantity: 1,
      modifiers: [],
      note: undefined,
    });
  });

  it('takes the correlation id from the POS event when it carries one', async () => {
    const h = harness();
    const result = await h.adapter.handle(placed('101', { correlationId: 'from-pos' }));
    expect(result.correlationId).toBe('from-pos');
    expect(h.calls[0]?.headers['x-correlation-id']).toBe('from-pos');
  });

  it('rejects a bad event before it costs a token or a call', async () => {
    const h = harness({ capacity: 1 });
    const bad = await h.adapter.handle(placed('101', { lines: [{ plu: '0000', quantity: 1 }] }));
    expect(bad.status).toBe('rejected');
    expect(bad.reason).toContain('unknown PLU');
    expect(h.calls).toHaveLength(0);
    const good = await h.adapter.handle(placed('101'));
    expect(good.status).toBe('accepted');
  });

  it('throttles past the store capacity and publishes nothing for a held order', async () => {
    const h = harness({ capacity: 2 });
    expect((await h.adapter.handle(placed('303'))).status).toBe('accepted');
    expect((await h.adapter.handle(placed('303'))).status).toBe('accepted');
    const held = await h.adapter.handle(placed('303'));
    expect(held.status).toBe('throttled');
    expect(held.retryAfterMs).toBe(1000);
    expect((await h.adapter.handle(placed('404'))).status).toBe('accepted');
    expect(h.published).toHaveLength(3);
    expect(h.calls).toHaveLength(3);
  });

  it('reports a failed post and publishes no ticket', async () => {
    const h = harness({ commerce: async () => new Response('busy', { status: 503 }) });
    const r = await h.adapter.handle(placed('101'));
    expect(r.status).toBe('failed');
    expect(r.reason).toBe('commerce API answered 503');
    expect(h.published).toHaveLength(0);
  });

  it('turns a network error into a retryable failure', async () => {
    const h = harness({
      commerce: async () => {
        throw new TypeError('fetch failed');
      },
    });
    const r = await h.adapter.handle(placed('101'));
    expect(r.status).toBe('failed');
    expect(r.reason).toBe('commerce API unreachable');
  });

  it('ignores event types it does not handle yet', async () => {
    const h = harness();
    const r = await h.adapter.handle({
      type: 'ORDER_VOIDED',
      posOrderId: 'x',
      storeNumber: '101',
      voidedAt: new Date().toISOString(),
    });
    expect(r.status).toBe('ignored');
  });
});

describe('CommerceError', () => {
  it('marks 5xx and 429 retryable through the client', async () => {
    const metrics = createMetrics('test');
    const client = new CommerceClient({
      baseUrl: 'http://commerce.test',
      apiKey: '',
      timeoutMs: 100,
      logger,
      metrics,
      fetchImpl: async () => new Response('slow down', { status: 429 }),
    });
    const order: CommerceOrder = {
      externalId: 'pos:1:1',
      storeId: '101',
      channel: 'pos',
      registerId: 'R1',
      placedAt: new Date().toISOString(),
      tender: 'cash',
      items: [],
    };
    await expect(client.createOrder(order, { correlationId: 'c' })).rejects.toMatchObject({
      status: 429,
      retryable: true,
    } satisfies Partial<CommerceError>);
  });
});
