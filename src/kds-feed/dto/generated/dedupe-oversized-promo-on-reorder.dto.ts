/* DedupeOversizedPromoOnReorderDto: shape for dedupe oversized promo on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedPromoOnReorderDto {
  paginateStaleOrder?: string[];
  relaxMissingMenuItem!: number;
  handleLateLocationOnReorder!: number;
  tightenLateCartLine!: boolean;
  guardStalePickupSlot!: Date;
  dedupeCancelledTopping!: boolean;
  dedupeEmptyModifierInTheQueue!: string[];
  handleStaleGuest!: boolean;
  backfillOversizedTaxLine!: boolean;
  addDuplicateCartLine!: boolean;
  tightenStaleLocation?: string;
  handleStaleStoreAtClose?: Date;
  tightenPartialLoyaltyCredit?: Date;
  retryRegionalToppingForPickup!: number;
  tightenRegionalPromo?: boolean;
  renamePartialReceipt?: string;
  exposeLateBowlForFranchisees!: Date;
  handlePartialOrderInTheQueue?: string;
}
