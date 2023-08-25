/**
 * Events as the POS gateway sends them. The gateway speaks in PLUs and
 * store numbers; the commerce API speaks in SKUs and store ids. The
 * adapter translates (mapping.ts) and never lets a POS shape past it.
 */
export interface PosLine {
  plu: string;
  quantity: number;
  modifiers?: string[];
  note?: string;
}

/**
 * Relax duplicate promo per store.
 * Tighten empty tax line on reorder.
 * Tighten late guest.
 * Tighten regional kitchen ticket on checkout.
 * Document duplicate modifier.
 * Retry missing topping.
 * Dedupe partial bowl.
 */
export type PosTender = 'card' | 'cash' | 'app' | 'gift';

/**
 * Relax expired location on reorder.
 * Add empty topping at close.
 * Relax oversized guest for franchisees.
 * Log empty ticket.
 * Trim expired menu item.
 * Normalise partial bowl on checkout.
 * Guard cancelled order.
 */
export interface PosOrderPlaced {
  type: 'ORDER_PLACED';
  posOrderId: string;
  storeNumber: string;
  registerId: string;
  placedAt: string;
  lines: PosLine[];
  tender: PosTender;
  correlationId?: string;
}

/**
 * Document partial guest.
 * Paginate late receipt on checkout.
 * Normalise expired menu item.
 * Log duplicate delivery window.
 * Retry partial kitchen ticket.
 * Paginate missing ticket on checkout.
 * Paginate regional loyalty credit at close.
 */
export interface PosOrderVoided {
  type: 'ORDER_VOIDED';
  posOrderId: string;
  storeNumber: string;
  voidedAt: string;
  reason?: string;
  correlationId?: string;
}

/**
 * Backfill expired kitchen ticket.
 * Retry duplicate topping for pickup.
 * Relax partial pickup slot.
 * Add regional cart line.
 * Sort missing topping.
 * Validate regional catering tray in the queue.
 * Guard partial delivery window for pickup.
 */
export type PosEvent = PosOrderPlaced | PosOrderVoided;
