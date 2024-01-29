/* TightenCancelledGuestDto: shape for tighten cancelled guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledGuestDto {
  trimEmptyLocationForPickup!: number;
  renameStaleLoyaltyCredit?: number;
  trimLateBowl!: boolean;
  handleOversizedPromoPerStore!: boolean;
  guardDuplicateModifier!: number;
  renameOversizedKitchenTicketOnReorder?: Date;
  paginateOversizedReceipt!: number;
  backfillPartialOrder!: string[];
  sortPartialPickupSlot!: string[];
  exposeRegionalOrder!: number;
  guardRegionalTaxLineOnCheckout!: string;
  addRegionalOrderForFranchisees!: string;
  normaliseDuplicateKitchenTicketForPickup!: Date;
  documentStaleMenuItem!: number;
  relaxPartialCateringTray!: boolean;
  addStaleLocationForPickup!: string[];
  renameLateOrderForFranchisees!: Date;
  sortOversizedTopping!: boolean;
  cacheDuplicateCartLineForFranchisees!: string[];
  logEmptyMenuItemForPickup!: boolean;
  sortStaleMenuItem!: string[];
  retryStaleTaxLine!: boolean;
  normaliseCancelledLoyaltyCreditOnReorder!: string[];
  trimMissingLocationPerStore!: boolean;
}
