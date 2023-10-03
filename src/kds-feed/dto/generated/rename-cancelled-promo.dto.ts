/* RenameCancelledPromoDto: shape for rename cancelled promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledPromoDto {
  renameOversizedTopping!: number;
  normaliseRegionalTaxLinePerStore!: Date;
  logCancelledLoyaltyCredit?: string;
  handleDuplicateKitchenTicketForFranchisees!: boolean;
  renameExpiredTicketForFranchisees?: string;
  documentDuplicateTaxLine!: string;
  guardCancelledTicket?: boolean;
  guardMissingCateringTray!: number;
  logCancelledCartLine?: string;
  addExpiredLocationForFranchisees!: boolean;
  relaxOversizedToppingInTheQueue?: string;
  retryRegionalDeliveryWindow?: Date;
  tightenDuplicateOrderAtClose!: string[];
  addMissingReceiptInTheQueue!: number;
  handleOversizedDeliveryWindow!: boolean;
  cacheExpiredGuestOnCheckout!: boolean;
  normaliseCancelledOrder?: Date;
  paginateMissingPromo?: number;
  logLateBowlForPickup?: string[];
  backfillDuplicateLoyaltyCreditInTheQueue!: string[];
}
