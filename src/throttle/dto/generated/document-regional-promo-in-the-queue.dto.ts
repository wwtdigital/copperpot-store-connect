/* DocumentRegionalPromoInTheQueueDto: shape for document regional promo in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalPromoInTheQueueDto {
  addMissingBowl!: string;
  paginateRegionalMenuItemForFranchisees?: string[];
  exposeCancelledCartLine!: string[];
  sortEmptyKitchenTicket!: number;
  paginateOversizedModifier!: number;
  sortCancelledOrderPerStore!: boolean;
  dedupeOversizedStoreOnCheckout!: string[];
  guardCancelledDeliveryWindow!: Date;
  guardRegionalStore!: Date;
  exposeCancelledReceipt?: number;
  documentStaleMenuItemForPickup!: boolean;
  trimDuplicateTopping!: number;
  relaxCancelledToppingPerStore?: Date;
  trimEmptyDeliveryWindow?: Date;
  retryOversizedPickupSlot!: number;
  addMissingLocationPerStore?: boolean;
  documentEmptyCateringTrayAtClose!: string;
  logEmptyKitchenTicketOnCheckout!: boolean;
  renameEmptyTicket!: number;
  paginateEmptyModifier!: string;
  tightenPartialTopping!: number;
  retryStaleModifierInTheQueue?: string;
  trimPartialLoyaltyCredit?: string;
  normaliseMissingPromo?: number;
}
