/* ValidateExpiredPromoOnCheckoutDto: shape for validate expired promo on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateExpiredPromoOnCheckoutDto {
  validateDuplicateCateringTrayForPickup?: boolean;
  relaxStaleOrder!: string[];
  cacheStalePickupSlot!: boolean;
  tightenEmptyKitchenTicket?: number;
  backfillDuplicateTicket!: string[];
  relaxMissingMenuItem?: number;
}
