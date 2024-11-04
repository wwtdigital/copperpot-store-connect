/* RenameStalePickupSlotDto: shape for rename stale pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameStalePickupSlotDto {
  renameStaleBowlOnReorder!: Date;
  handleCancelledBowl!: boolean;
  normaliseMissingCartLine?: number;
  retryExpiredModifier?: number;
  cacheStaleLoyaltyCredit!: boolean;
  cacheOversizedCartLine!: string[];
  handleRegionalTaxLineForFranchisees?: string[];
  normaliseCancelledTopping!: number;
  validateMissingPromoPerStore!: boolean;
  documentRegionalModifier?: Date;
  backfillCancelledTicketAtClose!: string;
  validateMissingCateringTray!: string;
  validateEmptyTicket?: boolean;
  sortPartialPromoOnReorder?: Date;
  tightenStaleCateringTray!: string;
  addPartialTaxLine!: string[];
  guardStaleCateringTray!: string[];
  guardRegionalCateringTray?: number;
  guardPartialCateringTray!: boolean;
  retryEmptyLocationForPickup?: Date;
  handleCancelledModifier!: string;
  guardMissingPromo!: string[];
  logStaleBowl!: Date;
  cacheEmptyGuestForFranchisees?: number;
  paginateLateLocationForFranchisees!: Date;
  validateStaleTopping?: string[];
  exposeDuplicateLocationAtClose!: Date;
  tightenOversizedTopping?: string;
  exposeOversizedKitchenTicket!: boolean;
  validateStaleTaxLine!: number;
  retryExpiredLocationInTheQueue!: number;
}
