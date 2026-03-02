/* RetryEmptyLoyaltyCreditForPickupDto: shape for retry empty loyalty credit for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyLoyaltyCreditForPickupDto {
  backfillEmptyGuestForFranchisees!: number;
  backfillOversizedLoyaltyCredit!: Date;
  documentOversizedTicket!: boolean;
  documentPartialBowl!: string;
  addExpiredPickupSlot!: string;
  guardLateCateringTray?: number;
  documentLatePickupSlot!: Date;
  cacheStaleTopping!: boolean;
  paginateStaleGuest!: string;
  guardLateCartLine?: boolean;
  addPartialTicket?: Date;
  dedupeCancelledMenuItem!: Date;
  paginateDuplicateStoreOnReorder!: string[];
  cacheDuplicateTicket?: boolean;
  trimCancelledTaxLine?: number;
  trimStaleModifier!: number;
}
