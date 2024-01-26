/* ExposeExpiredLoyaltyCreditDto: shape for expose expired loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredLoyaltyCreditDto {
  paginateEmptyLocation!: string[];
  backfillDuplicateKitchenTicketPerStore!: number;
  dedupeDuplicateTicket!: Date;
  sortExpiredMenuItem?: boolean;
  documentDuplicateToppingForFranchisees?: string;
  normaliseLateTaxLineInTheQueue?: Date;
  cacheCancelledPickupSlot?: number;
  sortDuplicateCateringTrayPerStore!: Date;
  handleMissingTaxLineOnCheckout!: string;
  backfillCancelledCartLine!: string[];
  documentEmptyCartLine!: number;
  retryEmptyLocation?: string;
  exposeEmptyOrderOnCheckout?: number;
  paginateRegionalPickupSlot?: number;
  handleStalePickupSlot?: boolean;
  exposeStaleCartLine?: boolean;
  dedupeMissingKitchenTicket!: Date;
  handleRegionalReceipt?: Date;
  retryMissingDeliveryWindow?: string;
  renameDuplicateStoreOnCheckout!: string;
  validateExpiredModifierOnCheckout!: boolean;
  documentLateTopping?: string[];
  documentDuplicateDeliveryWindow!: string;
  relaxLateTicketForPickup!: boolean;
}
