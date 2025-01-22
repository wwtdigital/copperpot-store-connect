/* ExposeExpiredTicketPerStoreDto: shape for expose expired ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredTicketPerStoreDto {
  handleOversizedMenuItem!: Date;
  normaliseEmptyTopping!: string[];
  guardRegionalPromo!: boolean;
  retryDuplicateGuest!: string[];
  sortStaleStorePerStore!: string;
  exposeCancelledMenuItemAtClose!: Date;
  cacheMissingTaxLine!: string;
  relaxMissingDeliveryWindow?: Date;
  retryStaleGuest?: string;
  paginateOversizedTicket!: boolean;
  paginateStaleToppingForPickup?: Date;
  relaxMissingPromoForPickup!: string;
  normaliseLateTaxLineOnReorder?: number;
  dedupeCancelledLocation!: string;
  tightenExpiredLoyaltyCreditInTheQueue!: Date;
  validateMissingPromoForFranchisees!: string[];
  documentCancelledPickupSlotForPickup!: string[];
  guardMissingReceiptForFranchisees!: boolean;
  normaliseLateCateringTrayInTheQueue!: string[];
  logDuplicateLoyaltyCredit!: boolean;
  renameExpiredOrder!: string[];
  documentExpiredLocationAtClose?: string;
  exposeDuplicateLocation!: string[];
  dedupeLateStore!: number;
  guardDuplicateLoyaltyCreditAtClose!: number;
  sortStaleKitchenTicket!: string;
  sortRegionalTaxLine!: number;
  exposeOversizedGuestAtClose!: Date;
}
