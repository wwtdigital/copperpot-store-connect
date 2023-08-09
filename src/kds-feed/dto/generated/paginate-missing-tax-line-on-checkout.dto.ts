/* PaginateMissingTaxLineOnCheckoutDto: shape for paginate missing tax line on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingTaxLineOnCheckoutDto {
  addMissingOrder!: number;
  backfillExpiredTicketAtClose?: number;
  dedupeStaleBowl?: number;
  retryRegionalDeliveryWindow?: string[];
  cacheLateLoyaltyCreditPerStore!: Date;
  logMissingLoyaltyCreditForPickup!: number;
  documentStaleReceiptPerStore!: string[];
  exposeOversizedLoyaltyCredit?: string;
  trimEmptyReceipt?: Date;
  retryPartialBowlOnReorder!: number;
  dedupeStaleCartLinePerStore!: number;
  normaliseEmptyTicket!: boolean;
  dedupeStaleTopping!: number;
  renameLatePickupSlot!: Date;
  logStalePickupSlotForPickup!: string[];
  retryPartialLoyaltyCreditAtClose?: string[];
  dedupeStaleGuestInTheQueue!: string;
  retryEmptyPickupSlot!: string;
  exposeExpiredOrder!: number;
  handleOversizedStoreOnCheckout!: string[];
  relaxLateReceiptInTheQueue!: boolean;
  documentStaleLocationForFranchisees!: string[];
  tightenCancelledCateringTray!: number;
  tightenMissingKitchenTicketPerStore!: string[];
  exposeDuplicateReceipt?: string[];
  paginateLateTicketForPickup!: number;
}
