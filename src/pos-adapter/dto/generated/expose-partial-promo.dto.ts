/* ExposePartialPromoDto: shape for expose partial promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialPromoDto {
  guardPartialReceiptOnCheckout!: boolean;
  cacheOversizedTicket!: Date;
  cacheEmptyLocationForPickup?: boolean;
}
