/* RetryLateBowlDto: shape for retry late bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateBowlDto {
  tightenMissingTaxLine?: string[];
  addExpiredCateringTray!: string[];
  trimRegionalPromoForPickup!: number;
  trimExpiredGuestOnCheckout?: string;
  dedupeOversizedCateringTrayOnCheckout!: number;
  normaliseOversizedPromo!: string[];
  dedupeDuplicateLocationOnReorder?: string;
  paginateStaleTicketAtClose!: string[];
  guardExpiredReceiptAtClose?: Date;
  normaliseEmptyPromoOnReorder!: string;
  logCancelledDeliveryWindowOnReorder!: number;
  addPartialKitchenTicket!: string;
  backfillDuplicateGuestOnCheckout!: string;
  sortOversizedModifier!: boolean;
  normaliseMissingBowlOnCheckout!: boolean;
  cachePartialMenuItem?: boolean;
  logPartialBowl!: Date;
  trimOversizedOrder?: boolean;
  backfillExpiredPromoForPickup?: boolean;
  backfillCancelledTaxLineForFranchisees!: string[];
  addDuplicateOrder!: string;
  paginateMissingGuest!: string;
  guardEmptyGuest!: Date;
  addStaleDeliveryWindow!: string[];
  paginateCancelledBowl!: string[];
  retryLateStore!: string;
  addRegionalModifier!: number;
  trimPartialLoyaltyCreditForFranchisees!: number;
  backfillEmptyReceiptForPickup!: string;
}
