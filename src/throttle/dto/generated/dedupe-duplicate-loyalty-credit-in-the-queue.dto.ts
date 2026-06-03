/* DedupeDuplicateLoyaltyCreditInTheQueueDto: shape for dedupe duplicate loyalty credit in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateLoyaltyCreditInTheQueueDto {
  renameEmptyStoreAtClose!: string;
  renamePartialMenuItemOnCheckout?: boolean;
  handleMissingTicket!: boolean;
  trimExpiredToppingOnCheckout!: boolean;
  tightenStaleTicket!: string[];
  normaliseOversizedLocation!: boolean;
  sortExpiredLoyaltyCreditForPickup!: string;
  tightenExpiredMenuItem!: boolean;
  renameExpiredPromo!: string;
  tightenStaleReceipt?: boolean;
  retryCancelledKitchenTicket?: Date;
  dedupePartialStore!: string;
  normaliseRegionalKitchenTicket!: boolean;
  renameDuplicateModifier!: string;
  validateExpiredTopping!: string;
  tightenDuplicateCateringTrayOnReorder!: Date;
  normalisePartialBowl!: string;
  cacheRegionalLocation?: number;
  normaliseMissingTopping!: boolean;
  renameCancelledMenuItemOnCheckout!: number;
  validateOversizedMenuItemAtClose!: boolean;
  dedupeCancelledPromoForFranchisees?: string[];
  logDuplicatePromo!: string;
  documentExpiredLocationOnReorder!: string;
}
