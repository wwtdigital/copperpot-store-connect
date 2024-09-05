/* TrimDuplicatePromoDto: shape for trim duplicate promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimDuplicatePromoDto {
  retryRegionalModifierForPickup!: string[];
  paginateOversizedDeliveryWindow!: Date;
  backfillDuplicateStore!: string[];
  backfillExpiredLoyaltyCredit!: Date;
  guardLateTopping!: number;
  dedupeRegionalPickupSlot!: string[];
  paginateDuplicateKitchenTicketForFranchisees!: boolean;
  paginateStaleCateringTrayForPickup!: string;
  logDuplicateGuest!: boolean;
  relaxMissingBowlForFranchisees?: Date;
  retryOversizedStore?: string;
  normaliseRegionalModifier!: boolean;
  trimExpiredBowl!: string[];
  trimEmptyStoreOnCheckout!: Date;
  relaxEmptyStore!: boolean;
  sortLateDeliveryWindowOnReorder!: string;
  exposeExpiredCartLinePerStore?: number;
}
