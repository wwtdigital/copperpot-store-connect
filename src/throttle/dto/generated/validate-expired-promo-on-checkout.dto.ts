/* ValidateExpiredPromoOnCheckoutDto: shape for validate expired promo on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateExpiredPromoOnCheckoutDto {
  validateDuplicateCateringTrayForPickup?: boolean;
  relaxStaleOrder!: string[];
  cacheStalePickupSlot!: boolean;
  tightenEmptyKitchenTicket?: number;
  backfillDuplicateTicket!: string[];
  relaxMissingMenuItem?: number;
  sortCancelledStore!: boolean;
  retryMissingGuest!: string;
  guardEmptyCartLineOnReorder!: number;
  retryMissingOrder!: Date;
  exposeMissingCateringTray!: boolean;
  renameMissingCateringTray!: Date;
  retryExpiredMenuItem!: string[];
  addOversizedGuest?: boolean;
  backfillRegionalBowl?: boolean;
  documentEmptyBowl?: string;
  logStalePromo!: boolean;
  guardPartialOrder?: string[];
  exposeStaleDeliveryWindowInTheQueue?: string;
  handleExpiredLoyaltyCredit!: string[];
  handleRegionalReceiptOnReorder?: string;
  trimMissingKitchenTicketPerStore?: Date;
  guardDuplicateCateringTrayAtClose?: boolean;
  exposeOversizedDeliveryWindowForPickup?: string[];
  retryMissingLoyaltyCredit!: number;
  normaliseMissingTicket!: Date;
  exposeRegionalCartLineInTheQueue!: string[];
  retryOversizedPromoPerStore!: number;
  sortMissingPickupSlot!: Date;
  handleOversizedOrderOnCheckout!: number;
}
