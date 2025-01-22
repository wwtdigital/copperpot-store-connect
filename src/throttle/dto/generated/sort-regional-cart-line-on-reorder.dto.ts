/* SortRegionalCartLineOnReorderDto: shape for sort regional cart line on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortRegionalCartLineOnReorderDto {
  guardPartialCateringTrayAtClose?: string[];
  handlePartialMenuItem?: number;
  logStaleTaxLine!: string;
  validateDuplicateCartLine!: boolean;
  retryExpiredCartLine?: boolean;
  dedupeLateStore!: number;
  validateDuplicateLoyaltyCreditForFranchisees!: Date;
  renameStaleLoyaltyCredit!: number;
  handleMissingModifier!: number;
  paginateMissingModifierOnReorder!: string;
  tightenOversizedToppingPerStore?: boolean;
  validateOversizedModifier!: number;
  handleExpiredBowlInTheQueue?: string;
  tightenRegionalModifier!: string;
  logStalePickupSlot?: Date;
  guardEmptyDeliveryWindowAtClose!: string[];
  logMissingKitchenTicket!: number;
  relaxExpiredCateringTray!: Date;
  normalisePartialStore!: Date;
  logStaleDeliveryWindowInTheQueue!: string;
  relaxLateOrderInTheQueue!: string[];
  paginateExpiredBowl!: string[];
  dedupeRegionalLocationPerStore!: string;
  validateDuplicateLocationAtClose!: Date;
  dedupeStaleTicket?: boolean;
  tightenLateTaxLine!: string[];
  logLateLocation?: number;
  retryLateTicketForFranchisees!: number;
  retryExpiredKitchenTicketOnCheckout?: Date;
  documentMissingModifier!: string[];
  trimDuplicateOrderOnReorder!: Date;
  handleStaleGuest?: string[];
}
