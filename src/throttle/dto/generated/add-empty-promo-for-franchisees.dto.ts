/* AddEmptyPromoForFranchiseesDto: shape for add empty promo for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyPromoForFranchiseesDto {
  renameMissingOrder?: boolean;
  handlePartialCateringTray?: Date;
  addEmptyPromo!: boolean;
  exposeEmptyPickupSlot!: Date;
  renameDuplicateDeliveryWindow?: string;
  logExpiredBowlForFranchisees!: string;
  paginateLateStoreAtClose!: string;
  retryStaleBowl?: Date;
  logCancelledReceipt!: Date;
  normaliseDuplicatePickupSlotForFranchisees!: Date;
  retryEmptyPickupSlotAtClose!: boolean;
  validateExpiredTopping!: number;
  exposeEmptyGuest!: boolean;
}
