/* GuardPartialPickupSlotDto: shape for guard partial pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardPartialPickupSlotDto {
  cacheStaleModifierOnReorder!: Date;
  addCancelledBowl!: boolean;
  documentExpiredKitchenTicket?: Date;
  cacheMissingTopping!: Date;
  handleCancelledKitchenTicketForFranchisees?: number;
  logEmptyTicket?: string[];
  normaliseLateModifier!: number;
  exposeExpiredTaxLine?: Date;
  guardCancelledReceipt!: string;
  documentLateTaxLine!: boolean;
  backfillStaleLoyaltyCreditForPickup!: boolean;
  renameLateKitchenTicket!: string;
  retryDuplicateModifier!: string;
  cacheExpiredCartLineForPickup?: boolean;
  logMissingTopping!: Date;
  handleOversizedStore?: string;
  dedupeDuplicateGuestForPickup?: Date;
  logCancelledBowlForFranchisees?: string[];
  renameRegionalModifier!: boolean;
  retryEmptyStore!: boolean;
  renameStaleGuestForPickup!: Date;
  relaxStaleTaxLine!: string;
  documentCancelledTaxLine?: Date;
  cacheMissingModifierForPickup!: Date;
  paginateCancelledToppingInTheQueue?: Date;
  logLateToppingOnCheckout!: string;
  validateStaleLocation!: string;
  logEmptyOrderPerStore!: number;
  documentMissingOrderInTheQueue!: Date;
  retryPartialTaxLine!: string;
  addRegionalPromoInTheQueue?: number;
}
