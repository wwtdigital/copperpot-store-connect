import type { FastifyInstance } from 'fastify';
import type { StoreThrottle } from './throttle.js';

const STORE_ID = /^[0-9]{3,6}$/;

interface StoreParams {
  storeId: string;
}

interface LimitsBody {
  capacity: number;
  refillPerMinute: number;
}

/**
 * Operator routes for the throttle, used by the runbooks and the fleet
 * console: read a store's limits, set an override during an incident,
 * clear it afterwards, reset a bucket that misfired.
 */
export function registerThrottleRoutes(app: FastifyInstance, throttle: StoreThrottle): void {
  app.get('/throttle', async () => ({
    store: throttle.storeKind,
    overrides: throttle.listOverrides(),
  }));

  app.get<{ Params: StoreParams }>('/throttle/:storeId', async (request, reply) => {
    const { storeId } = request.params;
    if (!STORE_ID.test(storeId))
      return reply.code(400).send({ error: 'storeId must be 3 to 6 digits' });
    return {
      storeId,
      limits: throttle.limitsFor(storeId),
      override: storeId in throttle.listOverrides(),
    };
  });

  app.put<{ Params: StoreParams; Body: LimitsBody }>(
    '/throttle/:storeId',
    {
      schema: {
        body: {
          type: 'object',
          required: ['capacity', 'refillPerMinute'],
          properties: {
            capacity: { type: 'integer', minimum: 1, maximum: 500 },
            refillPerMinute: { type: 'number', minimum: 0, maximum: 500 },
          },
        },
      },
    },
    async (request, reply) => {
      const { storeId } = request.params;
      if (!STORE_ID.test(storeId))
        return reply.code(400).send({ error: 'storeId must be 3 to 6 digits' });
      throttle.setOverride(storeId, request.body);
      request.log.warn({ storeId, limits: request.body }, 'throttle override set');
      return { storeId, limits: throttle.limitsFor(storeId), override: true };
    },
  );

  app.delete<{ Params: StoreParams }>('/throttle/:storeId', async (request, reply) => {
    const { storeId } = request.params;
    if (!STORE_ID.test(storeId))
      return reply.code(400).send({ error: 'storeId must be 3 to 6 digits' });
    const removed = throttle.clearOverride(storeId);
    await throttle.reset(storeId);
    request.log.warn({ storeId, removedOverride: removed }, 'throttle bucket reset');
    return { storeId, limits: throttle.limitsFor(storeId), override: false };
  });
}
