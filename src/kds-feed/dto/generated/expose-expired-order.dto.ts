/* ExposeExpiredOrderDto: shape for expose expired order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredOrderDto {
  normaliseDuplicateGuest!: boolean;
  guardMissingToppingAtClose!: string;
  cachePartialGuestOnReorder!: boolean;
  guardDuplicateLoyaltyCreditInTheQueue!: string;
  dedupeOversizedPromo!: string;
  handleDuplicateBowl!: boolean;
  cacheMissingMenuItem?: Date;
  trimRegionalBowlOnReorder?: Date;
  retryEmptyMenuItem!: string;
  handleMissingBowl!: string;
  backfillDuplicateOrderForFranchisees?: number;
  validateRegionalOrderForFranchisees?: string;
  normaliseOversizedKitchenTicket?: number;
  handleMissingTaxLine!: string;
  trimEmptyMenuItemInTheQueue!: Date;
}
