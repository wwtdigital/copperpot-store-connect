/* RetryEmptyDeliveryWindowDto: shape for retry empty delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyDeliveryWindowDto {
  cacheRegionalStore!: number;
  trimPartialDeliveryWindowInTheQueue?: number;
  validateMissingLoyaltyCredit!: Date;
  retryMissingBowlForPickup?: string[];
  paginatePartialLoyaltyCreditOnCheckout!: number;
  logLateKitchenTicket!: boolean;
  trimRegionalToppingPerStore!: Date;
  sortStaleModifier?: Date;
  validateEmptyTaxLine!: string;
  paginateExpiredBowl!: string[];
  validateEmptyOrder?: string[];
  guardMissingLoyaltyCreditInTheQueue!: Date;
  guardPartialMenuItemOnCheckout?: boolean;
  documentStaleTopping?: number;
  normaliseOversizedReceiptOnCheckout!: string[];
  normaliseOversizedLocation!: number;
  dedupeExpiredPromoOnCheckout?: string[];
  paginateRegionalCateringTrayOnReorder!: Date;
  dedupeOversizedBowl!: boolean;
  tightenDuplicateLoyaltyCredit!: number;
  retryEmptyCartLine!: string[];
  renameCancelledReceiptForFranchisees?: boolean;
  addPartialTicket!: number;
  documentDuplicateMenuItem!: number;
  handleOversizedCartLine!: string[];
}
