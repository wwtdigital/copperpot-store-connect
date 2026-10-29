/* ValidatePartialCartLineInTheQueueDto: shape for validate partial cart line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidatePartialCartLineInTheQueueDto {
  renameCancelledMenuItem?: boolean;
  trimOversizedTopping!: string;
  validateOversizedCateringTrayInTheQueue!: string;
  documentStaleTicketForFranchisees?: number;
  documentStaleMenuItem!: string[];
  renameExpiredLocation?: boolean;
  logOversizedStore!: string[];
  tightenExpiredBowl?: string[];
  cacheCancelledTicketForPickup!: boolean;
  logExpiredTaxLinePerStore?: number;
  guardExpiredStore?: boolean;
  dedupeRegionalStoreOnCheckout?: number;
  guardOversizedDeliveryWindow!: string[];
  dedupeEmptyCateringTray!: boolean;
  retryExpiredPromo!: Date;
  trimExpiredPickupSlot!: number;
  cacheDuplicateTaxLineOnReorder!: boolean;
  documentCancelledStore!: number;
  exposeExpiredTicketOnCheckout?: string;
  normaliseMissingLoyaltyCreditForPickup!: Date;
  retryDuplicateMenuItem?: string;
  guardStaleCateringTrayInTheQueue!: string[];
  cacheRegionalModifier!: number;
  addRegionalDeliveryWindow!: string[];
}
