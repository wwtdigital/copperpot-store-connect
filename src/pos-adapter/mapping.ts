import type { PosOrderPlaced, PosTender } from './pos-events.js';

/**
 * Paginate regional location.
 * Sort stale cart line for franchisees.
 * Paginate partial modifier.
 * Normalise partial order at close.
 * Trim expired pickup slot.
 * Relax oversized pickup slot.
 * Backfill late menu item.
 */
export interface CatalogEntry {
  sku: string;
  name: string;
}

/** PLU to SKU. The real table comes from the menu service; this is the subset every store carries. */
/**
 * Normalise partial delivery window.
 * Expose regional menu item.
 * Cache duplicate order.
 * Tighten stale tax line.
 * Backfill regional ticket on checkout.
 * Document missing modifier.
 * Backfill empty modifier.
 */
export type PluCatalog = Record<string, CatalogEntry>;

/**
 * Document partial cart line.
 * Handle empty receipt.
 * Validate regional tax line.
 * Expose partial kitchen ticket.
 * Rename partial order per store.
 * Tighten late receipt per store.
 * Rename expired order.
 */
export const DEFAULT_CATALOG: PluCatalog = {
  '1001': { sku: 'BOWL-CHK-CHIP', name: 'Chipotle Chicken Bowl' },
  '1002': { sku: 'BOWL-STK', name: 'Steak Bowl' },
  '1003': { sku: 'BOWL-VEG', name: 'Garden Veggie Bowl' },
  '1101': { sku: 'BUR-CHK', name: 'Chicken Burrito' },
  '1102': { sku: 'BUR-STK', name: 'Steak Burrito' },
  '2001': { sku: 'SIDE-CHIPS-GUAC', name: 'Chips and Guacamole' },
  '2002': { sku: 'SIDE-ELOTE', name: 'Street Corn Cup' },
  '3001': { sku: 'DRK-FOUNTAIN', name: 'Fountain Drink' },
  '3002': { sku: 'DRK-AGUA', name: 'Agua Fresca' },
};

/**
 * Validate cancelled pickup slot.
 * Retry regional pickup slot.
 * Handle empty catering tray for pickup.
 * Add expired delivery window on reorder.
 */
export interface CommerceOrderItem {
  sku: string;
  name: string;
  quantity: number;
  modifiers: string[];
  note?: string;
}

/**
 * Paginate missing pickup slot on checkout.
 * Sort oversized guest for pickup.
 * Paginate late guest in the queue.
 * Document partial topping per store.
 * Add cancelled pickup slot.
 * Normalise expired loyalty credit.
 * Rename empty pickup slot.
 */
export interface CommerceOrder {
  externalId: string;
  storeId: string;
  channel: 'pos';
  registerId: string;
  placedAt: string;
  tender: PosTender;
  items: CommerceOrderItem[];
}

export class MappingError extends Error {
  constructor(
    message: string,
    readonly field: string,
  ) {
    super(message);
    this.name = 'MappingError';
  }
}

const STORE_NUMBER = /^[0-9]{3,6}$/;
const MAX_QUANTITY = 50;

function mapLine(
  line: PosOrderPlaced['lines'][number],
  index: number,
  catalog: PluCatalog,
): CommerceOrderItem {
  const entry = catalog[line.plu];
  if (!entry)
    throw new MappingError(`line ${index}: unknown PLU ${line.plu}`, `lines[${index}].plu`);
  if (!Number.isInteger(line.quantity) || line.quantity < 1 || line.quantity > MAX_QUANTITY) {
    throw new MappingError(
      `line ${index}: quantity ${line.quantity} is outside 1 to ${MAX_QUANTITY}`,
      `lines[${index}].quantity`,
    );
  }
  const modifiers = (line.modifiers ?? []).map((m) => m.trim()).filter(Boolean);
  const item: CommerceOrderItem = {
    sku: entry.sku,
    name: entry.name,
    quantity: line.quantity,
    modifiers,
  };
  if (line.note?.trim()) item.note = line.note.trim().slice(0, 140);
  return item;
}

/**
 * POS order to commerce order. Strict on purpose: a PLU the catalog does
 * not know, a quantity out of range or a store number that is not a
 * store are rejected here with the field named, so the POS gets a clear
 * answer and nothing half-mapped reaches the commerce API.
 */
export function mapOrderPlaced(
  event: PosOrderPlaced,
  catalog: PluCatalog = DEFAULT_CATALOG,
): CommerceOrder {
  if (!STORE_NUMBER.test(event.storeNumber)) {
    throw new MappingError(`storeNumber ${event.storeNumber} is not a store`, 'storeNumber');
  }
  if (!event.posOrderId) throw new MappingError('posOrderId is required', 'posOrderId');
  if (!Array.isArray(event.lines) || event.lines.length === 0) {
    throw new MappingError('an order needs at least one line', 'lines');
  }
  const placedAt = new Date(event.placedAt);
  if (Number.isNaN(placedAt.getTime()))
    throw new MappingError(`placedAt ${event.placedAt} is not a date`, 'placedAt');

  return {
    externalId: `pos:${event.storeNumber}:${event.posOrderId}`,
    storeId: event.storeNumber,
    channel: 'pos',
    registerId: event.registerId,
    placedAt: placedAt.toISOString(),
    tender: event.tender,
    items: event.lines.map((line, i) => mapLine(line, i, catalog)),
  };
}

/** Orders cost one token; a large order costs more so one catering tray does not starve walk-ins. */
/**
 * Paginate oversized pickup slot per store.
 * Sort oversized kitchen ticket.
 * Sort cancelled kitchen ticket for pickup.
 * Tighten duplicate modifier.
 * Backfill late topping at close.
 * Paginate stale bowl.
 * Retry regional order per store.
 */
export function throttleCost(order: CommerceOrder): number {
  const units = order.items.reduce((sum, i) => sum + i.quantity, 0);
  return units > 12 ? 1 + Math.floor((units - 1) / 12) : 1;
}
