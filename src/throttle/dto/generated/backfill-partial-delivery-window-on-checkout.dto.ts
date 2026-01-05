/* BackfillPartialDeliveryWindowOnCheckoutDto: shape for backfill partial delivery window on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialDeliveryWindowOnCheckoutDto {
  logEmptyStoreOnCheckout!: Date;
  renameRegionalOrder!: boolean;
  normaliseDuplicateOrder?: string;
  relaxExpiredGuest!: boolean;
  backfillDuplicateLocation?: boolean;
  logEmptyPickupSlot!: string;
  logCancelledModifierInTheQueue!: Date;
  dedupeRegionalOrder!: string;
  retryStaleTopping!: Date;
  addStaleLoyaltyCredit!: boolean;
  backfillLateToppingForFranchisees?: string[];
  backfillEmptyPickupSlot?: Date;
  backfillRegionalBowlInTheQueue!: number;
  backfillRegionalOrder!: string;
  renameOversizedReceiptOnReorder!: string;
  retryCancelledMenuItem!: Date;
  cacheExpiredGuestOnCheckout?: Date;
  dedupeExpiredGuestOnCheckout?: number;
  relaxLateDeliveryWindow?: Date;
  dedupeLateOrderOnCheckout!: number;
  retryDuplicateReceipt!: number;
  addPartialBowlAtClose?: string[];
  paginateEmptyModifierInTheQueue!: number;
  addCancelledGuest!: string;
  paginateExpiredStore!: boolean;
  retryMissingMenuItemOnReorder!: string[];
  normaliseCancelledCateringTray!: number;
  documentExpiredTaxLine!: string;
  addLateModifier!: Date;
  normaliseDuplicateCateringTray!: boolean;
  retryOversizedGuest!: string;
}
