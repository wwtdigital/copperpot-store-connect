/* RetryEmptyOrderDto: shape for retry empty order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyOrderDto {
  relaxCancelledKitchenTicket!: number;
  sortOversizedLocationOnCheckout!: string[];
  guardDuplicateLocationOnCheckout?: string;
  validateExpiredToppingForFranchisees!: boolean;
  trimEmptyBowl!: string;
  guardMissingTaxLineAtClose!: string;
  tightenExpiredKitchenTicket!: string;
  retryEmptyReceiptOnReorder!: string;
  guardDuplicateToppingOnCheckout!: string;
  tightenRegionalDeliveryWindow?: string[];
  cacheEmptyStore!: string;
  renameStalePromoInTheQueue!: boolean;
  logOversizedCartLine!: Date;
  exposePartialCateringTray!: boolean;
  paginateEmptyGuest!: Date;
  sortEmptyCateringTray?: Date;
  tightenRegionalModifier?: number;
  documentOversizedTopping?: boolean;
  logOversizedTopping?: string[];
  sortEmptyModifierForPickup!: Date;
  exposeStaleLocation!: boolean;
  guardLateTopping?: number;
  cacheRegionalStoreInTheQueue!: string;
  cacheMissingPickupSlotForFranchisees!: number;
  trimPartialStore!: string[];
  validateEmptyModifierOnReorder!: number;
  paginateStaleCateringTray!: string;
}
