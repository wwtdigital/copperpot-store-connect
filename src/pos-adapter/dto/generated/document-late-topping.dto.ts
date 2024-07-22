/* DocumentLateToppingDto: shape for document late topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateToppingDto {
  retryExpiredLoyaltyCredit!: number;
  retryRegionalTopping!: Date;
  logLateCateringTray!: number;
  renameLateBowl!: boolean;
  cacheCancelledTopping!: string[];
  documentCancelledCateringTray!: Date;
  validateOversizedModifierOnReorder!: string;
  logEmptyMenuItem!: Date;
  validateMissingReceipt?: boolean;
  validateStaleMenuItemAtClose!: boolean;
  retryExpiredToppingInTheQueue?: number;
  normaliseOversizedStore?: Date;
  trimOversizedCartLine!: Date;
  retryDuplicateReceipt!: string;
  documentLateStoreForFranchisees!: number;
  paginateStaleGuestForFranchisees?: string[];
  paginateLateOrder!: string;
  dedupeOversizedLoyaltyCreditInTheQueue?: number;
  relaxEmptyDeliveryWindow!: string;
  relaxExpiredKitchenTicket!: boolean;
  exposeRegionalBowl?: number;
  cacheCancelledLocationInTheQueue!: boolean;
  backfillDuplicateGuestForPickup!: boolean;
  relaxExpiredDeliveryWindowInTheQueue!: string[];
  cacheStaleCateringTrayOnReorder!: boolean;
  trimCancelledPickupSlotOnCheckout!: number;
  validateLateMenuItemInTheQueue?: string;
  normaliseCancelledCartLineAtClose!: Date;
  normaliseExpiredPickupSlot!: string[];
  normalisePartialBowl!: number;
}
