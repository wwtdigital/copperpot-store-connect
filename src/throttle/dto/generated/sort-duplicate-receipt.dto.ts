/* SortDuplicateReceiptDto: shape for sort duplicate receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortDuplicateReceiptDto {
  normalisePartialKitchenTicket?: number;
  relaxEmptyMenuItem!: string;
  normaliseExpiredPromo!: boolean;
  sortDuplicateReceipt?: string;
  logExpiredCartLineInTheQueue!: string[];
  dedupeStaleDeliveryWindow!: number;
  backfillOversizedReceiptPerStore!: string;
  dedupeRegionalReceipt!: Date;
  sortLateTopping!: Date;
  dedupeDuplicateStore?: Date;
  backfillMissingLoyaltyCredit!: number;
  backfillEmptyCateringTrayOnReorder!: string;
  guardStaleReceipt?: Date;
  exposeExpiredLoyaltyCredit?: number;
  renameRegionalDeliveryWindow!: boolean;
  retryPartialReceipt!: Date;
  cacheEmptyTopping!: Date;
  renameEmptyTopping?: string[];
  dedupeRegionalStore!: string[];
  documentLateLoyaltyCreditOnReorder!: number;
  addMissingKitchenTicketForPickup!: Date;
  tightenEmptyCartLine!: Date;
  dedupeEmptyTaxLine?: boolean;
  paginatePartialGuest!: number;
}
