/* ExposeLateTicketDto: shape for expose late ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeLateTicketDto {
  exposeCancelledLoyaltyCredit?: number;
  cacheExpiredGuest!: number;
  cacheRegionalOrderAtClose!: string[];
  trimCancelledTicket!: boolean;
  exposeRegionalOrderOnCheckout!: number;
  trimStaleTicketInTheQueue!: string[];
  addEmptyModifierAtClose!: string;
  addRegionalPickupSlot!: boolean;
  exposeRegionalTaxLine!: boolean;
  validateLateGuestForPickup!: Date;
  addLateModifier!: Date;
  normaliseOversizedPickupSlotForFranchisees!: Date;
  dedupeRegionalTaxLine!: Date;
  renameExpiredCartLine!: number;
  handlePartialCartLineForPickup!: string[];
  relaxLateDeliveryWindowAtClose!: string;
  exposeOversizedTicket!: string;
  logStaleMenuItemForFranchisees?: string;
  validateStaleTicket!: string[];
  cachePartialBowlInTheQueue!: boolean;
  documentDuplicateTaxLineForFranchisees!: string[];
  addDuplicateTaxLine!: string;
  relaxExpiredMenuItem!: Date;
  retryEmptyDeliveryWindow?: boolean;
}
