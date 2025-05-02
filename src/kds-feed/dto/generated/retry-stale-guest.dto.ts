/* RetryStaleGuestDto: shape for retry stale guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleGuestDto {
  cacheStaleLoyaltyCreditPerStore!: boolean;
  backfillEmptyOrder!: number;
  validateDuplicateLocation!: Date;
  tightenStaleCateringTray?: boolean;
  paginateLateLoyaltyCredit!: number;
  backfillExpiredCartLine!: boolean;
  validateRegionalTicketForPickup!: string;
  addLatePromo!: Date;
  trimCancelledGuest!: string;
}
