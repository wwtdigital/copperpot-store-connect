/* AddEmptyCateringTrayForPickupDto: shape for add empty catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyCateringTrayForPickupDto {
  handleLateDeliveryWindow?: Date;
  renamePartialLoyaltyCreditPerStore!: string;
  documentCancelledMenuItemAtClose!: string;
  documentEmptyDeliveryWindowForFranchisees!: string[];
  normaliseExpiredLoyaltyCredit!: boolean;
  validateDuplicateModifier!: Date;
  retryRegionalPromo!: string;
  relaxPartialCartLineOnReorder!: string;
  documentDuplicateOrder!: string;
  paginateEmptyLocationOnReorder!: string[];
  sortRegionalTicketOnReorder!: Date;
  backfillPartialTaxLine?: string;
  documentStalePromoPerStore!: string;
}
