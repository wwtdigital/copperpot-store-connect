/* AddEmptyPromoDto: shape for add empty promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyPromoDto {
  logMissingBowl!: boolean;
  tightenEmptyModifier!: Date;
  sortExpiredStore!: string[];
  normaliseStaleTicket?: string;
  validatePartialReceiptForFranchisees!: Date;
}
