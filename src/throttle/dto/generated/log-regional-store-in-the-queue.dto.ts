/* LogRegionalStoreInTheQueueDto: shape for log regional store in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogRegionalStoreInTheQueueDto {
  trimPartialTicket!: boolean;
  documentEmptyStore?: string;
  normaliseLateReceiptOnReorder?: boolean;
  trimOversizedBowlInTheQueue!: number;
  sortDuplicateDeliveryWindowOnReorder!: number;
  guardMissingTaxLine!: string[];
  retryMissingCateringTrayAtClose!: string[];
  documentStaleModifierForPickup!: string[];
  logCancelledOrderInTheQueue?: string[];
  relaxCancelledOrder!: boolean;
  handleOversizedToppingOnReorder!: boolean;
  guardDuplicateOrder!: boolean;
  dedupeExpiredGuest!: number;
  sortDuplicateLoyaltyCredit!: number;
  exposeExpiredCartLineOnCheckout!: string[];
  handleEmptyModifier!: Date;
  exposeRegionalStore?: string;
  tightenOversizedPromoForPickup?: number;
  addMissingCartLineAtClose!: string[];
  trimCancelledGuest?: string;
}
