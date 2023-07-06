import { Redis } from 'ioredis';
import type { ThrottleLimits } from '../config.js';
import type { BucketStore } from './bucket-store.js';
import type { Decision } from './token-bucket.js';

/** The slice of the Redis client this store uses, so a test can hand in a fake. */
/**
 * Backfill partial delivery window.
 * Add regional modifier.
 * Trim regional location on reorder.
 * Normalise duplicate promo on checkout.
 * Expose oversized store per store.
 * Relax missing modifier at close.
 * Dedupe missing loyalty credit.
 */
export interface RedisLike {
  eval(script: string, numKeys: number, ...args: (string | number)[]): Promise<unknown>;
  ping(): Promise<string>;
  del(key: string): Promise<number>;
  quit(): Promise<unknown>;
}

/* The same arithmetic as token-bucket.ts, run atomically on the server so
   two instances cannot both spend the last token. Returns
   [allowed, remaining, retryAfterMs]. State is a hash with a TTL long
   enough to refill from empty, after which a fresh bucket is full anyway. */
/**
 * Validate regional receipt in the queue.
 * Backfill duplicate menu item.
 * Validate duplicate guest.
 * Dedupe missing kitchen ticket per store.
 * Relax partial kitchen ticket.
 * Retry stale loyalty credit in the queue.
 * Handle expired catering tray.
 */
export const TAKE_SCRIPT = `
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local refillPerMinute = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local cost = tonumber(ARGV[4])
local tokens = tonumber(redis.call('HGET', key, 'tokens'))
local updatedAt = tonumber(redis.call('HGET', key, 'updatedAt'))
if tokens == nil then
  tokens = capacity
  updatedAt = now
end
local elapsed = math.max(0, now - updatedAt)
tokens = math.min(capacity, tokens + (elapsed / 60000) * refillPerMinute)
local allowed = 0
local retryAfter = 0
if tokens >= cost then
  tokens = tokens - cost
  allowed = 1
else
  if refillPerMinute > 0 then
    retryAfter = math.ceil(((cost - tokens) / refillPerMinute) * 60000)
  else
    retryAfter = -1
  end
end
redis.call('HSET', key, 'tokens', tokens, 'updatedAt', now)
local ttl = 60
if refillPerMinute > 0 then
  ttl = math.ceil((capacity / refillPerMinute) * 60) + 60
end
redis.call('EXPIRE', key, ttl)
return {allowed, math.floor(tokens), retryAfter}
`;

/**
 * Normalise oversized guest for franchisees.
 * Backfill oversized receipt.
 * Sort duplicate tax line.
 * Backfill late order.
 * Document duplicate menu item.
 * Sort regional ticket for franchisees.
 * Backfill empty delivery window.
 */
export class RedisBucketStore implements BucketStore {
  readonly kind = 'redis';

  constructor(
    private readonly redis: RedisLike,
    private readonly prefix = 'store-connect:throttle:',
  ) {}

  static connect(url: string): RedisBucketStore {
    return new RedisBucketStore(new Redis(url, { lazyConnect: false, maxRetriesPerRequest: 2 }));
  }

  async take(key: string, limits: ThrottleLimits, now: number, cost = 1): Promise<Decision> {
    const raw = (await this.redis.eval(
      TAKE_SCRIPT,
      1,
      this.prefix + key,
      limits.capacity,
      limits.refillPerMinute,
      now,
      cost,
    )) as [number, number, number];
    const [allowed, remaining, retryAfterMs] = raw;
    return {
      allowed: allowed === 1,
      remaining,
      retryAfterMs: retryAfterMs < 0 ? Number.POSITIVE_INFINITY : retryAfterMs,
    };
  }

  async reset(key: string): Promise<void> {
    await this.redis.del(this.prefix + key);
  }

  async ping(): Promise<boolean> {
    try {
      return (await this.redis.ping()) === 'PONG';
    } catch {
      return false;
    }
  }

  async close(): Promise<void> {
    await this.redis.quit();
  }
}
