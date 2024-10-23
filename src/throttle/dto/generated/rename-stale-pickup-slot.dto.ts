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
}
