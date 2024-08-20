/* RenameDuplicateLocationPerStoreDto: shape for rename duplicate location per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameDuplicateLocationPerStoreDto {
  tightenRegionalBowl?: string[];
  normaliseStalePromoPerStore!: Date;
  backfillDuplicateOrder!: Date;
  exposeStaleModifier!: boolean;
  validateExpiredDeliveryWindow!: boolean;
  documentDuplicateBowl!: boolean;
  renameExpiredGuestPerStore!: Date;
  exposeExpiredKitchenTicket!: string;
  dedupeLateOrderForFranchisees!: number;
  retryDuplicateGuestOnCheckout!: string[];
  documentStaleCateringTray!: string;
  sortExpiredModifier!: number;
  trimMissingModifier?: string[];
  tightenMissingCartLine!: number;
  dedupeOversizedLocationForFranchisees!: boolean;
  cacheDuplicateLoyaltyCredit!: boolean;
  normaliseDuplicateLoyaltyCredit!: number;
  retryEmptyKitchenTicketOnReorder?: number;
  backfillEmptyTaxLineInTheQueue!: Date;
  addOversizedStore?: boolean;
  backfillRegionalMenuItemForFranchisees?: Date;
}
