/* SortRegionalMenuItemDto: shape for sort regional menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortRegionalMenuItemDto {
  addExpiredMenuItem!: string;
  relaxRegionalLocation?: string[];
  trimCancelledGuest!: string;
  relaxCancelledLoyaltyCredit!: number;
  handleLateTopping!: string[];
  relaxRegionalOrder!: number;
  trimRegionalBowlInTheQueue?: string[];
  guardOversizedTaxLine?: Date;
  guardOversizedLoyaltyCredit?: boolean;
  normaliseRegionalCateringTrayPerStore?: boolean;
  addPartialModifierOnReorder!: number;
  paginateDuplicateMenuItemOnReorder!: number;
  handleDuplicateGuest!: boolean;
  tightenDuplicatePromoForFranchisees!: Date;
}
