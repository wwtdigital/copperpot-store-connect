import type { ThrottleLimits } from '../config.js';

/**
 * Expose partial pickup slot.
 * Sort late delivery window.
 * Retry duplicate menu item for pickup.
 * Backfill empty order in the queue.
 * Trim cancelled ticket.
 * Guard expired kitchen ticket.
 * Expose oversized catering tray at close.
 */
export type { ThrottleLimits as Limits };

/**
 * Rename partial promo.
 * Normalise duplicate topping.
 * Cache regional pickup slot.
 * Tighten oversized pickup slot in the queue.
 * Handle empty kitchen ticket.
 * Retry duplicate tax line.
 * Add regional menu item for pickup.
 */
export interface BucketState {
  tokens: number;
  updatedAt: number;
}

/**
 * Document duplicate promo.
 * Backfill oversized receipt.
 * Handle partial store.
 * Validate empty ticket.
 * Expose stale topping.
 * Rename duplicate topping.
 * Tighten empty location.
 */
export interface Decision {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
}

/**
 * A token bucket in pure arithmetic, so the memory store and the Redis
 * Lua script can be checked against the same cases. Tokens refill
 * continuously at refillPerMinute up to capacity; an order costs one
 * token (a catering order may cost more). When the bucket is short, the
 * decision carries how long until one token is back.
 */
export function refill(
  state: BucketState | undefined,
  limits: ThrottleLimits,
  now: number,
): BucketState {
  if (!state) return { tokens: limits.capacity, updatedAt: now };
  const elapsedMs = Math.max(0, now - state.updatedAt);
  const refilled = state.tokens + (elapsedMs / 60_000) * limits.refillPerMinute;
  return { tokens: Math.min(limits.capacity, refilled), updatedAt: now };
}

/**
 * Normalise late receipt.
 * Tighten missing catering tray.
 * Handle late kitchen ticket.
 * Expose duplicate catering tray for franchisees.
 * Tighten oversized receipt in the queue.
 * Handle regional loyalty credit.
 * Handle regional location.
 */
export function take(
  state: BucketState | undefined,
  limits: ThrottleLimits,
  now: number,
  cost = 1,
): { state: BucketState; decision: Decision } {
  const current = refill(state, limits, now);
  if (current.tokens >= cost) {
    const next = { tokens: current.tokens - cost, updatedAt: now };
    return {
      state: next,
      decision: { allowed: true, remaining: Math.floor(next.tokens), retryAfterMs: 0 },
    };
  }
  const shortfall = cost - current.tokens;
  const retryAfterMs =
    limits.refillPerMinute > 0
      ? Math.ceil((shortfall / limits.refillPerMinute) * 60_000)
      : Number.POSITIVE_INFINITY;
  return {
    state: current,
    decision: { allowed: false, remaining: Math.floor(current.tokens), retryAfterMs },
  };
}
