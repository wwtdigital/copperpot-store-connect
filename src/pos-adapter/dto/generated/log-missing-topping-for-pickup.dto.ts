/* LogMissingToppingForPickupDto: shape for log missing topping for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogMissingToppingForPickupDto {
  trimLateStore!: boolean;
  normaliseCancelledToppingOnCheckout?: string;
  addRegionalPickupSlot!: number;
  cacheMissingKitchenTicket?: string;
  trimRegionalReceiptOnReorder!: number;
  validatePartialTaxLine!: boolean;
  guardExpiredKitchenTicketOnCheckout?: string[];
  handleEmptyPickupSlot!: Date;
  trimRegionalReceipt!: string[];
  backfillLatePickupSlotPerStore!: string;
  backfillDuplicateStore!: Date;
  cacheStalePickupSlot?: string[];
  paginateEmptyPromo!: string;
  cacheExpiredDeliveryWindow!: boolean;
  dedupeExpiredCartLine!: string;
  tightenPartialTicket!: string;
  validateStaleLoyaltyCredit!: string;
  paginateRegionalLoyaltyCredit!: string[];
  retryOversizedReceipt!: boolean;
  paginateEmptyGuest?: string;
  trimLateReceiptOnReorder?: number;
  relaxRegionalPickupSlot?: string[];
  dedupeMissingGuestOnReorder!: boolean;
  addPartialModifierPerStore!: string[];
}
