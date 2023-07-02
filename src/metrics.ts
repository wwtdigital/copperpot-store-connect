import { Counter, Histogram, Registry, collectDefaultMetrics } from 'prom-client';

/**
 * The service's own registry, scraped at /metrics. Default process metrics
 * plus the three counters and one histogram the runbooks alert on.
 */
export function createMetrics(service = 'store-connect') {
  const registry = new Registry();
  registry.setDefaultLabels({ service });
  collectDefaultMetrics({ register: registry });

  const posEvents = new Counter({
    name: 'store_connect_pos_events_total',
    help: 'POS events received, by event type and adapter outcome',
    labelNames: ['type', 'outcome'] as const,
    registers: [registry],
  });
  const throttledOrders = new Counter({
    name: 'store_connect_throttled_orders_total',
    help: 'Orders held back by the per-store throttle',
    labelNames: ['store'] as const,
    registers: [registry],
  });
  const kdsTickets = new Counter({
    name: 'store_connect_kds_tickets_total',
    help: 'Kitchen tickets published to the KDS feed, by store',
    labelNames: ['store'] as const,
    registers: [registry],
  });
  const commerceRequestSeconds = new Histogram({
    name: 'store_connect_commerce_request_seconds',
    help: 'Latency of calls to the commerce API, by outcome',
    labelNames: ['outcome'] as const,
    buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
    registers: [registry],
  });

  return { registry, posEvents, throttledOrders, kdsTickets, commerceRequestSeconds };
}

export type Metrics = ReturnType<typeof createMetrics>;
