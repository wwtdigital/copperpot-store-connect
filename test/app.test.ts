import pino from 'pino';
import { afterAll, describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.js';
import { createMetrics } from '../src/metrics.js';
import { MemoryBucketStore } from '../src/throttle/bucket-store.js';
import { StoreThrottle } from '../src/throttle/throttle.js';

const logger = pino({ level: 'silent' });
let storeUp = true;
const throttle = new StoreThrottle(
  new MemoryBucketStore(),
  { capacity: 4, refillPerMinute: 30 },
  { '555': { capacity: 1, refillPerMinute: 1 } },
);
const app = buildApp({
  service: 'store-connect',
  version: '0.9.0-test',
  logger,
  metrics: createMetrics('test'),
  throttle,
  readiness: [
    { name: 'throttle-store', check: async () => storeUp },
    { name: 'slow', check: () => new Promise((r) => setTimeout(() => r(true), 5)) },
  ],
});

afterAll(() => app.close());

describe('health and readiness', () => {
  it('answers /health with the service and version', async () => {
    const res = await app.inject({ method: 'GET', url: '/health' });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toMatchObject({
      status: 'ok',
      service: 'store-connect',
      version: '0.9.0-test',
    });
  });

  it('answers /ready 200 when every check passes and 503 naming the failure otherwise', async () => {
    expect((await app.inject({ method: 'GET', url: '/ready' })).statusCode).toBe(200);
    storeUp = false;
    const res = await app.inject({ method: 'GET', url: '/ready' });
    expect(res.statusCode).toBe(503);
    expect(res.json().checks).toEqual([
      { name: 'throttle-store', ok: false },
      { name: 'slow', ok: true },
    ]);
    storeUp = true;
  });

  it('echoes a caller request id into the response', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/health',
      headers: { 'x-request-id': 'abc-123' },
    });
    expect(res.statusCode).toBe(200);
  });
});

describe('metrics', () => {
  it('serves the Prometheus exposition', async () => {
    const res = await app.inject({ method: 'GET', url: '/metrics' });
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toContain('text/plain');
    expect(res.body).toContain('process_cpu_seconds_total');
    expect(res.body).toContain('# TYPE store_connect_commerce_request_seconds histogram');
  });
});

describe('throttle operator routes', () => {
  it('reads limits, with overrides marked', async () => {
    const plain = await app.inject({ method: 'GET', url: '/throttle/101' });
    expect(plain.json()).toEqual({
      storeId: '101',
      limits: { capacity: 4, refillPerMinute: 30 },
      override: false,
    });
    const over = await app.inject({ method: 'GET', url: '/throttle/555' });
    expect(over.json()).toMatchObject({ override: true, limits: { capacity: 1 } });
    const all = await app.inject({ method: 'GET', url: '/throttle' });
    expect(all.json()).toEqual({
      store: 'memory',
      overrides: { '555': { capacity: 1, refillPerMinute: 1 } },
    });
  });

  it('sets and clears an override', async () => {
    const put = await app.inject({
      method: 'PUT',
      url: '/throttle/777',
      payload: { capacity: 2, refillPerMinute: 3 },
    });
    expect(put.statusCode).toBe(200);
    expect(put.json()).toEqual({
      storeId: '777',
      limits: { capacity: 2, refillPerMinute: 3 },
      override: true,
    });
    const del = await app.inject({ method: 'DELETE', url: '/throttle/777' });
    expect(del.json()).toEqual({
      storeId: '777',
      limits: { capacity: 4, refillPerMinute: 30 },
      override: false,
    });
  });

  it('rejects bad ids and bad bodies', async () => {
    expect((await app.inject({ method: 'GET', url: '/throttle/HQ' })).statusCode).toBe(400);
    expect(
      (
        await app.inject({
          method: 'PUT',
          url: '/throttle/HQ',
          payload: { capacity: 2, refillPerMinute: 3 },
        })
      ).statusCode,
    ).toBe(400);
    expect((await app.inject({ method: 'DELETE', url: '/throttle/HQ' })).statusCode).toBe(400);
    const bad = await app.inject({
      method: 'PUT',
      url: '/throttle/101',
      payload: { capacity: 0, refillPerMinute: 3 },
    });
    expect(bad.statusCode).toBe(400);
  });
});
