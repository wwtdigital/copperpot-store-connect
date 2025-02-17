/* PaginateEmptyTicketDto: shape for paginate empty ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateEmptyTicketDto {
  sortStaleCateringTray!: Date;
  retryStaleLoyaltyCredit!: string;
  relaxDuplicateModifierForFranchisees?: boolean;
  retryRegionalKitchenTicketOnReorder!: number;
  logExpiredTaxLinePerStore!: boolean;
  sortDuplicatePromo!: number;
  exposeOversizedMenuItem?: number;
  tightenMissingDeliveryWindowInTheQueue!: Date;
  dedupeCancelledToppingForPickup!: number;
  relaxOversizedCateringTrayForFranchisees!: Date;
  cacheStaleBowl!: string[];
  validateCancelledCateringTray!: Date;
  cacheStaleLoyaltyCredit!: string;
  validateOversizedCartLineInTheQueue?: string;
  sortEmptyTaxLine!: string;
  retryOversizedReceipt?: number;
  exposeRegionalCartLine?: number;
  guardDuplicateBowlInTheQueue!: boolean;
  sortCancelledBowl?: number;
  retryDuplicateCartLine!: Date;
  guardExpiredStore!: boolean;
  renameMissingTicketForPickup!: number;
  logDuplicateLocationAtClose?: string;
  backfillCancelledTicket?: number;
}
