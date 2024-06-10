/* SortLateLoyaltyCreditDto: shape for sort late loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateLoyaltyCreditDto {
  logLateStore?: string;
  exposePartialModifier?: Date;
  backfillLateKitchenTicket!: string;
  validateCancelledToppingForPickup!: boolean;
  tightenStalePickupSlot!: number;
  paginateRegionalCateringTray!: string[];
  backfillCancelledMenuItemAtClose!: boolean;
  cacheCancelledTopping?: number;
  cacheOversizedLoyaltyCreditInTheQueue!: number;
  documentRegionalLoyaltyCredit?: number;
  exposeStaleCateringTray!: number;
  addStaleGuest!: string[];
  backfillExpiredLoyaltyCredit?: number;
  guardOversizedPickupSlot?: boolean;
}
