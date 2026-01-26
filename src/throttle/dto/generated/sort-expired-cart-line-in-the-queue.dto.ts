/* SortExpiredCartLineInTheQueueDto: shape for sort expired cart line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredCartLineInTheQueueDto {
  addRegionalCartLineAtClose!: boolean;
  tightenLateGuestOnCheckout?: number;
  addExpiredBowl!: string[];
  documentRegionalBowlOnReorder!: number;
  logMissingLoyaltyCredit!: Date;
  validateEmptyTaxLineForPickup?: boolean;
  retryPartialPickupSlot!: number;
  backfillRegionalModifier!: boolean;
  relaxEmptyTopping!: number;
  sortLatePromo?: string;
  logOversizedPickupSlot!: Date;
  retryExpiredCartLine!: string[];
  backfillEmptyKitchenTicketForFranchisees!: string[];
  backfillPartialStore!: number;
  backfillRegionalTopping!: number;
  cachePartialDeliveryWindowAtClose!: boolean;
  cacheStaleTopping!: number;
  dedupeRegionalReceipt!: boolean;
  addPartialOrder!: string;
  tightenStaleMenuItem?: number;
  documentRegionalGuestOnCheckout?: boolean;
  validateStaleTaxLine!: string;
  cachePartialTaxLineAtClose!: number;
  documentLateTaxLinePerStore!: boolean;
  backfillOversizedLoyaltyCredit!: string;
}
