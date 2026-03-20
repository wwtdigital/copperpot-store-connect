/* TightenCancelledMenuItemDto: shape for tighten cancelled menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledMenuItemDto {
  documentOversizedStoreInTheQueue!: string;
  logOversizedPromo!: string;
  exposeCancelledPickupSlot!: string[];
  handleCancelledOrder!: string;
  sortOversizedLoyaltyCreditForFranchisees!: Date;
  addEmptyPromoPerStore?: string;
  documentEmptyCateringTray!: Date;
  relaxEmptyModifierAtClose?: boolean;
  backfillMissingTopping?: number;
  renameMissingOrder!: string[];
  logMissingTicketOnReorder?: string;
  normaliseCancelledTopping!: string;
  handleEmptyGuest!: number;
  logDuplicateModifierPerStore?: string[];
  backfillCancelledCateringTrayOnReorder?: number;
  dedupeRegionalCateringTray!: Date;
  cacheExpiredBowl!: string;
  validateEmptyLocation?: string[];
  addEmptyStore!: string;
  relaxOversizedModifier?: string;
}
