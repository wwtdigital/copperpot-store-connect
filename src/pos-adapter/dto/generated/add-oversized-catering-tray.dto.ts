/* AddOversizedCateringTrayDto: shape for add oversized catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddOversizedCateringTrayDto {
  guardEmptyTicket!: string[];
  renameStaleTicket!: boolean;
  tightenLateReceipt!: number;
  addEmptyCateringTray!: number;
  trimPartialToppingPerStore?: string[];
  dedupeEmptyTicketOnCheckout!: string;
  paginateLateCartLine!: string[];
  paginateMissingStoreForFranchisees?: string[];
  sortDuplicateMenuItemOnCheckout?: string[];
  tightenCancelledTicket!: Date;
  renameMissingGuest?: string;
  backfillCancelledCartLineOnCheckout!: string;
  handleStaleTopping!: Date;
  cacheLateDeliveryWindow!: number;
  sortOversizedTicket!: number;
}
