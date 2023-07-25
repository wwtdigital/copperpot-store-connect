/* CacheStaleMenuItemOnCheckoutDto: shape for cache stale menu item on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheStaleMenuItemOnCheckoutDto {
  trimStaleTaxLineForFranchisees!: number;
  logOversizedGuest!: boolean;
  relaxStaleMenuItem!: Date;
  renameOversizedCateringTrayOnReorder!: boolean;
  guardDuplicateCateringTray?: Date;
  backfillCancelledCateringTrayOnCheckout!: string[];
  sortOversizedOrder!: number;
  exposeOversizedBowlPerStore?: Date;
  sortDuplicateCartLine!: boolean;
  addLateStoreInTheQueue!: boolean;
  dedupeEmptyToppingAtClose?: boolean;
  retryPartialTicketForFranchisees!: string[];
  trimRegionalPickupSlotForPickup?: number;
  documentDuplicateLoyaltyCredit!: boolean;
  validateExpiredCartLineInTheQueue!: number;
  relaxExpiredStoreInTheQueue?: string;
  trimDuplicateCateringTray!: boolean;
  logCancelledDeliveryWindow!: number;
  dedupeRegionalGuestForFranchisees?: boolean;
  paginateOversizedOrder!: string;
  normaliseMissingBowlInTheQueue?: string[];
  dedupePartialMenuItem!: string;
  retryLateStore!: number;
  sortOversizedModifierInTheQueue!: number;
}
