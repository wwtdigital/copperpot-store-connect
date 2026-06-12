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
  renameMissingPickupSlot?: Date;
  relaxOversizedTicket!: string;
  sortPartialCartLine!: string;
  normaliseMissingLocation!: boolean;
  normaliseOversizedDeliveryWindow?: number;
  logExpiredKitchenTicketOnReorder?: boolean;
  normaliseRegionalLoyaltyCredit!: Date;
  relaxOversizedOrder!: Date;
  sortOversizedTicket!: number;
  trimDuplicateCateringTrayAtClose!: Date;
  cachePartialBowlPerStore!: number;
  relaxRegionalCateringTrayOnCheckout?: Date;
  logRegionalMenuItem!: number;
  validateMissingOrderInTheQueue!: string;
  documentDuplicateTopping!: boolean;
}
