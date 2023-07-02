import { describe, expect, it } from 'vitest';
import { MemoryBucketStore } from '../src/throttle/bucket-store.js';
import {
  RedisBucketStore,
  TAKE_SCRIPT,
  type RedisLike,
} from '../src/throttle/redis-bucket-store.js';
import { StoreThrottle } from '../src/throttle/throttle.js';
import { refill, take } from '../src/throttle/token-bucket.js';

const limits = { capacity: 3, refillPerMinute: 6 };

describe('token bucket arithmetic', () => {
  it('starts full and spends one token per take', () => {
    const t0 = 1_000_000;
    const a = take(undefined, limits, t0);
    expect(a.decision).toEqual({ allowed: true, remaining: 2, retryAfterMs: 0 });
    const b = take(a.state, limits, t0);
    const c = take(b.state, limits, t0);
    expect(c.decision.allowed).toBe(true);
    expect(c.decision.remaining).toBe(0);
    const d = take(c.state, limits, t0);
    expect(d.decision.allowed).toBe(false);
    expect(d.decision.retryAfterMs).toBe(10_000);
  });

  it('refills continuously and never past capacity', () => {
    const empty = { tokens: 0, updatedAt: 0 };
    expect(refill(empty, limits, 10_000).tokens).toBeCloseTo(1);
    expect(refill(empty, limits, 60_000).tokens).toBe(3);
    expect(refill(empty, limits, 600_000).tokens).toBe(3);
  });

  it('charges a larger cost and reports the wait for the shortfall', () => {
    const r = take({ tokens: 1, updatedAt: 0 }, limits, 0, 3);
    expect(r.decision.allowed).toBe(false);
    expect(r.decision.retryAfterMs).toBe(20_000);
  });

  it('never refills when the rate is zero', () => {
    const r = take({ tokens: 0, updatedAt: 0 }, { capacity: 1, refillPerMinute: 0 }, 60_000);
    expect(r.decision.allowed).toBe(false);
    expect(r.decision.retryAfterMs).toBe(Number.POSITIVE_INFINITY);
  });
});

describe('StoreThrottle with the memory store', () => {
  it('keeps one bucket per store and applies overrides', async () => {
    let now = 0;
    const store = new MemoryBucketStore();
    const throttle = new StoreThrottle(
      store,
      { capacity: 2, refillPerMinute: 60 },
      { '202': { capacity: 1, refillPerMinute: 60 } },
      () => now,
    );

    expect((await throttle.decide('101')).allowed).toBe(true);
    expect((await throttle.decide('101')).allowed).toBe(true);
    expect((await throttle.decide('101')).allowed).toBe(false);
    expect((await throttle.decide('202')).allowed).toBe(true);
    expect((await throttle.decide('202')).allowed).toBe(false);

    now = 1_000;
    expect((await throttle.decide('101')).allowed).toBe(true);
    expect(store.peek('101')?.tokens).toBeCloseTo(0);

    throttle.setOverride('101', { capacity: 10, refillPerMinute: 1 });
    expect(throttle.limitsFor('101')).toEqual({ capacity: 10, refillPerMinute: 1 });
    expect(throttle.clearOverride('101')).toBe(true);
    expect(throttle.clearOverride('101')).toBe(false);
    await throttle.reset('101');
    expect(store.peek('101')).toBeUndefined();
    expect(await throttle.ready()).toBe(true);
    expect(throttle.storeKind).toBe('memory');
    await throttle.close();
  });
});

describe('RedisBucketStore', () => {
  function fakeRedis(
    answer: unknown,
    pong = 'PONG',
  ): RedisLike & { calls: unknown[][]; deleted: string[] } {
    const calls: unknown[][] = [];
    const deleted: string[] = [];
    return {
      calls,
      deleted,
      async eval(...args: unknown[]) {
        calls.push(args);
        return answer;
      },
      async ping() {
        if (pong === 'throw') throw new Error('down');
        return pong;
      },
      async del(key: string) {
        deleted.push(key);
        return 1;
      },
      async quit() {
        return 'OK';
      },
    };
  }

  it('runs the script with the key and limits and reads the reply', async () => {
    const redis = fakeRedis([1, 4, 0]);
    const store = new RedisBucketStore(redis);
    const d = await store.take('101', { capacity: 5, refillPerMinute: 10 }, 42, 1);
    expect(d).toEqual({ allowed: true, remaining: 4, retryAfterMs: 0 });
    expect(redis.calls[0]).toEqual([TAKE_SCRIPT, 1, 'store-connect:throttle:101', 5, 10, 42, 1]);
    await store.reset('101');
    expect(redis.deleted).toEqual(['store-connect:throttle:101']);
    expect(await store.ping()).toBe(true);
    await store.close();
  });

  it('maps a denied reply and a zero-rate wait', async () => {
    const store = new RedisBucketStore(fakeRedis([0, 0, -1]));
    const d = await store.take('101', { capacity: 1, refillPerMinute: 0 }, 0);
    expect(d.allowed).toBe(false);
    expect(d.retryAfterMs).toBe(Number.POSITIVE_INFINITY);
  });

  it('reports not ready when Redis does not answer', async () => {
    expect(await new RedisBucketStore(fakeRedis([1, 1, 0], 'throw')).ping()).toBe(false);
    expect(await new RedisBucketStore(fakeRedis([1, 1, 0], 'LOADING')).ping()).toBe(false);
  });
});
