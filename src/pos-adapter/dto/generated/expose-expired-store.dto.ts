/* ExposeExpiredStoreDto: shape for expose expired store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredStoreDto {
  paginateCancelledModifierAtClose?: Date;
  cacheCancelledBowl!: string[];
  dedupeStaleGuest?: string;
  dedupeMissingGuest?: number;
  documentLateLoyaltyCreditInTheQueue!: string;
  validatePartialPickupSlot!: boolean;
  guardExpiredLocation!: boolean;
  renameOversizedToppingPerStore?: string[];
  documentMissingStore!: number;
  exposeDuplicateLoyaltyCredit!: boolean;
  logDuplicateStore!: Date;
  normalisePartialLocation!: Date;
  trimMissingCartLineOnCheckout!: Date;
  handleStaleCateringTrayInTheQueue!: Date;
  guardExpiredKitchenTicket!: number;
}
