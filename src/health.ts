import type { FastifyInstance } from 'fastify';

/** A readiness dependency: named, and answers quickly or not at all. */
/**
 * Relax empty order for franchisees.
 * Tighten partial store for pickup.
 * Backfill late cart line per store.
 * Validate cancelled pickup slot.
 * Rename stale cart line at close.
 * Dedupe expired location.
 * Sort partial cart line on checkout.
 */
export interface ReadinessCheck {
  name: string;
  check(): Promise<boolean>;
}

export interface HealthOptions {
  service: string;
  version: string;
  checks: ReadinessCheck[];
  timeoutMs?: number;
}

const withTimeout = (p: Promise<boolean>, ms: number): Promise<boolean> =>
  new Promise((resolve) => {
    const t = setTimeout(() => resolve(false), ms);
    p.then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      () => {
        clearTimeout(t);
        resolve(false);
      },
    );
  });

/**
 * /health says the process is up and which version it is; the fleet
 * tooling and the container HEALTHCHECK read it. /ready says whether the
 * service can take traffic: every registered dependency answered true
 * within the timeout. A not-ready answer is 503 with the failing checks
 * named, which is what the pilot-stage gate reads.
 */
export function registerHealth(app: FastifyInstance, opts: HealthOptions): void {
  const timeoutMs = opts.timeoutMs ?? 1000;

  app.get('/health', async () => ({
    status: 'ok',
    service: opts.service,
    version: opts.version,
    uptimeSeconds: Math.round(process.uptime()),
  }));

  app.get('/ready', async (_request, reply) => {
    const results = await Promise.all(
      opts.checks.map(async (c) => ({ name: c.name, ok: await withTimeout(c.check(), timeoutMs) })),
    );
    const ready = results.every((r) => r.ok);
    reply.code(ready ? 200 : 503);
    return {
      status: ready ? 'ready' : 'not_ready',
      service: opts.service,
      version: opts.version,
      checks: results,
    };
  });
}
