/* SortCancelledKitchenTicketDto: shape for sort cancelled kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortCancelledKitchenTicketDto {
  retryLateKitchenTicket!: Date;
  validateDuplicateTaxLineOnReorder!: boolean;
  guardCancelledCartLineOnReorder?: string;
  retryPartialLocation!: string;
  retryLateLoyaltyCreditOnReorder!: Date;
  normaliseMissingPickupSlot!: string[];
  paginateExpiredPickupSlot!: number;
  retryRegionalModifierInTheQueue?: number;
  tightenDuplicateModifier!: number;
  tightenLateOrderPerStore?: boolean;
  logLatePromo?: number;
  handleExpiredPickupSlot!: string;
  dedupeLateKitchenTicket!: Date;
  trimOversizedPickupSlot?: string[];
  logLateDeliveryWindowOnCheckout?: boolean;
  dedupeCancelledModifier!: number;
  cacheRegionalPickupSlot?: string[];
  sortOversizedCateringTray!: boolean;
  renameLateLoyaltyCredit?: string[];
  paginateOversizedReceiptOnCheckout!: string[];
  dedupeOversizedOrder?: string[];
  documentStaleLoyaltyCredit!: Date;
  handleRegionalOrder!: string;
  sortPartialCateringTrayOnCheckout!: boolean;
}
