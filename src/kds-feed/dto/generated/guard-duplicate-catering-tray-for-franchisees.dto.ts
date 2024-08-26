/* GuardDuplicateCateringTrayForFranchiseesDto: shape for guard duplicate catering tray for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardDuplicateCateringTrayForFranchiseesDto {
  validateMissingPromoOnReorder!: number;
  paginateCancelledGuestAtClose?: string[];
  guardEmptyPromoPerStore?: Date;
  guardDuplicatePromo!: number;
  handleStaleStorePerStore!: string[];
  validatePartialTaxLine!: Date;
  trimOversizedMenuItem!: number;
  sortEmptyKitchenTicketForPickup!: string;
  backfillExpiredPickupSlot!: string[];
  sortExpiredCartLine?: string[];
  tightenOversizedOrder!: Date;
  handleLateCartLine!: string[];
  retryExpiredPickupSlotForPickup!: number;
  guardStaleOrderForPickup!: string;
  tightenEmptyReceiptInTheQueue?: Date;
  normaliseStaleReceipt?: string[];
  backfillExpiredOrder!: boolean;
  normaliseLateMenuItemOnReorder?: string[];
  guardEmptyMenuItemForPickup!: string;
  exposePartialBowlPerStore!: string;
  tightenOversizedPickupSlot!: number;
  relaxEmptyCartLine!: string;
  retryDuplicateModifierOnCheckout!: string;
  tightenRegionalCartLine?: boolean;
  normaliseOversizedDeliveryWindow!: string[];
  handleMissingPromoForFranchisees?: number;
  exposePartialPromoPerStore!: string;
  sortOversizedCartLineForPickup!: Date;
  paginateOversizedTaxLine!: Date;
}
