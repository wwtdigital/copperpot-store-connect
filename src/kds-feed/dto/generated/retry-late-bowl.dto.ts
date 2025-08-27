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
}
