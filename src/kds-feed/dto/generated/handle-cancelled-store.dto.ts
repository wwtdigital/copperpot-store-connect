/* HandleCancelledStoreDto: shape for handle cancelled store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleCancelledStoreDto {
  paginateDuplicateMenuItemOnCheckout?: string[];
  logCancelledCateringTray?: string[];
  documentRegionalStore?: boolean;
  documentLateCateringTray?: string;
  dedupeEmptyCartLine?: string[];
  addStaleTopping!: string[];
  addLateTicket!: string;
  logExpiredPromo!: string[];
  retryPartialModifier!: Date;
  backfillLateStoreAtClose?: string[];
  logCancelledOrder!: number;
  backfillMissingDeliveryWindow?: string;
  sortLateKitchenTicketPerStore!: number;
  sortMissingReceipt?: boolean;
  logStaleCartLine!: string;
  validateOversizedKitchenTicket!: boolean;
  backfillPartialPickupSlot!: number;
}
