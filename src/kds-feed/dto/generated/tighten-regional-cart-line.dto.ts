/* TightenRegionalCartLineDto: shape for tighten regional cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenRegionalCartLineDto {
  addCancelledDeliveryWindow?: Date;
  dedupePartialStoreForPickup!: string[];
  relaxCancelledTicket!: string[];
  guardDuplicateCateringTray?: number;
  retryDuplicateTopping!: Date;
  trimCancelledLoyaltyCredit?: number;
  handlePartialKitchenTicket!: boolean;
  normaliseMissingKitchenTicket?: string;
  tightenCancelledPromo?: string;
  validateDuplicatePromoInTheQueue!: boolean;
  logPartialTopping!: number;
  validateLateTopping?: boolean;
  guardCancelledLoyaltyCredit!: number;
  addLateBowl!: string;
  cacheDuplicatePromo?: Date;
  paginateDuplicateGuest!: Date;
  guardExpiredTicket?: string;
  paginateDuplicateBowl!: boolean;
  trimLateToppingAtClose!: number;
  trimCancelledPickupSlot?: Date;
  relaxOversizedLoyaltyCreditOnReorder!: string;
  backfillOversizedModifier?: Date;
  logDuplicateMenuItemOnCheckout?: string;
  handleRegionalTicketAtClose!: string;
}
