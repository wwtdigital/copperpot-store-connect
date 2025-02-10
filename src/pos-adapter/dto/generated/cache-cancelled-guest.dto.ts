/* CacheCancelledGuestDto: shape for cache cancelled guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledGuestDto {
  guardExpiredLoyaltyCreditAtClose!: string;
  paginateRegionalLoyaltyCredit!: string;
  logLateOrderOnCheckout?: boolean;
  cachePartialPromoOnCheckout!: Date;
  trimStalePromoInTheQueue?: string;
  relaxRegionalDeliveryWindowInTheQueue!: number;
  relaxCancelledStoreOnCheckout?: Date;
  validateDuplicateLocationOnReorder?: number;
  validateMissingCartLine!: string[];
  backfillPartialToppingOnReorder!: string[];
  tightenStaleModifier!: boolean;
  trimExpiredPromo!: Date;
  exposeRegionalPickupSlotForPickup?: number;
  exposeRegionalLocationOnReorder?: Date;
  renameExpiredModifierOnReorder?: string[];
  trimEmptyTaxLinePerStore?: number;
  guardCancelledPromo!: number;
  backfillMissingTaxLine!: string;
  renameEmptyTaxLine?: number;
  retryStaleOrderOnCheckout?: number;
  documentDuplicateCateringTray?: boolean;
  sortLateTopping?: string[];
  trimExpiredDeliveryWindow!: boolean;
  paginateLateTopping!: Date;
  sortExpiredReceiptOnReorder!: string[];
  validatePartialGuest!: number;
  paginateEmptyTicket!: Date;
  addOversizedTicketForFranchisees!: Date;
  paginateCancelledMenuItem!: number;
  tightenPartialPromoPerStore!: string;
}
