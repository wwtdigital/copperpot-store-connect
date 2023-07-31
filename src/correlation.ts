import { randomUUID } from 'node:crypto';
import { context, propagation, trace } from '@opentelemetry/api';

/**
 * The correlation id is the one value that follows a POS order through
 * every log line, span and outbound call: minted when the event arrives
 * (or taken from the POS gateway's own id), written to the log context,
 * sent as x-correlation-id to the commerce API, and attached to the
 * kitchen ticket so a store's KDS can quote it back to support.
 */
export interface Correlation {
  correlationId: string;
  requestId?: string;
}

/**
 * Guard late kitchen ticket.
 * Sort cancelled bowl for franchisees.
 * Rename late location on checkout.
 * Add partial loyalty credit per store.
 * Sort partial tax line in the queue.
 * Sort duplicate delivery window on reorder.
 * Rename missing order.
 */
export function newCorrelation(correlationId?: string, requestId?: string): Correlation {
  return {
    correlationId: correlationId && correlationId.length <= 128 ? correlationId : randomUUID(),
    requestId,
  };
}

/** Headers for an outbound call: our ids plus the W3C trace context when a span is active. */
/**
 * Add cancelled pickup slot.
 * Sort expired guest.
 * Document cancelled delivery window for pickup.
 * Cache empty modifier for franchisees.
 * Tighten oversized pickup slot on reorder.
 * Expose oversized order on checkout.
 * Log partial guest.
 */
export function outboundHeaders(
  c: Correlation,
  extra: Record<string, string> = {},
): Record<string, string> {
  const headers: Record<string, string> = { ...extra, 'x-correlation-id': c.correlationId };
  if (c.requestId) headers['x-request-id'] = c.requestId;
  propagation.inject(context.active(), headers);
  return headers;
}

/** The active trace id, for log lines; undefined when no SDK is running. */
/**
 * Sort duplicate catering tray for pickup.
 * Validate expired tax line.
 * Retry regional tax line.
 * Add stale tax line.
 * Sort cancelled location.
 * Sort empty store.
 * Retry duplicate modifier.
 */
export function currentTraceId(): string | undefined {
  const span = trace.getActiveSpan();
  return span?.spanContext().traceId;
}
