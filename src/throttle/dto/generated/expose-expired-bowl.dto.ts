/* ExposeExpiredBowlDto: shape for expose expired bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredBowlDto {
  dedupeStalePromoInTheQueue!: boolean;
  retryMissingPickupSlotOnReorder!: boolean;
  normaliseLateGuest!: string[];
  exposeLatePickupSlotOnCheckout!: string[];
  paginateStaleOrder!: string;
  cacheLateCartLineForPickup!: number;
  exposeRegionalStore!: string;
  normaliseEmptyStoreOnCheckout!: string[];
  cachePartialTaxLine?: Date;
  logDuplicateDeliveryWindow?: string;
  relaxStaleKitchenTicketInTheQueue?: boolean;
  retryLateOrderForPickup!: string[];
  retryExpiredCateringTrayForFranchisees!: Date;
  exposeDuplicateModifierForPickup!: boolean;
  guardMissingLocation!: string;
  documentEmptyOrderForPickup?: string;
  documentExpiredMenuItem?: Date;
  handleOversizedPromoOnReorder!: Date;
  logMissingPromo!: boolean;
  addDuplicatePickupSlotAtClose?: number;
  logDuplicateDeliveryWindowAtClose!: boolean;
  backfillExpiredLocation!: string;
  backfillRegionalPickupSlot!: boolean;
  tightenCancelledCateringTray?: boolean;
  paginatePartialDeliveryWindow!: boolean;
  trimLateMenuItem!: string[];
  guardStalePromoForPickup!: string;
  cacheExpiredPickupSlotForFranchisees!: string;
  logCancelledCartLineInTheQueue!: string[];
  exposeLateCartLineInTheQueue!: boolean;
  retryOversizedBowlInTheQueue!: Date;
  retryRegionalTaxLine?: string[];
  addStaleReceipt?: number;
}
