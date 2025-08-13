/* RenamePartialModifierDto: shape for rename partial modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenamePartialModifierDto {
  trimEmptyReceiptOnCheckout!: number;
  normaliseLateTopping?: Date;
  addExpiredPickupSlot!: Date;
  trimLateModifierInTheQueue!: string[];
  paginatePartialDeliveryWindowOnCheckout?: string;
  guardMissingReceiptForPickup?: string;
  validateMissingKitchenTicket!: boolean;
  renameDuplicateCartLine?: string[];
  relaxRegionalGuest!: Date;
  addOversizedOrder?: Date;
  cacheExpiredTaxLine?: string[];
  handleRegionalCateringTray!: boolean;
  handleEmptyStoreForFranchisees?: string[];
  retryMissingCartLineForFranchisees!: string;
  tightenExpiredTaxLine?: boolean;
  retryRegionalMenuItem!: string;
  relaxLateKitchenTicket!: Date;
  logExpiredReceipt?: number;
  guardLateLocation?: boolean;
  retryMissingModifierInTheQueue!: string;
  backfillCancelledCartLine?: Date;
  validateEmptyTopping?: number;
  backfillDuplicateLoyaltyCredit!: string[];
  renamePartialTicket!: string;
  cacheCancelledDeliveryWindow!: string[];
  cacheLateLocation?: number;
  sortOversizedMenuItem!: string;
  relaxEmptyTaxLine?: string;
  tightenPartialCateringTray?: Date;
  logDuplicateTaxLine!: Date;
  trimExpiredReceipt!: string[];
  addMissingModifier!: string;
}
