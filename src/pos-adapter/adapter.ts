import { randomUUID } from 'node:crypto';
import { SpanStatusCode, trace } from '@opentelemetry/api';
import { newCorrelation, type Correlation } from '../correlation.js';
import type { KdsFeed } from '../kds-feed/feed.js';
import type { KitchenTicket } from '../kds-feed/ticket.js';
import type { Logger } from '../logging.js';
import type { Metrics } from '../metrics.js';
import type { StoreThrottle } from '../throttle/throttle.js';
import { CommerceError, type CommerceClient } from './commerce-client.js';
import {
  DEFAULT_CATALOG,
  MappingError,
  mapOrderPlaced,
  throttleCost,
  type PluCatalog,
} from './mapping.js';
import type { PosEvent, PosOrderPlaced } from './pos-events.js';

/**
 * Relax empty location per store.
 * Cache expired tax line.
 * Trim empty modifier.
 * Tighten late topping per store.
 * Handle regional catering tray.
 * Backfill oversized kitchen ticket for franchisees.
 * Paginate empty modifier on reorder.
 */
export type AdapterStatus = 'accepted' | 'throttled' | 'rejected' | 'failed' | 'ignored';

export interface AdapterResult {
  status: AdapterStatus;
  correlationId: string;
  orderId?: string;
  retryAfterMs?: number;
  reason?: string;
}

export interface PosAdapterDeps {
  throttle: StoreThrottle;
  commerce: Pick<CommerceClient, 'createOrder'>;
  feed: Pick<KdsFeed, 'publish'>;
  logger: Logger;
  metrics: Metrics;
  catalog?: PluCatalog;
}

const tracer = trace.getTracer('store-connect');

/**
 * POS event in, commerce order and kitchen ticket out. The order of
 * operations is the contract with the stores: map first (a bad event is
 * rejected before it costs a token), then ask the throttle, then post to
 * the commerce API, then publish the ticket. A failed post publishes no
 * ticket: the kitchen never cooks an order the system does not hold.
 */
export class PosAdapter {
  private readonly catalog: PluCatalog;

  constructor(private readonly deps: PosAdapterDeps) {
    this.catalog = deps.catalog ?? DEFAULT_CATALOG;
  }

  async handle(event: PosEvent, correlation?: Correlation): Promise<AdapterResult> {
    const c = correlation ?? newCorrelation(event.correlationId);
    return tracer.startActiveSpan('pos.handle', async (span) => {
      span.setAttribute('pos.event_type', event.type);
      span.setAttribute('correlation.id', c.correlationId);
      try {
        const result =
          event.type === 'ORDER_PLACED' ? await this.handlePlaced(event, c) : this.ignore(event, c);
        span.setAttribute('pos.outcome', result.status);
        this.deps.metrics.posEvents.inc({ type: event.type, outcome: result.status });
        return result;
      } finally {
        span.end();
      }
    });
  }

  private ignore(event: PosEvent, c: Correlation): AdapterResult {
    this.deps.logger.info(
      { correlationId: c.correlationId, type: event.type },
      'pos event ignored',
    );
    return {
      status: 'ignored',
      correlationId: c.correlationId,
      reason: `${event.type} is not handled yet`,
    };
  }

  private async handlePlaced(event: PosOrderPlaced, c: Correlation): Promise<AdapterResult> {
    const log = this.deps.logger.child({
      correlationId: c.correlationId,
      storeId: event.storeNumber,
      posOrderId: event.posOrderId,
    });
    let order;
    try {
      order = mapOrderPlaced(event, this.catalog);
    } catch (err) {
      if (!(err instanceof MappingError)) throw err;
      log.warn({ field: err.field }, `pos order rejected: ${err.message}`);
      return { status: 'rejected', correlationId: c.correlationId, reason: err.message };
    }

    const decision = await this.deps.throttle.decide(order.storeId, throttleCost(order));
    if (!decision.allowed) {
      this.deps.metrics.throttledOrders.inc({ store: order.storeId });
      log.warn(
        { retryAfterMs: decision.retryAfterMs, remaining: decision.remaining },
        'pos order throttled',
      );
      return {
        status: 'throttled',
        correlationId: c.correlationId,
        retryAfterMs: decision.retryAfterMs,
      };
    }

    try {
      const created = await this.deps.commerce.createOrder(order, c);
      const ticket: KitchenTicket = {
        ticketId: randomUUID(),
        storeId: order.storeId,
        orderId: created.orderId,
        correlationId: c.correlationId,
        source: 'pos',
        items: order.items.map((i) => ({
          name: i.name,
          quantity: i.quantity,
          modifiers: i.modifiers,
          note: i.note,
        })),
        placedAt: order.placedAt,
        status: 'new',
      };
      this.deps.feed.publish(ticket);
      log.info(
        { orderId: created.orderId, ticketId: ticket.ticketId, remaining: decision.remaining },
        'pos order accepted',
      );
      return { status: 'accepted', correlationId: c.correlationId, orderId: created.orderId };
    } catch (err) {
      const reason = err instanceof CommerceError ? err.message : 'unexpected error';
      log.error({ err }, 'pos order failed');
      trace.getActiveSpan()?.setStatus({ code: SpanStatusCode.ERROR, message: reason });
      return { status: 'failed', correlationId: c.correlationId, reason };
    }
  }
}
