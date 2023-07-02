import { describe, expect, it } from 'vitest';
import { ConfigError, loadConfig, parseOverrides } from '../src/config.js';
import { newCorrelation, outboundHeaders } from '../src/correlation.js';
import { createLogger } from '../src/logging.js';
import { StubPosClient } from '../src/pos-adapter/pos-client.js';
import { startTelemetry } from '../src/telemetry.js';

describe('loadConfig', () => {
  it('fills defaults from an empty environment', () => {
    const c = loadConfig({});
    expect(c.port).toBe(8080);
    expect(c.throttle.store).toBe('memory');
    expect(c.throttle.defaults).toEqual({ capacity: 20, refillPerMinute: 12 });
    expect(c.pos.stubStores).toEqual(['101', '102', '103']);
    expect(c.otel.endpoint).toBe('');
  });

  it('reads overrides and rejects malformed values', () => {
    const c = loadConfig({
      THROTTLE_OVERRIDES: '101:5:10, 202:1:0.5',
      PORT: '9090',
      THROTTLE_STORE: 'redis',
    });
    expect(c.port).toBe(9090);
    expect(c.throttle.store).toBe('redis');
    expect(c.throttle.overrides).toEqual({
      '101': { capacity: 5, refillPerMinute: 10 },
      '202': { capacity: 1, refillPerMinute: 0.5 },
    });
    expect(() => loadConfig({ PORT: 'eighty' })).toThrow(ConfigError);
    expect(() => loadConfig({ THROTTLE_STORE: 'disk' })).toThrow(ConfigError);
    expect(() => loadConfig({ POS_MODE: 'replay' })).toThrow(ConfigError);
    expect(() => parseOverrides('101:5')).toThrow(ConfigError);
    expect(() => parseOverrides('101:0:5')).toThrow(ConfigError);
    expect(parseOverrides('')).toEqual({});
  });
});

describe('correlation', () => {
  it('mints an id when none is given and keeps a sane one', () => {
    expect(newCorrelation().correlationId).toMatch(/^[0-9a-f-]{36}$/);
    expect(newCorrelation('pos-77', 'req-1')).toEqual({
      correlationId: 'pos-77',
      requestId: 'req-1',
    });
    expect(newCorrelation('x'.repeat(200)).correlationId).toHaveLength(36);
  });

  it('puts the ids on outbound headers', () => {
    const h = outboundHeaders(
      { correlationId: 'c1', requestId: 'r1' },
      { accept: 'application/json' },
    );
    expect(h).toMatchObject({
      accept: 'application/json',
      'x-correlation-id': 'c1',
      'x-request-id': 'r1',
    });
    expect(outboundHeaders({ correlationId: 'c2' })['x-request-id']).toBeUndefined();
  });
});

describe('logger and telemetry', () => {
  it('stamps service and version on every line', () => {
    const lines: string[] = [];
    const destination = { write: (chunk: string) => void lines.push(chunk) };
    const logger = createLogger({
      service: 'store-connect',
      version: '1.2.3',
      level: 'info',
      destination,
    });
    logger.child({ requestId: 'r-9' }).info('hello');
    const line = JSON.parse(lines[0] ?? '{}');
    expect(line).toMatchObject({
      level: 'info',
      service: 'store-connect',
      version: '1.2.3',
      requestId: 'r-9',
      msg: 'hello',
    });
    expect(typeof line.time).toBe('string');
  });

  it('does not start the SDK without an endpoint', async () => {
    const t = startTelemetry({ serviceName: 's', version: 'v', endpoint: '' });
    expect(t.enabled).toBe(false);
    await t.shutdown();
  });
});

describe('StubPosClient', () => {
  it('emits an order for one of its stores on the interval and stops cleanly', () => {
    const fired: (() => void)[] = [];
    let cleared = 0;
    let seed = 0.1;
    const client = new StubPosClient({
      stores: ['101', '102'],
      intervalMs: 10,
      random: () => (seed = (seed + 0.37) % 1),
      setIntervalImpl: ((fn: () => void) => {
        fired.push(fn);
        return 7 as unknown as ReturnType<typeof setInterval>;
      }) as typeof setInterval,
      clearIntervalImpl: (() => {
        cleared++;
      }) as typeof clearInterval,
    });
    const seen: string[] = [];
    client.start((e) => {
      seen.push(e.type);
    });
    client.start(() => {});
    fired[0]?.();
    fired[0]?.();
    expect(seen).toEqual(['ORDER_PLACED', 'ORDER_PLACED']);
    const e = client.nextEvent(new Date('2024-01-01T12:00:00Z'));
    expect(['101', '102']).toContain(e.storeNumber);
    expect(e.lines.length).toBeGreaterThan(0);
    client.stop();
    client.stop();
    expect(cleared).toBe(1);
  });
});
