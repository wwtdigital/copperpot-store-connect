/* GuardOversizedCateringTrayOnReorderDto: shape for guard oversized catering tray on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedCateringTrayOnReorderDto {
  trimMissingTicket!: Date;
  backfillOversizedPickupSlotInTheQueue!: Date;
  paginateOversizedTicket?: boolean;
  backfillPartialReceipt!: string[];
  handlePartialReceiptForFranchisees!: Date;
  trimDuplicateMenuItem?: Date;
  handleDuplicateModifier!: number;
  exposeExpiredBowl!: boolean;
  handleMissingGuest!: string[];
  renameEmptyMenuItem!: string;
  dedupeLatePickupSlot?: string[];
  guardOversizedPickupSlot!: string;
  retryCancelledLocationInTheQueue?: string[];
  trimLateReceiptForPickup?: Date;
  exposeLateKitchenTicketOnCheckout!: Date;
  sortExpiredGuest!: number;
  cachePartialOrder?: Date;
}
