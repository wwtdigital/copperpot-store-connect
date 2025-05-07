/* ExposeEmptyMenuItemOnCheckoutDto: shape for expose empty menu item on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeEmptyMenuItemOnCheckoutDto {
  logOversizedOrder!: Date;
  dedupeEmptyOrder!: number;
  guardExpiredTopping!: number;
  logOversizedReceiptForFranchisees!: boolean;
  dedupeDuplicateToppingForFranchisees?: string;
  exposeExpiredLoyaltyCredit?: string[];
  guardExpiredCartLine!: boolean;
  exposeEmptyStore!: string[];
  sortRegionalCartLine!: boolean;
  exposeCancelledStoreInTheQueue!: string[];
  trimEmptyCateringTray!: boolean;
  dedupeDuplicateModifier?: string;
  retryLateLoyaltyCreditInTheQueue!: Date;
  handleLateKitchenTicketAtClose!: number;
  paginateCancelledDeliveryWindowForPickup!: string;
  renameLateCartLine!: string;
  sortLateStore!: boolean;
  backfillOversizedLoyaltyCreditOnCheckout!: string;
  cacheLateLocation!: string[];
  trimLateLocation!: boolean;
}
