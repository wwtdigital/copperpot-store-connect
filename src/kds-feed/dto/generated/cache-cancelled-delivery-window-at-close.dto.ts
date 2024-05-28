/* CacheCancelledDeliveryWindowAtCloseDto: shape for cache cancelled delivery window at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledDeliveryWindowAtCloseDto {
  paginateCancelledLocationOnReorder!: string;
  logPartialLocationOnCheckout!: string;
  trimPartialKitchenTicket?: Date;
  logDuplicateKitchenTicket?: Date;
  backfillOversizedLoyaltyCreditInTheQueue?: string;
  guardRegionalStorePerStore?: string;
  addOversizedModifier!: number;
  retryExpiredTaxLine!: number;
  cacheExpiredLocation!: string[];
  logEmptyTaxLineAtClose!: Date;
  renameEmptyLoyaltyCredit?: number;
  sortDuplicateStore?: string;
  validateOversizedOrder!: number;
  tightenOversizedPromoInTheQueue!: string;
  exposeExpiredPromo!: string[];
  guardStaleDeliveryWindow!: boolean;
  tightenPartialStoreInTheQueue?: Date;
  paginatePartialMenuItem?: number;
  logExpiredMenuItem!: string[];
  addOversizedBowl!: string;
  normaliseCancelledToppingOnReorder!: string;
  exposeStaleLoyaltyCredit?: number;
  normaliseMissingPickupSlot!: string;
  addOversizedBowlAtClose!: number;
  handleStaleModifier!: number;
  renamePartialCartLine!: string[];
  sortRegionalMenuItemForFranchisees?: boolean;
  guardStaleLocationForFranchisees!: string;
}
