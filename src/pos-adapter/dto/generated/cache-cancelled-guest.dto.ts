/* CacheCancelledGuestDto: shape for cache cancelled guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledGuestDto {
  guardExpiredLoyaltyCreditAtClose!: string;
  paginateRegionalLoyaltyCredit!: string;
  logLateOrderOnCheckout?: boolean;
  cachePartialPromoOnCheckout!: Date;
  trimStalePromoInTheQueue?: string;
}
