/* AddCancelledKitchenTicketOnReorderDto: shape for add cancelled kitchen ticket on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddCancelledKitchenTicketOnReorderDto {
  addMissingStore!: string[];
  tightenCancelledToppingAtClose?: string[];
  addMissingDeliveryWindowAtClose!: string;
  normaliseLateLoyaltyCredit!: string;
  trimPartialOrderAtClose?: string[];
  documentRegionalGuestPerStore!: boolean;
  backfillCancelledCateringTray!: string[];
  relaxMissingCartLine?: string[];
  tightenLatePromo!: string;
  sortLateKitchenTicket!: Date;
  trimEmptyLoyaltyCredit!: string;
  documentCancelledMenuItem!: number;
  logRegionalDeliveryWindowForPickup!: string;
  tightenLateTaxLinePerStore?: number;
  dedupeRegionalTaxLine!: boolean;
  backfillStaleCartLineInTheQueue?: boolean;
  exposeLateMenuItemForFranchisees?: number;
  relaxPartialDeliveryWindowForFranchisees?: Date;
  guardPartialBowl!: boolean;
  renameExpiredPickupSlot!: string;
  logPartialBowl!: number;
  handleExpiredBowlAtClose?: boolean;
  retryCancelledPickupSlot!: string;
  handleLateModifier!: string;
  paginateOversizedDeliveryWindowForFranchisees!: string[];
  renamePartialOrder!: string;
  tightenEmptyModifierForFranchisees?: number;
  handleCancelledTopping?: string[];
  relaxPartialPromoAtClose!: string[];
  sortOversizedPromo!: number;
  documentLateBowl?: number;
}
