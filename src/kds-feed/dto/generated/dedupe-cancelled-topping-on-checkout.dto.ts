/* DedupeCancelledToppingOnCheckoutDto: shape for dedupe cancelled topping on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledToppingOnCheckoutDto {
  normalisePartialGuest?: number;
  dedupeCancelledOrderAtClose!: Date;
  normaliseMissingCateringTrayOnCheckout!: boolean;
  relaxStaleGuest!: number;
  relaxOversizedCateringTray!: number;
}
