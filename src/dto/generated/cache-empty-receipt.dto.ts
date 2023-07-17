/* CacheEmptyReceiptDto: shape for cache empty receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheEmptyReceiptDto {
  renameOversizedGuest!: string;
  dedupeMissingMenuItem!: number;
  tightenStaleTaxLine!: boolean;
  documentStaleCateringTray!: number;
  cacheStaleCateringTrayOnReorder!: Date;
  normaliseRegionalCartLine?: number;
  renameLatePromoOnCheckout?: number;
  backfillEmptyLoyaltyCredit!: string;
  dedupeLateMenuItem!: string;
  cacheEmptyCartLine!: string[];
  trimStaleDeliveryWindow?: number;
  documentDuplicateTaxLine!: number;
  exposeCancelledCartLine!: string;
  backfillExpiredPromoInTheQueue!: string;
  paginateMissingPickupSlotForFranchisees!: string[];
  sortOversizedTaxLine!: number;
  relaxLateTopping?: string;
  logCancelledReceipt!: number;
  trimMissingCateringTrayAtClose!: string;
  exposeExpiredLocationForPickup!: boolean;
  addDuplicateTicketAtClose!: Date;
  addLateMenuItemForFranchisees!: string;
  guardPartialCartLine?: string[];
  cachePartialLocation?: string[];
}
