/* DedupeDuplicateLoyaltyCreditDto: shape for dedupe duplicate loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateLoyaltyCreditDto {
  addExpiredOrder?: boolean;
  relaxStaleLocation?: number;
  retryOversizedReceipt?: boolean;
  paginatePartialTicketForPickup!: string[];
  backfillLateLocationInTheQueue?: string;
  normaliseStaleModifier?: number;
  logExpiredLocation!: boolean;
  exposeExpiredDeliveryWindow!: string;
  backfillExpiredPickupSlot!: string[];
  paginateExpiredBowl?: number;
  validateLateDeliveryWindow!: number;
  addPartialTaxLineInTheQueue?: boolean;
  validateCancelledBowlInTheQueue?: boolean;
  tightenLateBowl!: Date;
  handleEmptyLoyaltyCredit!: boolean;
  normaliseCancelledModifier!: string;
  paginateLateTicket!: Date;
  trimEmptyTaxLineAtClose!: boolean;
  tightenStaleStoreOnCheckout!: number;
  logRegionalModifierOnReorder!: boolean;
  backfillLateStore!: number;
  documentCancelledLocationOnReorder?: string[];
  guardDuplicateCartLineOnReorder?: string[];
  tightenRegionalTaxLineForFranchisees!: string[];
}
