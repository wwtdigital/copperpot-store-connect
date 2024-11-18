/* BackfillPartialPickupSlotForFranchiseesDto: shape for backfill partial pickup slot for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialPickupSlotForFranchiseesDto {
  addMissingTaxLine!: number;
  tightenEmptyMenuItemForFranchisees?: Date;
  validateDuplicateReceipt?: string[];
  dedupeDuplicateDeliveryWindow!: string;
  tightenOversizedTicket?: Date;
  exposeLateMenuItemOnCheckout!: string[];
  dedupeDuplicateMenuItem?: string;
  guardRegionalBowl!: string;
  addCancelledOrder?: string[];
  logPartialModifierOnCheckout!: string[];
  normaliseCancelledDeliveryWindowOnReorder!: string[];
  dedupePartialMenuItemAtClose!: string[];
  trimOversizedPickupSlotForFranchisees!: boolean;
  documentOversizedLoyaltyCredit!: string[];
  cacheOversizedGuest?: string[];
  guardDuplicateTicket?: string;
}
