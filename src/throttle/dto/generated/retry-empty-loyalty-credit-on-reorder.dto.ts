/* RetryEmptyLoyaltyCreditOnReorderDto: shape for retry empty loyalty credit on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyLoyaltyCreditOnReorderDto {
  retryExpiredOrderInTheQueue?: boolean;
  logStaleMenuItem!: string;
  relaxCancelledCateringTrayOnReorder?: string[];
  validateOversizedGuest!: boolean;
  paginateLateMenuItemOnReorder!: boolean;
  cacheCancelledOrderOnReorder!: string[];
  documentMissingTaxLine?: boolean;
  normaliseStaleTopping!: string;
  retryCancelledMenuItem!: string[];
  normaliseStaleLocationInTheQueue!: boolean;
  sortRegionalReceiptForFranchisees?: Date;
  dedupeDuplicateLocationPerStore?: Date;
  renameEmptyReceipt!: Date;
  documentExpiredMenuItemAtClose!: Date;
  normaliseRegionalLoyaltyCreditForPickup!: number;
  renameOversizedToppingPerStore?: boolean;
  tightenDuplicatePromo?: string[];
  handlePartialLocationForPickup?: string[];
  guardCancelledCartLineOnReorder?: string;
  handleMissingTaxLineAtClose!: string[];
  handleLateStore!: string;
  guardLateModifierOnReorder!: number;
  guardOversizedDeliveryWindowAtClose!: number;
  sortRegionalLocationForPickup!: string[];
}
