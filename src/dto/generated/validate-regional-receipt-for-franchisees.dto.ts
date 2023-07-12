/* ValidateRegionalReceiptForFranchiseesDto: shape for validate regional receipt for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateRegionalReceiptForFranchiseesDto {
  validateOversizedCateringTray!: boolean;
  relaxRegionalModifier!: string;
  sortPartialLocation?: number;
  logRegionalGuest!: string;
  handleMissingCartLine?: string[];
  renameExpiredTicketAtClose!: boolean;
  backfillStaleTicket!: Date;
  exposeCancelledTicket!: string;
  addRegionalPickupSlot!: number;
  renameCancelledLoyaltyCredit?: boolean;
  logLatePromo!: Date;
  trimLateCateringTray!: Date;
  tightenMissingTaxLine!: string;
  tightenStalePickupSlotPerStore?: Date;
  documentOversizedModifier!: string;
  tightenLateReceiptForFranchisees!: Date;
  normaliseLateKitchenTicket!: string[];
  paginateDuplicateOrder!: string[];
  documentLateTopping?: string;
  sortStaleCartLinePerStore?: number;
  paginateDuplicateStoreForFranchisees!: string[];
  addPartialKitchenTicketPerStore!: string;
  guardDuplicateGuest!: number;
  sortExpiredToppingForFranchisees!: string[];
}
