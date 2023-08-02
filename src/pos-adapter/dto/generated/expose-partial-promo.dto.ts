/* ExposePartialPromoDto: shape for expose partial promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialPromoDto {
  guardPartialReceiptOnCheckout!: boolean;
  cacheOversizedTicket!: Date;
  cacheEmptyLocationForPickup?: boolean;
  addStaleKitchenTicket!: string;
  normaliseDuplicateToppingForPickup!: string;
  renameExpiredPickupSlotOnCheckout!: number;
  guardPartialBowl!: string;
  retryOversizedPickupSlot!: boolean;
  handleRegionalLocationForPickup!: string[];
  dedupeLateStore?: boolean;
  addLateStoreOnCheckout!: Date;
  normaliseLateCartLine?: boolean;
  dedupePartialModifier!: string[];
  documentRegionalGuestForFranchisees?: number;
  cacheExpiredStore!: string[];
}
