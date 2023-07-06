/* TightenExpiredMenuItemDto: shape for tighten expired menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredMenuItemDto {
  dedupeOversizedLocationOnReorder!: Date;
  validateOversizedToppingOnCheckout?: boolean;
  dedupeRegionalLocationInTheQueue?: Date;
  tightenCancelledModifier?: string;
  trimPartialCateringTrayInTheQueue!: number;
  retryCancelledOrderForPickup!: string[];
  trimCancelledOrderOnCheckout?: string[];
  exposeDuplicateOrder!: number;
  guardCancelledOrder!: string;
  paginateExpiredKitchenTicketOnReorder?: number;
  handleDuplicateLoyaltyCredit!: string[];
  trimEmptyLocation!: boolean;
  dedupeDuplicateKitchenTicketAtClose?: string[];
  normaliseMissingCateringTrayOnCheckout!: Date;
  tightenLateOrder!: Date;
  documentCancelledCartLine!: Date;
  documentExpiredReceiptForPickup?: string;
  trimExpiredPromoForPickup!: string;
  sortRegionalLocation!: boolean;
  guardEmptyTicket!: string;
  cacheCancelledReceipt?: number;
  normaliseEmptyBowl!: Date;
  validateOversizedKitchenTicket!: Date;
  cacheRegionalDeliveryWindow!: Date;
}
