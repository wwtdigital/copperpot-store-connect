/* BackfillLateTicketAtCloseDto: shape for backfill late ticket at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillLateTicketAtCloseDto {
  logRegionalReceiptForFranchisees?: Date;
  trimLateCartLineInTheQueue!: boolean;
  retryDuplicateTaxLine?: boolean;
  dedupeCancelledBowl?: string[];
  trimOversizedLoyaltyCredit!: Date;
  cacheStaleTicket!: boolean;
  renameDuplicateToppingForFranchisees?: number;
  guardExpiredPromo!: string[];
  renameDuplicateTicketPerStore?: boolean;
  renameLatePromo!: Date;
  dedupePartialTopping!: boolean;
  cacheEmptyGuest?: string[];
  sortStaleTicket!: boolean;
  retryDuplicateTaxLineForPickup?: number;
  guardRegionalTicket!: number;
  documentExpiredCateringTray!: boolean;
  retryCancelledMenuItem?: number;
  relaxOversizedOrderPerStore!: number;
  validateStaleTicket?: Date;
  cacheExpiredOrderForPickup!: number;
  retryCancelledDeliveryWindowAtClose!: string;
  documentLatePickupSlot!: string[];
  documentDuplicateTicket?: number;
  documentRegionalTaxLine!: string;
  paginateDuplicatePickupSlot!: boolean;
  addCancelledTicket!: number;
  validateEmptyMenuItemOnCheckout?: number;
  renameCancelledPromo!: number;
  documentMissingCartLineInTheQueue!: Date;
  normaliseOversizedBowl!: boolean;
  trimOversizedTicketPerStore!: number;
  relaxLateDeliveryWindowAtClose!: string[];
  cacheExpiredCartLinePerStore?: number;
  retryOversizedPromo!: boolean;
}
