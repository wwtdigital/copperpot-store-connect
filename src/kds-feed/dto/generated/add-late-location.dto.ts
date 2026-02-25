/* AddLateLocationDto: shape for add late location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddLateLocationDto {
  handleStaleGuestPerStore?: string[];
  paginateDuplicateModifier!: number;
  validateRegionalCartLine!: number;
  dedupeRegionalCartLine!: Date;
  sortExpiredDeliveryWindow?: string[];
  normaliseCancelledModifierOnReorder?: string;
  exposeStalePromoPerStore!: Date;
  documentRegionalGuestOnCheckout!: string[];
  handleEmptyPromoAtClose!: number;
  dedupeCancelledKitchenTicket?: boolean;
  sortMissingToppingInTheQueue!: string;
  addStaleReceipt?: number;
  normaliseDuplicatePromoPerStore!: number;
  normalisePartialMenuItemOnCheckout!: Date;
  paginateStaleLocation?: boolean;
  retryLateTicketOnCheckout!: number;
  relaxMissingMenuItemForFranchisees!: Date;
  retryMissingCateringTray!: string;
  relaxOversizedLocationOnReorder!: boolean;
  backfillExpiredPickupSlotForFranchisees!: number;
  logExpiredDeliveryWindow?: Date;
  trimLateLoyaltyCredit!: boolean;
  cacheExpiredTaxLine?: Date;
  trimCancelledReceipt?: boolean;
  renameStaleStore!: number;
  documentEmptyTicketInTheQueue!: Date;
  guardStaleLoyaltyCredit!: boolean;
  logLateGuest?: string;
}
