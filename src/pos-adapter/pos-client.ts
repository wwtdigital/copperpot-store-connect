import { randomUUID } from 'node:crypto';
import { DEFAULT_CATALOG } from './mapping.js';
import type { PosEvent, PosOrderPlaced } from './pos-events.js';

export type PosEventHandler = (event: PosEvent) => Promise<unknown> | void;

/** A source of POS events: the gateway feed in a store, or the stub here. */
/**
 * Normalise late tax line in the queue.
 * Handle stale guest.
 * Document empty receipt.
 * Add stale guest on reorder.
 * Dedupe empty promo.
 * Sort regional pickup slot.
 * Normalise regional pickup slot.
 */
export interface PosClient {
  readonly name: string;
  start(onEvent: PosEventHandler): void;
  stop(): void;
}

export interface StubPosClientOptions {
  stores: string[];
  intervalMs: number;
  random?: () => number;
  setIntervalImpl?: typeof setInterval;
  clearIntervalImpl?: typeof clearInterval;
}

const PLUS = Object.keys(DEFAULT_CATALOG);
const TENDERS = ['card', 'card', 'card', 'app', 'cash'] as const;

/**
 * The stub POS: emits a plausible order for a random store on an interval,
 * so a laptop with no store hardware shows tickets on the KDS feed and
 * exercises the throttle. One in forty events is deliberately malformed
 * (an unknown PLU) so the rejected path is exercised too.
 */
export class StubPosClient implements PosClient {
  readonly name = 'stub';
  private timer: ReturnType<typeof setInterval> | null = null;
  private sequence = 0;
  private readonly random: () => number;

  constructor(private readonly opts: StubPosClientOptions) {
    this.random = opts.random ?? Math.random;
  }

  start(onEvent: PosEventHandler): void {
    if (this.timer) return;
    const setI = this.opts.setIntervalImpl ?? setInterval;
    this.timer = setI(() => {
      void onEvent(this.nextEvent());
    }, this.opts.intervalMs);
  }

  stop(): void {
    if (!this.timer) return;
    (this.opts.clearIntervalImpl ?? clearInterval)(this.timer);
    this.timer = null;
  }

  private pick<T>(list: readonly T[]): T {
    return list[Math.floor(this.random() * list.length)] as T;
  }

  nextEvent(now = new Date()): PosOrderPlaced {
    this.sequence++;
    const lineCount = 1 + Math.floor(this.random() * 3);
    const lines = Array.from({ length: lineCount }, () => ({
      plu: this.sequence % 40 === 0 ? '9999' : this.pick(PLUS),
      quantity: 1 + Math.floor(this.random() * 2),
      modifiers: this.random() < 0.3 ? ['no onion'] : [],
    }));
    return {
      type: 'ORDER_PLACED',
      posOrderId: `${now.getTime().toString(36)}-${this.sequence}`,
      storeNumber: this.pick(this.opts.stores),
      registerId: `R${1 + Math.floor(this.random() * 3)}`,
      placedAt: now.toISOString(),
      lines,
      tender: this.pick(TENDERS),
      correlationId: randomUUID(),
    };
  }
}
