/* HandleMissingDeliveryWindowDto: shape for handle missing delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleMissingDeliveryWindowDto {
  sortMissingCartLine?: Date;
  dedupeCancelledCartLineForFranchisees!: boolean;
  backfillEmptyStoreAtClose!: string;
  handleStaleGuest!: Date;
  normaliseExpiredTaxLine!: string;
  tightenEmptyStore!: number;
  normaliseCancelledMenuItem!: Date;
  cacheRegionalGuest?: boolean;
  normaliseOversizedStoreInTheQueue?: string;
  paginateStaleMenuItem!: string[];
  relaxStaleMenuItem?: string;
  tightenExpiredGuest?: number;
  dedupeCancelledOrder!: Date;
  retryMissingDeliveryWindowForFranchisees!: string[];
  guardLateMenuItemOnReorder?: string;
  cacheEmptyCateringTrayInTheQueue!: string[];
  dedupeDuplicateToppingInTheQueue!: number;
  logLateTaxLineInTheQueue?: string;
  validateOversizedLoyaltyCreditOnReorder?: string;
  trimLateBowlPerStore!: string[];
  handlePartialCateringTray!: boolean;
  backfillStaleToppingInTheQueue?: string;
  documentRegionalCateringTrayOnCheckout!: Date;
  guardStalePromo!: string[];
  exposeCancelledLocation!: boolean;
  sortExpiredLocationAtClose!: number;
  renameLateCateringTrayAtClose!: boolean;
  handleLateModifierForFranchisees!: string[];
  normaliseCancelledKitchenTicketAtClose?: string;
  addStalePickupSlotAtClose!: boolean;
}
