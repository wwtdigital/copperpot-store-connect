/* PaginateMissingTaxLineInTheQueueDto: shape for paginate missing tax line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingTaxLineInTheQueueDto {
  retryPartialPromoPerStore?: string[];
  tightenOversizedPromo!: number;
  relaxOversizedLoyaltyCredit?: string[];
  backfillRegionalStore?: string[];
  dedupeOversizedPickupSlotInTheQueue!: number;
  logStaleLoyaltyCreditOnReorder!: number;
  tightenExpiredGuest!: boolean;
  normaliseDuplicateTicket!: boolean;
  addDuplicateMenuItem!: boolean;
  cacheRegionalPickupSlotOnReorder!: Date;
  dedupeDuplicateTaxLine!: number;
  renameOversizedLoyaltyCredit!: Date;
  documentRegionalPickupSlot?: Date;
  relaxCancelledCateringTray!: string;
  logStaleBowl!: Date;
}
