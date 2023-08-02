/* RenameLateLoyaltyCreditDto: shape for rename late loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLateLoyaltyCreditDto {
  backfillMissingStore!: number;
  normaliseOversizedCartLineForFranchisees!: number;
  sortRegionalGuestForFranchisees!: boolean;
  cacheStaleTopping?: boolean;
  relaxExpiredMenuItemForPickup!: string;
  validateEmptyBowlOnCheckout!: string;
  retryPartialCartLineForFranchisees!: boolean;
  renameRegionalBowl!: Date;
  logDuplicateLocationPerStore!: number;
  logOversizedModifierAtClose!: Date;
  cacheLateTopping!: string[];
  tightenCancelledCateringTray!: string;
  logExpiredStoreForPickup?: number;
  relaxDuplicateBowlOnReorder?: boolean;
  cacheEmptyReceipt!: number;
  sortDuplicateGuestForPickup?: Date;
  logStalePromoAtClose!: boolean;
  dedupeStaleCartLineInTheQueue!: string[];
  dedupeOversizedPromo?: number;
  cacheExpiredStore?: boolean;
  paginatePartialGuestOnCheckout?: number;
  guardCancelledModifierOnReorder!: number;
  cacheCancelledTicketAtClose!: string;
  backfillDuplicateDeliveryWindow!: string;
}
