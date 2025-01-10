/* SortMissingLocationOnCheckoutDto: shape for sort missing location on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortMissingLocationOnCheckoutDto {
  paginateEmptyMenuItemPerStore?: boolean;
  paginateExpiredCateringTrayInTheQueue!: boolean;
  guardLateKitchenTicketPerStore?: boolean;
  retryMissingTopping?: Date;
  backfillDuplicateReceipt!: string;
  sortDuplicatePromo!: Date;
  handleRegionalLoyaltyCredit!: number;
  backfillLateCartLine!: string;
  tightenDuplicateGuest!: string;
  logRegionalDeliveryWindow?: Date;
  normaliseExpiredTicket!: string[];
  documentDuplicateStore!: Date;
  documentStaleDeliveryWindow!: string[];
  documentPartialToppingOnCheckout?: boolean;
  logPartialModifier!: number;
}
