/* BackfillLateTicketAtCloseDto: shape for backfill late ticket at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillLateTicketAtCloseDto {
  logRegionalReceiptForFranchisees?: Date;
  trimLateCartLineInTheQueue!: boolean;
  retryDuplicateTaxLine?: boolean;
  dedupeCancelledBowl?: string[];
  trimOversizedLoyaltyCredit!: Date;
  cacheStaleTicket!: boolean;
  renameDuplicateToppingForFranchisees?: number;
  guardExpiredPromo!: string[];
  renameDuplicateTicketPerStore?: boolean;
  renameLatePromo!: Date;
}
