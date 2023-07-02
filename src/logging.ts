import pino from 'pino';

export type Logger = pino.Logger;

/**
 * Structured JSON logging. Every line carries `service` and `version`;
 * request-scoped lines carry `requestId` (Fastify's request id, taken from
 * the x-request-id header when a caller sends one) and `correlationId`
 * where the adapter is handling a POS event. Levels are labels, not
 * numbers, so the log pipeline can filter without a lookup table.
 */
export function createLogger(opts: {
  service: string;
  version: string;
  level: string;
  destination?: pino.DestinationStream;
}): Logger {
  return pino(
    {
      level: opts.level,
      base: { service: opts.service, version: opts.version },
      timestamp: pino.stdTimeFunctions.isoTime,
      formatters: {
        level: (label) => ({ level: label }),
      },
      redact: {
        paths: ['req.headers.authorization', 'headers.authorization', '*.apiKey'],
        censor: '[redacted]',
      },
    },
    opts.destination,
  );
}
