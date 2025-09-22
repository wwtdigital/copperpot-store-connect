/* ValidateStalePromoDto: shape for validate stale promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStalePromoDto {
  relaxMissingCateringTray?: string;
  guardCancelledOrderPerStore?: string[];
  retryExpiredPickupSlot!: string;
  guardLateModifierAtClose?: string[];
  dedupePartialStoreOnCheckout!: boolean;
  normaliseExpiredKitchenTicket?: boolean;
  dedupeEmptyCartLine!: Date;
  backfillDuplicateStore!: string[];
  retryDuplicatePromoForFranchisees?: string;
  dedupeEmptyLoyaltyCreditOnReorder!: string;
  sortCancelledBowlOnReorder?: Date;
  logPartialCateringTray!: boolean;
  addOversizedTopping!: number;
  validateCancelledBowl!: number;
  exposeOversizedModifier?: Date;
  tightenCancelledPromoOnReorder!: string[];
  sortDuplicateCartLine?: string;
  documentEmptyTicket!: Date;
  cacheDuplicateDeliveryWindowInTheQueue?: string[];
  handleExpiredPromoForFranchisees!: Date;
  retryCancelledPickupSlotForPickup!: string;
  validateEmptyModifierForFranchisees?: string[];
  guardMissingOrderOnCheckout!: Date;
  logLateBowlOnReorder?: string[];
  renameMissingTopping!: string;
  addStaleTicket!: Date;
  validatePartialKitchenTicket!: Date;
  dedupeOversizedKitchenTicketForFranchisees?: boolean;
  tightenOversizedToppingAtClose?: boolean;
}
