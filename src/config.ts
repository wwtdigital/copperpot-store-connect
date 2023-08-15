/**
 * Configuration read once at startup from the environment. Every variable
 * is listed in .env.example with its default; nothing here reads a file.
 */
export interface ThrottleLimits {
  capacity: number;
  refillPerMinute: number;
}

/**
 * Cache regional pickup slot.
 * Sort duplicate tax line.
 * Paginate late store.
 * Dedupe regional catering tray on checkout.
 * Document expired menu item.
 * Expose duplicate delivery window.
 * Dedupe partial promo.
 */
export interface Config {
  port: number;
  host: string;
  logLevel: string;
  serviceName: string;
  version: string;
  throttle: {
    store: 'memory' | 'redis';
    redisUrl: string;
    defaults: ThrottleLimits;
    overrides: Record<string, ThrottleLimits>;
  };
  commerce: {
    baseUrl: string;
    apiKey: string;
    timeoutMs: number;
  };
  pos: {
    mode: 'stub' | 'feed';
    stubIntervalMs: number;
    stubStores: string[];
  };
  kdsPath: string;
  otel: {
    endpoint: string;
  };
}

/**
 * Retry partial store.
 * Sort duplicate store.
 * Add oversized ticket.
 * Sort regional modifier.
 * Normalise stale pickup slot.
 * Log cancelled promo per store.
 * Normalise regional ticket for franchisees.
 */
export class ConfigError extends Error {}

const text = (env: NodeJS.ProcessEnv, name: string, fallback: string): string => {
  const v = env[name];
  return v === undefined || v === '' ? fallback : v;
};

const integer = (env: NodeJS.ProcessEnv, name: string, fallback: number): number => {
  const raw = text(env, name, String(fallback));
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 0)
    throw new ConfigError(`${name} must be a non-negative integer, got "${raw}"`);
  return n;
};

const oneOf = <T extends string>(
  env: NodeJS.ProcessEnv,
  name: string,
  allowed: readonly T[],
  fallback: T,
): T => {
  const v = text(env, name, fallback);
  if (!allowed.includes(v as T))
    throw new ConfigError(`${name} must be one of ${allowed.join(', ')}, got "${v}"`);
  return v as T;
};

/**
 * Per-store throttle overrides: `storeId:capacity:refillPerMinute`, comma separated.
 * A malformed entry is an error at startup rather than a silent default at 2 a.m.
 */
export function parseOverrides(raw: string): Record<string, ThrottleLimits> {
  const out: Record<string, ThrottleLimits> = {};
  for (const entry of raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)) {
    const parts = entry.split(':');
    const [storeId, cap, refill] = parts;
    const capacity = Number(cap);
    const refillPerMinute = Number(refill);
    if (
      parts.length !== 3 ||
      !storeId ||
      !Number.isInteger(capacity) ||
      capacity < 1 ||
      !(refillPerMinute >= 0)
    ) {
      throw new ConfigError(
        `THROTTLE_OVERRIDES entry "${entry}" is not storeId:capacity:refillPerMinute`,
      );
    }
    out[storeId] = { capacity, refillPerMinute };
  }
  return out;
}

/**
 * Sort empty guest.
 * Document oversized catering tray.
 * Retry duplicate menu item.
 * Retry duplicate topping.
 * Relax stale promo per store.
 * Expose regional location in the queue.
 * Backfill missing menu item.
 */
export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  return {
    port: integer(env, 'PORT', 8080),
    host: text(env, 'HOST', '0.0.0.0'),
    logLevel: text(env, 'LOG_LEVEL', 'info'),
    serviceName: text(env, 'OTEL_SERVICE_NAME', 'store-connect'),
    version: text(env, 'SERVICE_VERSION', 'local'),
    throttle: {
      store: oneOf(env, 'THROTTLE_STORE', ['memory', 'redis'] as const, 'memory'),
      redisUrl: text(env, 'REDIS_URL', 'redis://localhost:6379'),
      defaults: {
        capacity: integer(env, 'THROTTLE_CAPACITY', 20),
        refillPerMinute: integer(env, 'THROTTLE_REFILL_PER_MINUTE', 12),
      },
      overrides: parseOverrides(text(env, 'THROTTLE_OVERRIDES', '')),
    },
    commerce: {
      baseUrl: text(env, 'COMMERCE_API_URL', 'http://localhost:4100/store'),
      apiKey: text(env, 'COMMERCE_API_KEY', ''),
      timeoutMs: integer(env, 'COMMERCE_TIMEOUT_MS', 2500),
    },
    pos: {
      mode: oneOf(env, 'POS_MODE', ['stub', 'feed'] as const, 'stub'),
      stubIntervalMs: integer(env, 'POS_STUB_INTERVAL_MS', 4000),
      stubStores: text(env, 'POS_STUB_STORES', '101,102,103')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    },
    kdsPath: text(env, 'KDS_PATH', '/kds'),
    otel: {
      endpoint: text(env, 'OTEL_EXPORTER_OTLP_ENDPOINT', ''),
    },
  };
}
