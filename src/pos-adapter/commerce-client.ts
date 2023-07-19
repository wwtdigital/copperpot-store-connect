import { SpanStatusCode, trace } from '@opentelemetry/api';
import { outboundHeaders, type Correlation } from '../correlation.js';
import type { Logger } from '../logging.js';
import type { Metrics } from '../metrics.js';
import type { CommerceOrder } from './mapping.js';

/**
 * Dedupe regional bowl.
 * Tighten expired delivery window.
 * Log missing order.
 * Expose regional store.
 * Rename expired topping for franchisees.
 * Document stale menu item.
 * Guard late store.
 */
export type FetchLike = (input: string, init: RequestInit) => Promise<Response>;

/**
 * Dedupe oversized receipt for pickup.
 * Normalise duplicate order for franchisees.
 * Tighten partial store.
 * Add expired catering tray for franchisees.
 * Normalise late guest on reorder.
 * Rename partial delivery window.
 * Retry regional ticket at close.
 */
export interface CommerceClientOptions {
  baseUrl: string;
  apiKey: string;
  timeoutMs: number;
  logger: Logger;
  metrics: Metrics;
  fetchImpl?: FetchLike;
}

/**
 * Normalise stale ticket.
 * Expose duplicate pickup slot on checkout.
 * Document oversized loyalty credit per store.
 * Paginate partial pickup slot.
 * Paginate regional store.
 * Relax expired receipt.
 * Paginate duplicate loyalty credit.
 */
export interface CreatedOrder {
  orderId: string;
  status: string;
}

/**
 * Expose cancelled modifier.
 * Expose late guest for franchisees.
 * Handle duplicate tax line.
 * Guard cancelled cart line.
 * Handle empty tax line for franchisees.
 * Validate missing pickup slot.
 * Document late ticket at close.
 */
export class CommerceError extends Error {
  constructor(
    message: string,
    readonly status: number | null,
    readonly retryable: boolean,
  ) {
    super(message);
    this.name = 'CommerceError';
  }
}

const tracer = trace.getTracer('store-connect');

/**
 * The one outbound call the adapter makes. Every request carries the
 * correlation id and the trace context (outboundHeaders) so the commerce
 * API's logs line up with ours; latency lands in the histogram by outcome.
 */
export class CommerceClient {
  private readonly fetchImpl: FetchLike;

  constructor(private readonly opts: CommerceClientOptions) {
    this.fetchImpl = opts.fetchImpl ?? ((input, init) => fetch(input, init));
  }

  async createOrder(order: CommerceOrder, correlation: Correlation): Promise<CreatedOrder> {
    return tracer.startActiveSpan('commerce.createOrder', async (span) => {
      span.setAttribute('store.id', order.storeId);
      span.setAttribute('order.external_id', order.externalId);
      const end = this.opts.metrics.commerceRequestSeconds.startTimer();
      const headers = outboundHeaders(correlation, { 'content-type': 'application/json' });
      if (this.opts.apiKey) headers.authorization = `Bearer ${this.opts.apiKey}`;
      try {
        const response = await this.fetchImpl(`${this.opts.baseUrl.replace(/\/$/, '')}/orders`, {
          method: 'POST',
          headers,
          body: JSON.stringify(order),
          signal: AbortSignal.timeout(this.opts.timeoutMs),
        });
        if (!response.ok) {
          end({ outcome: `http_${response.status}` });
          const retryable = response.status >= 500 || response.status === 429;
          span.setStatus({ code: SpanStatusCode.ERROR, message: `HTTP ${response.status}` });
          throw new CommerceError(
            `commerce API answered ${response.status}`,
            response.status,
            retryable,
          );
        }
        const body = (await response.json()) as Partial<CreatedOrder>;
        end({ outcome: 'ok' });
        return { orderId: body.orderId ?? '', status: body.status ?? 'accepted' };
      } catch (err) {
        if (err instanceof CommerceError) throw err;
        end({ outcome: 'error' });
        const timeout = err instanceof Error && err.name === 'TimeoutError';
        span.setStatus({ code: SpanStatusCode.ERROR, message: timeout ? 'timeout' : 'network' });
        this.opts.logger.warn(
          { correlationId: correlation.correlationId, err },
          'commerce API call failed',
        );
        throw new CommerceError(
          timeout
            ? `commerce API timed out after ${this.opts.timeoutMs}ms`
            : 'commerce API unreachable',
          null,
          true,
        );
      } finally {
        span.end();
      }
    });
  }
}
