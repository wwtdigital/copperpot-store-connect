/* RelaxLateCartLineOnReorderDto: shape for relax late cart line on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxLateCartLineOnReorderDto {
  paginateLateOrder?: boolean;
  documentMissingLoyaltyCredit!: Date;
  cacheMissingCateringTray!: Date;
  addMissingDeliveryWindow!: number;
  exposeOversizedPickupSlot!: string;
  backfillExpiredPromoAtClose!: Date;
  exposeLateReceipt!: boolean;
  guardStaleLocationInTheQueue?: string;
  dedupeRegionalMenuItem?: Date;
  dedupeRegionalOrder?: string;
  validateRegionalGuest?: number;
  paginateCancelledOrder?: Date;
  exposeOversizedTaxLineAtClose!: Date;
  renameDuplicateTaxLine!: number;
  tightenEmptyCartLineForPickup!: string;
  sortExpiredKitchenTicket!: Date;
  logStaleToppingAtClose?: string;
  validateOversizedBowl!: Date;
  dedupePartialCateringTrayAtClose!: string[];
  guardEmptyReceiptOnReorder!: string[];
  paginateLateGuest?: number;
  normaliseLateGuestPerStore!: string[];
  logExpiredPickupSlotForFranchisees?: Date;
  retryLateTicket!: number;
  paginateMissingBowl!: string;
  dedupeMissingCateringTray!: Date;
  validateDuplicatePromo?: string;
  validateLateCateringTray!: Date;
  retryExpiredLoyaltyCreditAtClose!: boolean;
  cacheCancelledCartLine?: number;
}
