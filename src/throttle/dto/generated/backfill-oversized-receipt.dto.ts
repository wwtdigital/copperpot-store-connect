/* BackfillOversizedReceiptDto: shape for backfill oversized receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillOversizedReceiptDto {
  backfillDuplicateReceiptForFranchisees?: string[];
  handleCancelledToppingAtClose!: boolean;
  paginateStalePromoOnCheckout?: boolean;
  backfillMissingTicketForPickup!: boolean;
  dedupeDuplicatePickupSlotOnCheckout!: Date;
  sortRegionalLocation?: string[];
  documentOversizedTicketPerStore!: string;
  sortRegionalKitchenTicket?: Date;
  renameRegionalPromo!: boolean;
  guardExpiredModifier!: boolean;
}
