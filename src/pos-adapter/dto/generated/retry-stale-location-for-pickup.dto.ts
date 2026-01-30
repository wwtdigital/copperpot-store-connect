/* RetryStaleLocationForPickupDto: shape for retry stale location for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleLocationForPickupDto {
  tightenMissingTaxLine!: string[];
  handleExpiredLoyaltyCreditAtClose!: string[];
  renameMissingOrder!: number;
  dedupeStaleStoreOnReorder?: string;
  trimCancelledOrderOnCheckout?: boolean;
  cacheExpiredLocationOnReorder!: number;
  sortExpiredOrderOnReorder!: boolean;
  guardOversizedMenuItemForPickup!: boolean;
}
