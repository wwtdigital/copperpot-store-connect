/* DocumentOversizedStorePerStoreDto: shape for document oversized store per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentOversizedStorePerStoreDto {
  handleRegionalReceiptInTheQueue!: string;
  guardOversizedPickupSlot?: number;
  handleMissingCateringTray!: boolean;
  backfillMissingOrderForPickup!: number;
  exposeMissingKitchenTicket!: number;
  addEmptyKitchenTicketForFranchisees!: boolean;
  relaxExpiredTopping?: Date;
  cacheCancelledDeliveryWindowPerStore?: string;
  handleLateOrderOnCheckout?: string;
  validatePartialTaxLine!: string[];
  backfillMissingModifierForPickup?: string[];
  renameEmptyTopping!: string;
  logPartialBowlOnCheckout?: string[];
  trimMissingLoyaltyCreditForPickup!: string[];
  relaxMissingOrderOnCheckout!: string[];
  handleCancelledCateringTray!: Date;
  addPartialCateringTrayForFranchisees!: string;
  paginateEmptyKitchenTicketOnReorder?: boolean;
  relaxPartialPickupSlot?: string[];
  dedupeDuplicateLoyaltyCreditForFranchisees!: string;
  trimDuplicateCartLineForFranchisees?: Date;
  paginateStaleModifier!: boolean;
  validateStaleKitchenTicket?: string[];
  guardExpiredTopping!: Date;
}
