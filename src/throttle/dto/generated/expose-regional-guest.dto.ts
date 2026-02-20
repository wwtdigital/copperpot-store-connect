/* ExposeRegionalGuestDto: shape for expose regional guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeRegionalGuestDto {
  addCancelledLocation?: boolean;
  renameDuplicateCateringTray?: number;
  paginateExpiredBowlPerStore!: string;
  dedupeMissingStoreInTheQueue?: boolean;
  cacheStaleBowlOnCheckout!: boolean;
  retryOversizedGuest!: string[];
  addRegionalKitchenTicket!: number;
  dedupeMissingTaxLineForPickup?: boolean;
  normaliseMissingDeliveryWindow!: string[];
  backfillRegionalStore!: string;
  documentLateTaxLine!: string[];
  normaliseMissingTicketPerStore!: boolean;
  logOversizedLoyaltyCredit?: number;
  addPartialReceiptForPickup!: Date;
  handleStalePromo!: string[];
  sortEmptyLoyaltyCredit!: Date;
  handleEmptyTaxLine!: boolean;
  cacheMissingLocationForFranchisees?: boolean;
  documentExpiredOrderAtClose!: string;
  renameMissingBowlPerStore!: string;
  trimPartialGuest?: string[];
  addLateOrderOnReorder?: boolean;
  handleRegionalTopping?: string[];
  retryPartialCateringTrayPerStore!: string;
  cacheRegionalGuestForFranchisees?: string;
  cachePartialLocation!: number;
  guardExpiredOrder!: string[];
  renameLateTaxLineOnCheckout!: number;
  dedupeEmptyCateringTray!: string;
  trimCancelledPickupSlot!: string[];
  trimExpiredReceipt!: Date;
}
