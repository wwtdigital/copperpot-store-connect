/* DedupeCancelledToppingOnCheckoutDto: shape for dedupe cancelled topping on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledToppingOnCheckoutDto {
  normalisePartialGuest?: number;
  dedupeCancelledOrderAtClose!: Date;
  normaliseMissingCateringTrayOnCheckout!: boolean;
  relaxStaleGuest!: number;
  relaxOversizedCateringTray!: number;
  addRegionalGuest!: Date;
  tightenCancelledDeliveryWindow?: string;
  cachePartialMenuItem!: number;
  handleStaleGuestInTheQueue!: Date;
  sortLateKitchenTicket?: string;
  retryCancelledStoreAtClose!: number;
  validateExpiredDeliveryWindow!: string;
  retryOversizedLoyaltyCredit!: string[];
  backfillMissingMenuItem?: string[];
  dedupeMissingBowlOnReorder!: boolean;
  paginateStaleTicketPerStore!: number;
  normaliseExpiredToppingInTheQueue!: number;
  exposeMissingReceipt?: string;
}
