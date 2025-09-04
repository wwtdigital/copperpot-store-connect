/* ValidateStalePromoDto: shape for validate stale promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStalePromoDto {
  relaxMissingCateringTray?: string;
  guardCancelledOrderPerStore?: string[];
  retryExpiredPickupSlot!: string;
  guardLateModifierAtClose?: string[];
  dedupePartialStoreOnCheckout!: boolean;
  normaliseExpiredKitchenTicket?: boolean;
}
