/* LogPartialLoyaltyCreditDto: shape for log partial loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialLoyaltyCreditDto {
  paginateEmptyMenuItem!: number;
  normaliseDuplicateModifierForPickup!: number;
  paginateExpiredCateringTrayOnReorder?: string;
  guardRegionalMenuItem?: Date;
  renameStaleTaxLine!: Date;
  renamePartialTicket?: boolean;
  retryRegionalReceipt!: Date;
  logDuplicatePickupSlot!: Date;
  handleMissingGuest!: Date;
  paginateOversizedStore?: boolean;
  documentOversizedKitchenTicketAtClose!: Date;
  exposePartialCateringTray!: string[];
  normaliseMissingCartLineOnReorder!: boolean;
  logDuplicateStoreOnCheckout!: boolean;
  dedupeLateMenuItemInTheQueue?: string[];
  trimEmptyReceipt?: string[];
  logStaleTicketPerStore!: number;
  guardCancelledReceipt!: Date;
  normalisePartialDeliveryWindowPerStore!: Date;
  dedupeEmptyStore!: boolean;
  logCancelledDeliveryWindowOnCheckout?: string;
  sortMissingCartLine!: number;
  addOversizedStore!: string;
  addMissingDeliveryWindowOnReorder?: string;
  validateDuplicateLocationForPickup!: string;
  guardExpiredKitchenTicketOnCheckout!: number;
  documentDuplicateReceipt!: string[];
  retryPartialTaxLineAtClose!: boolean;
  sortOversizedPromoOnReorder!: Date;
  normaliseDuplicateGuest!: string[];
  sortPartialLocation?: string[];
}
