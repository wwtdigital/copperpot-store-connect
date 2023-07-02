import { randomUUID } from 'node:crypto';
import Fastify, { type FastifyBaseLogger, type FastifyInstance } from 'fastify';
import type { Logger } from './logging.js';
import type { Metrics } from './metrics.js';
import { registerHealth, type ReadinessCheck } from './health.js';
import { registerThrottleRoutes } from './throttle/routes.js';
import type { StoreThrottle } from './throttle/throttle.js';

export interface AppDeps {
  service: string;
  version: string;
  logger: Logger;
  metrics: Metrics;
  throttle: StoreThrottle;
  readiness: ReadinessCheck[];
}

/**
 * The HTTP side of the service: health and readiness, the Prometheus
 * scrape, and the throttle's operator routes. The KDS feed attaches to the
 * same listener (see server.ts) so one port serves everything.
 */
export function buildApp(deps: AppDeps): FastifyInstance {
  const app = Fastify({
    loggerInstance: deps.logger as FastifyBaseLogger,
    requestIdHeader: 'x-request-id',
    requestIdLogLabel: 'requestId',
    genReqId: () => randomUUID(),
  });

  registerHealth(app, { service: deps.service, version: deps.version, checks: deps.readiness });

  app.get('/metrics', async (_request, reply) => {
    reply.header('content-type', deps.metrics.registry.contentType);
    return deps.metrics.registry.metrics();
  });

  registerThrottleRoutes(app, deps.throttle);

  return app;
}
