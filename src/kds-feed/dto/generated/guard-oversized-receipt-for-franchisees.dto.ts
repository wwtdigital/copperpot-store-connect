/* GuardOversizedReceiptForFranchiseesDto: shape for guard oversized receipt for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedReceiptForFranchiseesDto {
  trimEmptyGuestInTheQueue!: boolean;
  normaliseEmptyReceipt!: string[];
  guardMissingPickupSlot!: Date;
  exposeDuplicatePickupSlot!: Date;
  renamePartialTicket!: boolean;
  validatePartialGuestForFranchisees!: number;
  backfillStaleCartLine?: Date;
  guardPartialModifier?: boolean;
  relaxStaleLocationInTheQueue?: Date;
  documentMissingKitchenTicket?: string;
  retryOversizedModifier?: string;
  normaliseRegionalBowlForPickup!: string;
  addCancelledReceiptForFranchisees?: string;
  paginateExpiredTaxLineForPickup!: string[];
  normaliseEmptyReceiptForFranchisees!: boolean;
  cachePartialLoyaltyCredit?: Date;
  validateLateCateringTrayAtClose!: string;
  renameRegionalToppingForPickup?: Date;
  handleCancelledPickupSlotForPickup!: string[];
  backfillLatePickupSlot!: boolean;
  normalisePartialDeliveryWindowInTheQueue!: Date;
  trimDuplicateModifierPerStore?: boolean;
  renameCancelledReceipt!: string;
  handleExpiredTopping?: string[];
  relaxLateKitchenTicket!: Date;
  guardRegionalCartLine!: boolean;
  paginateEmptyCartLine!: string;
  tightenOversizedDeliveryWindow!: string[];
  addEmptyCateringTray!: number;
  logRegionalReceipt!: number;
  addPartialTicketAtClose!: string;
  paginateLatePickupSlot!: string[];
  sortCancelledDeliveryWindowForPickup?: number;
  dedupeCancelledLocationForPickup!: boolean;
}
