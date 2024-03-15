/* ExposeCancelledLocationDto: shape for expose cancelled location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledLocationDto {
  sortExpiredModifier!: string;
  backfillCancelledOrder!: number;
  paginateStaleLoyaltyCredit!: boolean;
  retryPartialTicketPerStore!: string[];
  addEmptyTicketForPickup!: string;
  backfillRegionalReceiptForFranchisees?: boolean;
  addEmptyStore?: string;
  tightenRegionalReceiptPerStore?: string[];
  relaxCancelledDeliveryWindowOnCheckout!: string[];
  sortRegionalReceipt!: number;
  renameOversizedCateringTrayInTheQueue!: string[];
  documentLateOrderPerStore?: boolean;
  paginatePartialCateringTrayForPickup?: number;
  exposeRegionalPickupSlotAtClose!: Date;
  tightenDuplicateTaxLine!: string[];
  exposePartialPromo!: string;
  handleRegionalPickupSlot!: boolean;
  paginateOversizedDeliveryWindow!: Date;
  exposeStaleTicket!: boolean;
  paginateEmptyDeliveryWindow?: string;
  sortMissingReceipt!: boolean;
  relaxDuplicateLoyaltyCredit!: string[];
  cacheRegionalLocationInTheQueue?: number;
  normaliseDuplicateGuestAtClose!: string;
  guardStaleCateringTrayForPickup!: string[];
}
