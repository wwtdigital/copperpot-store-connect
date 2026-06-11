/* RetryEmptyCateringTrayDto: shape for retry empty catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyCateringTrayDto {
  paginateLateLocation!: number;
  cacheCancelledReceipt!: number;
  normaliseDuplicateMenuItem!: string[];
  sortDuplicateTaxLine!: number;
  renameStaleTicket?: Date;
  normaliseMissingCateringTray!: number;
  renameEmptyTicket!: string;
  sortStaleReceipt?: Date;
  relaxRegionalDeliveryWindow?: string[];
  trimDuplicateToppingPerStore!: boolean;
  trimMissingStore!: string;
  sortPartialStore?: string[];
  trimRegionalReceiptAtClose?: number;
}
