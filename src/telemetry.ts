import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { resourceFromAttributes } from '@opentelemetry/resources';

export interface Telemetry {
  enabled: boolean;
  shutdown(): Promise<void>;
}

/**
 * OpenTelemetry tracing. Spans are created by hand where the work is (the
 * adapter's handle span, the commerce client's call span) and the W3C
 * trace context plus our own x-correlation-id travel on every outbound
 * call (see correlation.ts). With no OTLP endpoint configured the SDK is
 * not started and the API falls back to no-op spans, so local runs and
 * tests pay nothing.
 */
export function startTelemetry(opts: {
  serviceName: string;
  version: string;
  endpoint: string;
}): Telemetry {
  if (!opts.endpoint) return { enabled: false, shutdown: async () => {} };
  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      'service.name': opts.serviceName,
      'service.version': opts.version,
      'deployment.environment': process.env.STAGE ?? 'local',
    }),
    traceExporter: new OTLPTraceExporter({ url: `${opts.endpoint.replace(/\/$/, '')}/v1/traces` }),
  });
  sdk.start();
  return { enabled: true, shutdown: () => sdk.shutdown() };
}
