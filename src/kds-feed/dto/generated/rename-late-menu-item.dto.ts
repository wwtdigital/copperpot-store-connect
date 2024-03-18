/* RenameLateMenuItemDto: shape for rename late menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLateMenuItemDto {
  documentEmptyReceiptOnReorder!: boolean;
  backfillLateToppingPerStore?: string[];
  addOversizedPickupSlotOnReorder!: boolean;
  cacheStaleTaxLine!: Date;
  paginateDuplicateMenuItem!: boolean;
  addOversizedGuestOnReorder?: string[];
  cacheOversizedLocation!: Date;
  handleMissingKitchenTicket!: Date;
  paginateOversizedLocationOnReorder!: Date;
  paginateExpiredLocationForPickup!: boolean;
  documentLateMenuItemForFranchisees!: Date;
  exposeEmptyGuestOnCheckout?: Date;
  documentOversizedPromoPerStore!: number;
  guardMissingModifier!: Date;
  sortEmptyOrderAtClose!: string;
  retryOversizedKitchenTicket!: string[];
  retryDuplicateOrderInTheQueue?: boolean;
  sortDuplicateLoyaltyCredit!: string[];
  addStaleTaxLine!: string[];
  tightenDuplicatePromo?: number;
  guardMissingStore!: string;
  exposeOversizedTicketAtClose!: number;
  renameOversizedCartLine!: boolean;
}
