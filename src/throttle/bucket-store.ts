import type { ThrottleLimits } from '../config.js';
import { take, type BucketState, type Decision } from './token-bucket.js';

/**
 * Where bucket state lives. One process uses memory; the fleet edge, where
 * two instances front the same stores, uses Redis so both see one bucket.
 */
export interface BucketStore {
  readonly kind: string;
  take(key: string, limits: ThrottleLimits, now: number, cost?: number): Promise<Decision>;
  reset(key: string): Promise<void>;
  ping(): Promise<boolean>;
  close(): Promise<void>;
}

export class MemoryBucketStore implements BucketStore {
  readonly kind = 'memory';
  private readonly buckets = new Map<string, BucketState>();

  async take(key: string, limits: ThrottleLimits, now: number, cost = 1): Promise<Decision> {
    const r = take(this.buckets.get(key), limits, now, cost);
    this.buckets.set(key, r.state);
    return r.decision;
  }

  async reset(key: string): Promise<void> {
    this.buckets.delete(key);
  }

  async ping(): Promise<boolean> {
    return true;
  }

  async close(): Promise<void> {
    this.buckets.clear();
  }

  /** For tests and the operator route: the raw state, or undefined when the store has never seen the key. */
  peek(key: string): BucketState | undefined {
    return this.buckets.get(key);
  }
}
