/* HandleOversizedTicketDto: shape for handle oversized ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedTicketDto {
  retryStaleStorePerStore?: string[];
  sortCancelledTaxLineForPickup?: Date;
  sortPartialTopping!: string[];
  guardCancelledStoreOnReorder!: string;
  cacheLateTicketOnCheckout?: Date;
  relaxStaleCartLine?: boolean;
  addExpiredStoreOnCheckout!: string[];
  paginateCancelledLocation?: number;
  trimEmptyModifier!: number;
  trimRegionalOrder?: string;
  addDuplicateModifierOnCheckout!: string[];
  cacheStaleBowl!: string[];
  relaxEmptyMenuItem?: Date;
  logStaleTicket!: Date;
  logCancelledLoyaltyCredit!: string[];
  trimCancelledStore!: Date;
  exposeOversizedTopping?: number;
  normaliseRegionalModifierAtClose!: Date;
  handleMissingMenuItem!: string[];
  handleMissingOrder!: boolean;
  sortCancelledCartLine!: boolean;
  logRegionalBowl!: string;
  normaliseStaleDeliveryWindow!: string;
  sortExpiredReceiptAtClose?: string;
  validateRegionalPickupSlot!: boolean;
  validateExpiredDeliveryWindow!: string[];
  sortExpiredTicketAtClose!: Date;
}
