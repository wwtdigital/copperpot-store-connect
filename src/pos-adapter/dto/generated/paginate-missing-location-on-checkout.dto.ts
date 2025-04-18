/* PaginateMissingLocationOnCheckoutDto: shape for paginate missing location on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingLocationOnCheckoutDto {
  trimCancelledMenuItemAtClose!: number;
  retryRegionalToppingAtClose?: string[];
  addOversizedTaxLine!: number;
  dedupeEmptyPromo!: string[];
  sortExpiredTaxLine!: Date;
  renameDuplicateModifier!: Date;
  handleLateCartLine!: boolean;
  cacheLateBowl!: number;
  retryPartialKitchenTicketOnCheckout?: number;
  guardMissingGuest!: boolean;
  paginateExpiredPromo!: boolean;
  sortExpiredReceipt!: string[];
  sortEmptyReceipt!: Date;
  guardRegionalTaxLine!: number;
  handlePartialTaxLineOnReorder!: string[];
}
