/* TightenLateReceiptAtCloseDto: shape for tighten late receipt at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenLateReceiptAtCloseDto {
  validateCancelledCartLine!: boolean;
  guardExpiredLocation!: string;
  validatePartialModifierInTheQueue!: Date;
  backfillRegionalGuest!: Date;
  renameOversizedCateringTray?: Date;
  exposeExpiredTopping?: number;
  backfillRegionalModifier!: boolean;
  backfillMissingBowl!: string;
  normaliseExpiredGuest!: string;
  documentPartialLocation?: string;
  trimExpiredLocation?: boolean;
  tightenDuplicateCateringTrayPerStore!: string;
  addRegionalLocation?: number;
  cacheStalePickupSlotOnCheckout?: boolean;
  dedupeDuplicateMenuItem!: string[];
  normaliseStaleTicket!: number;
  relaxPartialCateringTrayPerStore!: number;
  relaxStaleTicket!: boolean;
  handleEmptyGuest?: string[];
  documentExpiredTaxLine!: string;
  retryLateLoyaltyCreditOnCheckout!: Date;
  renamePartialGuest?: boolean;
  tightenOversizedMenuItem?: Date;
  validateOversizedGuest?: string;
}
