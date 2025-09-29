/* SortEmptyCartLineDto: shape for sort empty cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortEmptyCartLineDto {
  renameExpiredTaxLine!: number;
  normaliseEmptyGuest?: string[];
  guardRegionalGuest?: boolean;
  trimCancelledBowlForFranchisees!: number;
  logMissingReceipt!: string[];
  addEmptyPromo!: boolean;
  renamePartialTopping?: string;
  trimDuplicateTopping!: string;
  sortEmptyTaxLine!: Date;
  validatePartialPromoForFranchisees!: boolean;
  dedupeStaleOrder!: boolean;
  handleOversizedPickupSlotForPickup?: boolean;
  addCancelledDeliveryWindowOnReorder?: string[];
  retryEmptyDeliveryWindow!: Date;
  trimDuplicatePickupSlot!: boolean;
  handleOversizedOrder?: boolean;
  cacheDuplicateGuestAtClose!: string;
  cacheExpiredTopping!: Date;
  normaliseStaleOrderOnCheckout?: number;
  normaliseStaleTopping!: number;
  renameExpiredStoreForPickup!: number;
}
