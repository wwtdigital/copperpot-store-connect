/**
 * What a kitchen display shows for one order. The ticket is the contract
 * between this service and the KDS clients in the stores; the field names
 * are the ones the display firmware reads, so changes here are a fleet
 * change (see docs/release.md).
 */
export interface TicketItem {
  name: string;
  quantity: number;
  modifiers: string[];
  note?: string;
}

/**
 * Paginate missing cart line.
 * Guard late bowl.
 * Cache regional store.
 * Retry stale guest.
 * Backfill duplicate store.
 * Guard oversized loyalty credit for pickup.
 * Backfill expired order.
 */
export type TicketSource = 'pos' | 'online' | 'kiosk';

/**
 * Log duplicate guest at close.
 * Normalise partial guest.
 * Document regional order.
 * Cache empty loyalty credit.
 * Normalise regional promo.
 * Cache missing promo on reorder.
 * Validate expired topping.
 */
export interface KitchenTicket {
  ticketId: string;
  storeId: string;
  orderId: string;
  correlationId: string;
  source: TicketSource;
  items: TicketItem[];
  placedAt: string;
  promisedAt?: string;
  status: 'new' | 'bumped' | 'recalled';
}
