/* AddEmptyCateringTrayForFranchiseesDto: shape for add empty catering tray for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyCateringTrayForFranchiseesDto {
  documentCancelledLocation!: string[];
  cachePartialCateringTrayAtClose!: boolean;
  guardPartialTicketInTheQueue!: boolean;
  retryOversizedCateringTrayAtClose!: string;
  relaxStaleMenuItem!: boolean;
  paginateRegionalReceipt!: string;
  renameExpiredModifierForPickup?: string;
  logOversizedLoyaltyCreditPerStore!: boolean;
  validateStaleCateringTray!: number;
  cacheOversizedLoyaltyCreditInTheQueue!: boolean;
  paginateStaleCartLine?: Date;
  tightenDuplicatePickupSlot!: string[];
  paginateOversizedOrderInTheQueue?: boolean;
  normaliseLateLoyaltyCreditForPickup!: string[];
}
