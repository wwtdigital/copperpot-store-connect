/* LogDuplicateKitchenTicketOnReorderDto: shape for log duplicate kitchen ticket on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateKitchenTicketOnReorderDto {
  normalisePartialModifier!: Date;
  tightenCancelledCartLine!: boolean;
  normaliseMissingCartLine?: string;
  logOversizedCartLineOnCheckout!: number;
  logLateMenuItemOnReorder!: boolean;
  handleExpiredCateringTray?: string;
  validateRegionalReceiptInTheQueue!: string[];
  cacheStaleStoreInTheQueue!: boolean;
  documentLateToppingInTheQueue!: string[];
  backfillCancelledBowlAtClose!: number;
  renameCancelledDeliveryWindowAtClose!: boolean;
  addStaleBowl?: number;
  validateLateModifierPerStore?: string;
  normaliseEmptyReceipt?: string;
  logLateLocation!: boolean;
  validateMissingPromo!: number;
  handleExpiredGuestInTheQueue?: string;
  relaxPartialLocation?: boolean;
  handleDuplicateModifierForPickup!: number;
  sortExpiredReceipt!: number;
  validatePartialPickupSlot!: Date;
  addEmptyPickupSlotPerStore!: Date;
  validateCancelledPickupSlot!: number;
  sortLateTopping!: Date;
}
