/* SortExpiredDeliveryWindowDto: shape for sort expired delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredDeliveryWindowDto {
  paginatePartialReceipt!: string;
  sortMissingPromoInTheQueue?: string[];
  backfillCancelledOrder?: Date;
  retryStaleCateringTray?: string;
  addExpiredPickupSlot!: boolean;
  renameRegionalOrder!: string[];
  addPartialLoyaltyCredit?: boolean;
  trimLateModifier!: boolean;
  paginateCancelledGuestPerStore?: string;
  addLatePromoPerStore?: number;
}
