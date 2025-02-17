/* HandleExpiredStoreForFranchiseesDto: shape for handle expired store for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleExpiredStoreForFranchiseesDto {
  sortRegionalTopping?: number;
  documentExpiredTicketPerStore!: string[];
  backfillEmptyTaxLine!: string;
  exposeRegionalTaxLine?: string;
  documentCancelledDeliveryWindow?: Date;
  exposeOversizedModifierOnReorder!: string;
  normaliseExpiredLoyaltyCreditAtClose!: string[];
  tightenLateBowl!: boolean;
  dedupeLateModifier!: Date;
  sortCancelledBowlForFranchisees!: Date;
  tightenOversizedPromoAtClose!: Date;
  paginateOversizedMenuItem!: string[];
  relaxExpiredOrder!: number;
  guardCancelledMenuItemOnCheckout!: Date;
  cacheExpiredTicket!: Date;
  normaliseMissingCartLine!: Date;
  tightenExpiredMenuItemPerStore!: number;
  handleCancelledLoyaltyCreditInTheQueue?: string[];
  retryMissingDeliveryWindowForPickup!: string;
  addExpiredTaxLine!: string[];
  retryExpiredKitchenTicketAtClose!: string[];
  logEmptyTopping?: boolean;
  renameDuplicateLoyaltyCreditForFranchisees?: number;
  normalisePartialCartLineInTheQueue!: string[];
  tightenDuplicateCartLine?: boolean;
  dedupeOversizedCateringTrayPerStore!: number;
}
