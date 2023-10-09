/* DedupeDuplicateLocationDto: shape for dedupe duplicate location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateLocationDto {
  guardOversizedModifier!: number;
  addLatePromo?: boolean;
  paginateExpiredMenuItemForPickup!: string;
  logStaleTicket!: string;
  validateCancelledPickupSlotAtClose!: string[];
  dedupeDuplicateReceipt!: string[];
  dedupeDuplicateBowlForFranchisees?: boolean;
  renameRegionalOrderForFranchisees!: boolean;
  trimLateTaxLineForFranchisees!: number;
  handleCancelledGuest!: Date;
  backfillStaleLoyaltyCredit!: Date;
  normaliseOversizedPickupSlot!: string;
  retryPartialOrderAtClose?: string[];
  relaxStaleCartLineOnReorder?: Date;
  dedupePartialLocationOnCheckout?: boolean;
  exposePartialLoyaltyCreditAtClose!: number;
  handleRegionalToppingForPickup!: string[];
  backfillPartialModifier!: boolean;
}
