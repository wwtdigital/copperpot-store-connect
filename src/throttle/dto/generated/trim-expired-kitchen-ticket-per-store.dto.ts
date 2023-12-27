/* TrimExpiredKitchenTicketPerStoreDto: shape for trim expired kitchen ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimExpiredKitchenTicketPerStoreDto {
  renamePartialCateringTrayForFranchisees!: boolean;
  guardEmptyLoyaltyCredit!: string[];
  backfillPartialLoyaltyCredit?: string[];
  addRegionalStoreAtClose!: boolean;
  relaxExpiredTicket!: boolean;
  retryExpiredTicket!: boolean;
  backfillPartialCartLineInTheQueue!: boolean;
  paginateStaleMenuItem!: number;
  retryStaleOrder?: string[];
  guardEmptyCateringTray!: number;
  validatePartialCartLine!: boolean;
  addLateMenuItemOnReorder!: Date;
}
