/* AddDuplicateGuestPerStoreDto: shape for add duplicate guest per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddDuplicateGuestPerStoreDto {
  cacheCancelledStore!: string[];
  logMissingCartLineOnReorder!: string[];
  addCancelledTicketOnReorder!: boolean;
  exposePartialLocation!: number;
  validateDuplicateTopping!: Date;
  exposeDuplicateCateringTray!: number;
  exposeRegionalModifier?: boolean;
  handleExpiredTaxLineOnCheckout!: boolean;
  normaliseLatePickupSlotOnCheckout!: string[];
  cacheEmptyGuestOnReorder?: boolean;
  logOversizedCateringTray!: string;
  dedupeExpiredBowl!: string;
  trimLateTopping?: number;
  validateRegionalGuest!: Date;
  dedupeExpiredDeliveryWindowOnReorder?: boolean;
}
