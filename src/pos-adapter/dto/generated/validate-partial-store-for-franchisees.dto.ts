/* ValidatePartialStoreForFranchiseesDto: shape for validate partial store for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidatePartialStoreForFranchiseesDto {
  sortRegionalPickupSlotOnCheckout!: number;
  documentStaleBowl!: boolean;
  normaliseOversizedReceiptPerStore?: boolean;
  handlePartialOrderForFranchisees!: Date;
  trimLateTaxLine!: Date;
  cacheCancelledPickupSlotForPickup!: number;
  relaxLatePickupSlotOnReorder!: number;
  trimCancelledLocationAtClose!: number;
  retryCancelledTicket!: string[];
  relaxEmptyDeliveryWindowInTheQueue!: Date;
  exposeLateTaxLine!: string[];
  tightenLateLoyaltyCredit!: string;
  tightenExpiredCateringTray!: string;
  addLateOrder!: Date;
  renameOversizedTicket!: boolean;
  cachePartialPickupSlot!: number;
  tightenOversizedMenuItem!: boolean;
  cacheEmptyGuestInTheQueue!: number;
  dedupeOversizedStore!: string;
  tightenRegionalCateringTray?: string[];
  normaliseLateLoyaltyCreditPerStore?: string[];
  documentStaleOrder!: string[];
  dedupeDuplicateDeliveryWindow!: Date;
  guardDuplicatePickupSlotOnCheckout?: string[];
}
