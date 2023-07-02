import type { AddressInfo } from 'node:net';
import pino from 'pino';
import { io as connect, type Socket } from 'socket.io-client';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import { KdsFeed } from '../src/kds-feed/feed.js';
import type { KitchenTicket } from '../src/kds-feed/ticket.js';
import { createMetrics } from '../src/metrics.js';
import { MemoryBucketStore } from '../src/throttle/bucket-store.js';
import { StoreThrottle } from '../src/throttle/throttle.js';

/* The feed on an in-process server: a display subscribes to its store,
   receives that store's tickets and nobody else's, and the readiness
   check reports the feed attached. */

const logger = pino({ level: 'silent' });
const metrics = createMetrics('test');
const feed = new KdsFeed(logger, metrics, '/kds');
const throttle = new StoreThrottle(new MemoryBucketStore(), { capacity: 5, refillPerMinute: 60 });
const app = buildApp({
  service: 'test',
  version: 'test',
  logger,
  metrics,
  throttle,
  readiness: [{ name: 'kds-feed', check: () => feed.ready() }],
});
let url = '';
const sockets: Socket[] = [];

const ticket = (storeId: string, orderId: string): KitchenTicket => ({
  ticketId: `t-${orderId}`,
  storeId,
  orderId,
  correlationId: `c-${orderId}`,
  source: 'pos',
  items: [{ name: 'Steak Bowl', quantity: 1, modifiers: [] }],
  placedAt: new Date().toISOString(),
  status: 'new',
});

const client = (): Promise<Socket> =>
  new Promise((resolve, reject) => {
    const s = connect(url, { path: '/kds', transports: ['websocket'], reconnection: false });
    sockets.push(s);
    s.once('connect', () => resolve(s));
    s.once('connect_error', reject);
  });

const subscribe = (s: Socket, storeId: string): Promise<{ ok: boolean; error?: string }> =>
  new Promise((resolve) => s.emit('subscribe', storeId, resolve));

const nextTicket = (s: Socket, ms = 500): Promise<KitchenTicket | null> =>
  new Promise((resolve) => {
    const t = setTimeout(() => resolve(null), ms);
    s.once('ticket', (k: KitchenTicket) => {
      clearTimeout(t);
      resolve(k);
    });
  });

beforeAll(async () => {
  feed.attach(app.server);
  await app.listen({ port: 0, host: '127.0.0.1' });
  const { port } = app.server.address() as AddressInfo;
  url = `http://127.0.0.1:${port}`;
});

afterAll(async () => {
  for (const s of sockets) s.disconnect();
  await feed.close();
  await app.close();
});

describe('KDS feed over a real socket', () => {
  it('is reported ready once attached', async () => {
    const res = await app.inject({ method: 'GET', url: '/ready' });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toMatchObject({ status: 'ready', checks: [{ name: 'kds-feed', ok: true }] });
  });

  it('delivers tickets to the subscribed store only', async () => {
    const display101 = await client();
    const display102 = await client();
    expect(await subscribe(display101, '101')).toEqual({ ok: true, storeId: '101' });
    expect(await subscribe(display102, '102')).toEqual({ ok: true, storeId: '102' });
    expect(feed.subscribers('101')).toBe(1);

    const waiting101 = nextTicket(display101);
    const waiting102 = nextTicket(display102, 300);
    feed.publish(ticket('101', 'o-1'));

    const got = await waiting101;
    expect(got).toMatchObject({ storeId: '101', orderId: 'o-1', correlationId: 'c-o-1' });
    expect(await waiting102).toBeNull();
    expect(feed.published).toBe(1);
  });

  it('refuses a subscription that is not a store id and keeps the socket', async () => {
    const display = await client();
    expect(await subscribe(display, 'all-stores')).toEqual({
      ok: false,
      error: 'storeId must be 3 to 6 digits',
    });
    expect(display.connected).toBe(true);
    display.emit('unsubscribe', '101');
  });

  it('counts published tickets in the metrics', async () => {
    const res = await app.inject({ method: 'GET', url: '/metrics' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatch(/store_connect_kds_tickets_total\{[^}]*store="101"[^}]*\} 1/);
  });
});
