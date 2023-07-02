import { buildApp } from './app.js';
import { loadConfig } from './config.js';
import { KdsFeed } from './kds-feed/feed.js';
import { createLogger } from './logging.js';
import { createMetrics } from './metrics.js';
import { PosAdapter } from './pos-adapter/adapter.js';
import { CommerceClient } from './pos-adapter/commerce-client.js';
import { StubPosClient, type PosClient } from './pos-adapter/pos-client.js';
import { startTelemetry } from './telemetry.js';
import { MemoryBucketStore } from './throttle/bucket-store.js';
import { RedisBucketStore } from './throttle/redis-bucket-store.js';
import { StoreThrottle } from './throttle/throttle.js';

/**
 * Process entrypoint. Telemetry first (so the SDK is up before any span),
 * then the pieces in dependency order, then the listener. Shutdown is the
 * reverse: stop taking POS events, close the feed, close the listener,
 * close the store, flush traces.
 */
async function main(): Promise<void> {
  const config = loadConfig();
  const telemetry = startTelemetry({
    serviceName: config.serviceName,
    version: config.version,
    endpoint: config.otel.endpoint,
  });
  const logger = createLogger({
    service: config.serviceName,
    version: config.version,
    level: config.logLevel,
  });
  const metrics = createMetrics(config.serviceName);

  const store =
    config.throttle.store === 'redis'
      ? RedisBucketStore.connect(config.throttle.redisUrl)
      : new MemoryBucketStore();
  const throttle = new StoreThrottle(store, config.throttle.defaults, config.throttle.overrides);
  const feed = new KdsFeed(logger, metrics, config.kdsPath);

  const app = buildApp({
    service: config.serviceName,
    version: config.version,
    logger,
    metrics,
    throttle,
    readiness: [
      { name: 'throttle-store', check: () => throttle.ready() },
      { name: 'kds-feed', check: () => feed.ready() },
    ],
  });
  feed.attach(app.server);

  const commerce = new CommerceClient({ ...config.commerce, logger, metrics });
  const adapter = new PosAdapter({ throttle, commerce, feed, logger, metrics });
  const pos: PosClient | null =
    config.pos.mode === 'stub'
      ? new StubPosClient({ stores: config.pos.stubStores, intervalMs: config.pos.stubIntervalMs })
      : null;
  if (!pos)
    logger.warn(
      'POS_MODE=feed: the gateway feed client is configured per store by the fleet tooling; no events until it connects',
    );

  await app.listen({ port: config.port, host: config.host });
  pos?.start((event) => adapter.handle(event));
  logger.info(
    {
      port: config.port,
      throttleStore: store.kind,
      posMode: config.pos.mode,
      kdsPath: config.kdsPath,
      tracing: telemetry.enabled,
    },
    'store-connect started',
  );

  const shutdown = async (signal: string) => {
    logger.info({ signal }, 'shutting down');
    pos?.stop();
    await feed.close();
    await app.close();
    await throttle.close();
    await telemetry.shutdown();
    process.exit(0);
  };
  process.once('SIGTERM', () => void shutdown('SIGTERM'));
  process.once('SIGINT', () => void shutdown('SIGINT'));
}

main().catch((err) => {
  console.error(
    JSON.stringify({
      level: 'fatal',
      service: 'store-connect',
      msg: 'failed to start',
      err: String(err),
    }),
  );
  process.exit(1);
});
