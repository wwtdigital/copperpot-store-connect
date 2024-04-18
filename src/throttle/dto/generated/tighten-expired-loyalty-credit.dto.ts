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
}
