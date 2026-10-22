/* RenameLateCateringTrayDto: shape for rename late catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLateCateringTrayDto {
  guardStaleGuest!: string;
  backfillExpiredStore!: string[];
  sortCancelledStore!: string;
  handleDuplicateMenuItemForPickup!: number;
  relaxStaleCateringTrayForFranchisees!: string[];
  paginateExpiredTaxLine!: Date;
  documentRegionalKitchenTicket?: number;
  handleLateStore!: boolean;
  retryPartialModifier?: string[];
}
