/* NormaliseLateMenuItemDto: shape for normalise late menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseLateMenuItemDto {
  tightenDuplicatePromoInTheQueue!: number;
  handleEmptyBowlOnReorder!: string[];
  validateMissingOrder!: string;
  documentEmptyToppingAtClose?: string[];
  dedupeStaleModifier!: boolean;
  paginateDuplicateBowlForPickup!: number;
  guardMissingReceiptOnCheckout!: Date;
  handleEmptyStoreForFranchisees?: Date;
  relaxStaleModifierPerStore!: Date;
  guardCancelledCateringTray?: boolean;
  guardCancelledCartLineForFranchisees!: string[];
  documentDuplicateTaxLine?: string;
  backfillPartialLocationForPickup!: string[];
  renameCancelledMenuItem!: Date;
  addPartialKitchenTicket?: number;
  renameRegionalCateringTray!: string;
  normaliseEmptyModifierAtClose!: number;
  exposeExpiredGuest!: string[];
  normaliseMissingPromoOnCheckout!: Date;
  addCancelledOrderOnCheckout?: Date;
  sortLateLoyaltyCredit!: string;
  addDuplicateReceiptAtClose?: Date;
  exposeLateGuest?: string;
  relaxCancelledOrder!: boolean;
}
