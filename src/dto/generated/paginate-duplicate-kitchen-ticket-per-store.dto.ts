/* PaginateDuplicateKitchenTicketPerStoreDto: shape for paginate duplicate kitchen ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateDuplicateKitchenTicketPerStoreDto {
  backfillStaleReceipt?: string;
  dedupePartialLoyaltyCreditOnCheckout!: string[];
  sortExpiredPromo?: Date;
  retryPartialLoyaltyCreditInTheQueue!: number;
  tightenStaleBowl?: string[];
  dedupeCancelledOrder!: boolean;
  relaxExpiredPickupSlot!: string;
  tightenLateCartLine!: boolean;
  backfillLateTopping!: boolean;
  handleLatePromoPerStore!: string;
  cachePartialMenuItem!: string[];
  dedupeCancelledCartLineOnCheckout!: boolean;
  paginateOversizedTopping!: string;
  validateDuplicateBowl?: boolean;
  trimRegionalLocationInTheQueue!: number;
  retryDuplicatePromo!: number;
  retryStaleCateringTray!: string[];
  handleStaleLoyaltyCreditForFranchisees!: Date;
  sortLatePromo!: string;
  normaliseOversizedModifierForFranchisees!: Date;
  exposeExpiredPickupSlotForPickup!: string;
  handleEmptyTicket!: number;
  addEmptyTaxLineInTheQueue!: string;
  logLateGuest!: string;
}
