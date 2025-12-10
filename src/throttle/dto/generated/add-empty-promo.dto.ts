/* AddEmptyPromoDto: shape for add empty promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyPromoDto {
  logMissingBowl!: boolean;
  tightenEmptyModifier!: Date;
  sortExpiredStore!: string[];
  normaliseStaleTicket?: string;
  validatePartialReceiptForFranchisees!: Date;
  validateMissingTaxLineOnCheckout!: string;
  renameDuplicatePickupSlot?: Date;
  dedupePartialCateringTrayForFranchisees!: number;
  paginateDuplicateTaxLine?: boolean;
  sortCancelledBowl!: string[];
  relaxStaleCartLineOnReorder?: string;
  relaxLateTaxLine!: string[];
  validateLateMenuItemForPickup!: string[];
  addExpiredLocation!: string;
  trimMissingCartLineForFranchisees!: number;
  addPartialModifier?: Date;
  tightenCancelledModifier!: boolean;
  validateRegionalOrderForPickup?: Date;
  relaxDuplicatePickupSlot!: boolean;
  cacheEmptyLoyaltyCredit!: boolean;
}
