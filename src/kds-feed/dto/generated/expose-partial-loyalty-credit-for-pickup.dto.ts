/* ExposePartialLoyaltyCreditForPickupDto: shape for expose partial loyalty credit for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialLoyaltyCreditForPickupDto {
  guardDuplicateCartLineForFranchisees!: string;
  backfillPartialModifier!: string[];
  tightenLateTaxLine?: string[];
  exposeOversizedBowl!: string[];
  tightenOversizedPromo!: Date;
  handleStaleCateringTray?: Date;
  retryExpiredPickupSlotPerStore!: string;
  trimCancelledKitchenTicket?: Date;
  paginateMissingDeliveryWindow!: Date;
  validateCancelledDeliveryWindow?: string;
  backfillLateKitchenTicketForFranchisees!: string[];
  cacheRegionalStoreOnCheckout!: string;
  backfillPartialGuest?: string;
  guardCancelledStorePerStore!: string;
  dedupeStaleTaxLineAtClose!: Date;
  paginateLateMenuItemOnCheckout!: Date;
  handleExpiredTaxLine!: string[];
  validateRegionalPickupSlotForFranchisees?: Date;
  validatePartialStore!: number;
  logLatePromo!: string;
  normaliseMissingCateringTrayInTheQueue!: string;
  paginatePartialBowl!: boolean;
  backfillEmptyModifier!: number;
  backfillRegionalStore!: string;
}
