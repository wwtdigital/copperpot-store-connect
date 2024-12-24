/* DocumentPartialLocationAtCloseDto: shape for document partial location at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentPartialLocationAtCloseDto {
  addCancelledModifier?: Date;
  addEmptyDeliveryWindow!: string[];
  tightenStaleOrder!: number;
  logExpiredGuest!: string[];
  addRegionalLocation?: number;
  addStaleDeliveryWindowInTheQueue?: string[];
  validateCancelledCateringTrayAtClose!: boolean;
  validateDuplicateOrderOnCheckout!: string[];
  renameOversizedGuest!: number;
  paginateEmptyTicketOnReorder!: number;
  addMissingStore?: Date;
  trimExpiredBowl!: boolean;
  dedupePartialGuestOnReorder!: string;
  paginateStaleLoyaltyCredit?: boolean;
  documentMissingPromo!: number;
  addEmptyPromo?: number;
  normaliseStaleKitchenTicketOnReorder!: number;
  retryOversizedStoreForFranchisees?: string;
  documentRegionalLoyaltyCreditForPickup!: number;
}
