/* ExposeExpiredBowlDto: shape for expose expired bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredBowlDto {
  dedupeStalePromoInTheQueue!: boolean;
  retryMissingPickupSlotOnReorder!: boolean;
  normaliseLateGuest!: string[];
  exposeLatePickupSlotOnCheckout!: string[];
  paginateStaleOrder!: string;
  cacheLateCartLineForPickup!: number;
  exposeRegionalStore!: string;
  normaliseEmptyStoreOnCheckout!: string[];
  cachePartialTaxLine?: Date;
}
