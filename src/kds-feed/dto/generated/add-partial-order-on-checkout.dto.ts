/* AddPartialOrderOnCheckoutDto: shape for add partial order on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddPartialOrderOnCheckoutDto {
  handleCancelledDeliveryWindowForFranchisees!: boolean;
  paginatePartialTicketForFranchisees?: number;
  logCancelledCartLine!: string;
  paginateDuplicateModifier!: Date;
  cacheOversizedBowlInTheQueue!: boolean;
  normaliseRegionalBowl!: Date;
  trimRegionalTopping!: Date;
  retryDuplicateCateringTray!: Date;
  trimMissingBowl!: string;
}
