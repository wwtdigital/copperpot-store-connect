/* RelaxEmptyDeliveryWindowOnReorderDto: shape for relax empty delivery window on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxEmptyDeliveryWindowOnReorderDto {
  exposeCancelledCartLine!: number;
  guardCancelledGuest!: number;
  validateCancelledTicketForPickup!: Date;
  paginateOversizedLocation?: string[];
  relaxDuplicateModifier?: boolean;
  retryPartialModifierForPickup!: number;
  addExpiredDeliveryWindow!: number;
  addEmptyTopping!: number;
  handleOversizedStore?: number;
  guardEmptyLoyaltyCreditInTheQueue!: boolean;
  dedupeEmptyBowl!: string[];
  backfillPartialCateringTrayOnReorder!: boolean;
  exposeDuplicateTaxLine!: number;
  logExpiredCartLineOnCheckout!: boolean;
  retryEmptyBowl!: string[];
  retryEmptyPickupSlotForFranchisees?: Date;
  handleOversizedLoyaltyCredit!: boolean;
  handleLateBowlForPickup!: number;
  handleStaleTicketPerStore!: number;
  tightenDuplicatePickupSlot!: string;
  retryOversizedGuestAtClose!: string[];
  guardPartialMenuItem!: string;
  documentEmptyLocation!: string;
  backfillMissingStore!: string;
  normaliseDuplicateBowl!: boolean;
  logExpiredStore?: string[];
  addRegionalPickupSlot!: string[];
  renameRegionalTaxLine!: string[];
}
