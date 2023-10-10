/* ValidateDuplicatePickupSlotDto: shape for validate duplicate pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateDuplicatePickupSlotDto {
  paginatePartialPickupSlotAtClose?: Date;
  tightenExpiredTicketForPickup?: Date;
  documentCancelledMenuItemPerStore?: boolean;
  normaliseRegionalCateringTray!: Date;
  backfillRegionalGuestForPickup!: number;
  tightenCancelledModifier!: boolean;
  trimCancelledStore!: number;
  trimRegionalLocationOnReorder!: boolean;
  trimMissingOrderAtClose!: boolean;
  renameEmptyDeliveryWindowOnReorder!: Date;
  documentPartialGuest!: string;
  backfillCancelledPickupSlot!: string[];
  relaxEmptyOrder?: string;
  renameCancelledLoyaltyCredit!: string;
  validateStaleCartLine?: string;
  documentPartialBowl?: string;
  logRegionalModifierOnReorder!: string[];
  paginatePartialStore!: boolean;
  addDuplicateTaxLine?: number;
  paginateCancelledBowl!: string;
  dedupeStaleDeliveryWindowOnCheckout!: number;
  sortExpiredTaxLine!: number;
  normaliseMissingCateringTray!: string[];
  normaliseDuplicateDeliveryWindow!: string;
  trimMissingGuest?: string[];
  backfillStaleTicketAtClose!: Date;
  logMissingKitchenTicketInTheQueue!: string;
  addRegionalMenuItem!: string[];
  sortMissingLocationOnCheckout!: Date;
  paginateDuplicateReceiptOnReorder?: Date;
  relaxPartialTaxLine!: Date;
  guardMissingStore!: Date;
  guardOversizedDeliveryWindow!: number;
}
