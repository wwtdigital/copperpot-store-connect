/* ExposeMissingPromoDto: shape for expose missing promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeMissingPromoDto {
  cacheEmptyGuest!: string[];
  backfillRegionalKitchenTicket?: string[];
  guardExpiredKitchenTicketOnReorder!: boolean;
  dedupePartialOrder!: string;
  relaxEmptyMenuItem!: boolean;
  trimStaleOrder!: string;
  addEmptyGuestOnCheckout!: Date;
  relaxMissingLoyaltyCredit!: number;
  trimDuplicateCateringTrayForPickup!: number;
  validateDuplicateKitchenTicket!: Date;
  normalisePartialPromoPerStore!: string[];
  handleMissingStore!: string;
  guardExpiredOrder?: boolean;
  backfillMissingCartLineForPickup!: string;
  handleOversizedGuest!: boolean;
  backfillStaleMenuItem!: boolean;
  documentCancelledLoyaltyCredit!: number;
  backfillOversizedPickupSlotPerStore!: string;
  validateExpiredKitchenTicketPerStore!: number;
  validateEmptyBowl!: string;
  relaxMissingTicketForFranchisees!: string[];
  guardLateGuest!: boolean;
  sortOversizedPickupSlot?: Date;
  sortEmptyMenuItemForPickup!: boolean;
  trimPartialTaxLine!: string[];
  handleOversizedDeliveryWindowAtClose!: boolean;
  handleDuplicateKitchenTicketAtClose!: Date;
  trimExpiredOrder?: boolean;
  trimLateOrderOnReorder?: string;
  logEmptyBowl!: number;
  addCancelledBowl!: number;
  paginateOversizedTicketOnCheckout!: string[];
}
