import { describe, expect, it } from 'vitest';
import { MappingError, mapOrderPlaced, throttleCost } from '../src/pos-adapter/mapping.js';
import type { PosOrderPlaced } from '../src/pos-adapter/pos-events.js';

const placed = (over: Partial<PosOrderPlaced> = {}): PosOrderPlaced => ({
  type: 'ORDER_PLACED',
  posOrderId: 'A-77',
  storeNumber: '101',
  registerId: 'R2',
  placedAt: '2024-03-04T17:05:00-05:00',
  lines: [
    { plu: '1001', quantity: 2, modifiers: [' extra salsa ', ''] },
    { plu: '3001', quantity: 1, note: '  light ice ' },
  ],
  tender: 'card',
  ...over,
});

describe('mapOrderPlaced', () => {
  it('maps PLUs to SKUs, trims modifiers and notes, normalises the time', () => {
    const order = mapOrderPlaced(placed());
    expect(order).toEqual({
      externalId: 'pos:101:A-77',
      storeId: '101',
      channel: 'pos',
      registerId: 'R2',
      placedAt: '2024-03-04T22:05:00.000Z',
      tender: 'card',
      items: [
        {
          sku: 'BOWL-CHK-CHIP',
          name: 'Chipotle Chicken Bowl',
          quantity: 2,
          modifiers: ['extra salsa'],
        },
        {
          sku: 'DRK-FOUNTAIN',
          name: 'Fountain Drink',
          quantity: 1,
          modifiers: [],
          note: 'light ice',
        },
      ],
    });
  });

  it('names the field when it rejects', () => {
    const cases: [Partial<PosOrderPlaced>, string][] = [
      [{ storeNumber: 'HQ' }, 'storeNumber'],
      [{ posOrderId: '' }, 'posOrderId'],
      [{ lines: [] }, 'lines'],
      [{ placedAt: 'yesterday' }, 'placedAt'],
      [{ lines: [{ plu: '9999', quantity: 1 }] }, 'lines[0].plu'],
      [{ lines: [{ plu: '1001', quantity: 0 }] }, 'lines[0].quantity'],
      [
        {
          lines: [
            { plu: '1001', quantity: 1 },
            { plu: '1002', quantity: 1.5 },
          ],
        },
        'lines[1].quantity',
      ],
    ];
    for (const [over, field] of cases) {
      let caught: unknown;
      try {
        mapOrderPlaced(placed(over));
      } catch (err) {
        caught = err;
      }
      expect(caught).toBeInstanceOf(MappingError);
      expect((caught as MappingError).field).toBe(field);
    }
  });

  it('uses the catalog it is given', () => {
    const order = mapOrderPlaced(placed({ lines: [{ plu: '42', quantity: 1 }] }), {
      '42': { sku: 'TEST', name: 'Test Item' },
    });
    expect(order.items[0]?.sku).toBe('TEST');
  });
});

describe('throttleCost', () => {
  it('charges one token for an ordinary order and more for a tray', () => {
    expect(throttleCost(mapOrderPlaced(placed()))).toBe(1);
    const tray = mapOrderPlaced(placed({ lines: [{ plu: '1101', quantity: 30 }] }));
    expect(throttleCost(tray)).toBe(3);
  });
});
