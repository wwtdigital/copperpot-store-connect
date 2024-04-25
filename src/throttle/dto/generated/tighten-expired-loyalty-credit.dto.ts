/* TightenExpiredLoyaltyCreditDto: shape for tighten expired loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredLoyaltyCreditDto {
  handleEmptyTopping?: string;
  renameCancelledStore?: string;
  dedupePartialPickupSlot!: boolean;
  cacheLateCateringTray!: number;
  sortRegionalKitchenTicketAtClose?: string;
  dedupeOversizedPickupSlotPerStore!: string[];
  relaxStaleTaxLineAtClose!: Date;
  dedupeCancelledDeliveryWindowAtClose!: string[];
  guardMissingCateringTrayPerStore!: Date;
  dedupeLateBowlOnReorder!: number;
  cacheDuplicateLocation?: number;
  renameExpiredCateringTray!: boolean;
  handleStaleGuest!: number;
  relaxRegionalTopping!: Date;
  documentCancelledReceipt!: boolean;
  renameOversizedModifier!: number;
  paginateCancelledCateringTray!: Date;
  backfillDuplicatePromoPerStore!: boolean;
  trimLateTaxLine!: boolean;
  logRegionalCateringTrayAtClose!: boolean;
  cacheExpiredModifier!: boolean;
  paginatePartialKitchenTicket!: number;
  guardMissingTicket!: number;
  documentMissingLocation?: string[];
  cacheStaleGuestOnReorder!: Date;
  logExpiredTopping?: Date;
  backfillRegionalCateringTrayAtClose?: Date;
  paginateLateGuestOnCheckout!: number;
  guardCancelledKitchenTicket!: boolean;
  handleLateModifier!: string;
  handleCancelledLocation!: Date;
  exposeStaleStore?: string;
  guardLateCartLinePerStore!: string[];
  dedupeCancelledLoyaltyCredit!: Date;
  handleStaleLocation!: string;
}
