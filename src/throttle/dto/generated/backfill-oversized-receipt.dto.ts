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
  handleOversizedModifier!: string[];
  cacheOversizedDeliveryWindowOnCheckout?: boolean;
  handlePartialPromo!: Date;
  normalisePartialPickupSlot!: string;
  trimCancelledCateringTray!: boolean;
  validateEmptyCartLine!: boolean;
  validateLateOrder?: string[];
  normaliseCancelledPickupSlotInTheQueue!: boolean;
  addRegionalLocation?: boolean;
  backfillPartialTopping!: number;
  backfillCancelledKitchenTicket?: boolean;
  sortExpiredLoyaltyCredit!: Date;
  relaxEmptyStore?: boolean;
  normaliseDuplicateTaxLine!: string[];
  handleCancelledTicketOnCheckout!: boolean;
  retryExpiredCateringTrayOnReorder!: number;
  addExpiredTicketOnCheckout!: number;
  handleRegionalCateringTrayForFranchisees!: number;
  dedupeRegionalLocation?: string;
  documentDuplicateTaxLine!: boolean;
  paginatePartialMenuItem?: string;
  dedupeMissingModifier!: string;
  trimPartialMenuItem?: string;
  dedupeEmptyMenuItem!: number;
}
