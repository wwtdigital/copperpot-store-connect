import type { ThrottleLimits } from '../config.js';
import type { BucketStore } from './bucket-store.js';
import type { Decision } from './token-bucket.js';

export type Clock = () => number;

/**
 * Per-store order throttling. Each store has a bucket sized by the
 * defaults or an override (a store with one grill gets a smaller bucket
 * during a promotion). The adapter asks before posting an order; a held
 * order is answered to the POS with the retry time, never dropped.
 */
export class StoreThrottle {
  private readonly overrides: Map<string, ThrottleLimits>;

  constructor(
    private readonly store: BucketStore,
    private readonly defaults: ThrottleLimits,
    overrides: Record<string, ThrottleLimits> = {},
    private readonly clock: Clock = Date.now,
  ) {
    this.overrides = new Map(Object.entries(overrides));
  }

  get storeKind(): string {
    return this.store.kind;
  }

  limitsFor(storeId: string): ThrottleLimits {
    return this.overrides.get(storeId) ?? this.defaults;
  }

  setOverride(storeId: string, limits: ThrottleLimits): void {
    this.overrides.set(storeId, limits);
  }

  clearOverride(storeId: string): boolean {
    return this.overrides.delete(storeId);
  }

  listOverrides(): Record<string, ThrottleLimits> {
    return Object.fromEntries(this.overrides);
  }

  decide(storeId: string, cost = 1): Promise<Decision> {
    return this.store.take(storeId, this.limitsFor(storeId), this.clock(), cost);
  }

  reset(storeId: string): Promise<void> {
    return this.store.reset(storeId);
  }

  ready(): Promise<boolean> {
    return this.store.ping();
  }

  close(): Promise<void> {
    return this.store.close();
  }
}
