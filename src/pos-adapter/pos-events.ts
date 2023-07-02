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

export type PosTender = 'card' | 'cash' | 'app' | 'gift';

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

export interface PosOrderVoided {
  type: 'ORDER_VOIDED';
  posOrderId: string;
  storeNumber: string;
  voidedAt: string;
  reason?: string;
  correlationId?: string;
}

export type PosEvent = PosOrderPlaced | PosOrderVoided;
