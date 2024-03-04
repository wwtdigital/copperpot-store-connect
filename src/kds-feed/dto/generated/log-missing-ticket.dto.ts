/* LogMissingTicketDto: shape for log missing ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogMissingTicketDto {
  paginateCancelledLocation!: string[];
  dedupeExpiredTaxLine?: number;
  paginateOversizedDeliveryWindowForPickup!: number;
  documentRegionalPickupSlotForPickup?: boolean;
  normaliseLateCateringTrayOnReorder!: Date;
  tightenCancelledBowlAtClose?: Date;
  addStalePromoForPickup?: boolean;
  normaliseOversizedCartLine!: Date;
  cacheExpiredOrder!: string[];
  exposePartialLoyaltyCredit!: Date;
  paginateCancelledKitchenTicketAtClose!: Date;
  paginateOversizedCateringTrayInTheQueue!: boolean;
  backfillDuplicateOrder!: boolean;
  documentLateKitchenTicket!: string[];
  tightenDuplicateKitchenTicketAtClose!: string[];
  dedupeCancelledCateringTray!: string[];
  retryDuplicateToppingOnReorder!: string[];
  sortMissingBowlForPickup?: Date;
}
