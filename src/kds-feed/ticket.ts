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

export type TicketSource = 'pos' | 'online' | 'kiosk';

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
