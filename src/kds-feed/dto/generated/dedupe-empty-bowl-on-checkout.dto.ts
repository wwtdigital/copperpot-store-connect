/* DedupeEmptyBowlOnCheckoutDto: shape for dedupe empty bowl on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeEmptyBowlOnCheckoutDto {
  addStaleMenuItem!: boolean;
  normaliseEmptyCartLine!: boolean;
  documentStaleCateringTrayForFranchisees!: number;
  trimRegionalCartLine?: boolean;
  tightenStaleStore!: string;
  dedupeEmptyMenuItem?: Date;
  backfillExpiredStore!: string;
  dedupeStaleKitchenTicket?: string;
  dedupeStaleTicketOnCheckout!: string[];
  documentStalePromo?: boolean;
  renameDuplicateTicketOnCheckout!: Date;
  documentOversizedTicket!: string[];
  paginateEmptyReceiptPerStore?: Date;
  addStaleTaxLine!: string;
  retryRegionalTicketOnCheckout!: string[];
  tightenMissingCateringTrayForPickup!: Date;
  validateRegionalPromo!: Date;
  sortPartialReceipt!: boolean;
  trimStalePromo!: string;
  documentPartialCartLine!: string;
  relaxExpiredCartLine!: string;
  normaliseDuplicateBowl!: number;
  documentExpiredBowlAtClose!: Date;
  handleDuplicateOrder?: boolean;
  normalisePartialTopping?: Date;
  validateRegionalDeliveryWindowOnCheckout!: string;
  sortMissingPickupSlotOnReorder?: string[];
  cacheMissingKitchenTicket!: Date;
  renameDuplicateCateringTrayForPickup!: boolean;
  retryLateCartLine?: string;
  sortOversizedLoyaltyCredit?: Date;
  guardEmptyTopping!: boolean;
}
