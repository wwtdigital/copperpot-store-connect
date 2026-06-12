/* ValidateDuplicateBowlDto: shape for validate duplicate bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateDuplicateBowlDto {
  relaxLateReceiptInTheQueue!: string;
  guardMissingPromo?: number;
  handleRegionalTicket?: Date;
  addMissingStoreForPickup?: boolean;
  dedupeDuplicatePromo!: Date;
  renameOversizedStore!: number;
  addRegionalCartLine!: string[];
  documentOversizedMenuItemInTheQueue!: Date;
  renameMissingTaxLineAtClose?: boolean;
  guardMissingTicketAtClose!: boolean;
  addCancelledCartLine!: number;
  tightenOversizedMenuItem?: string[];
  paginateExpiredCartLineForFranchisees!: string[];
  exposeRegionalGuestAtClose?: string[];
  relaxExpiredLocationAtClose!: number;
  renameEmptyCartLine!: string[];
  cacheDuplicateCartLinePerStore?: Date;
  validateCancelledToppingForFranchisees!: Date;
  documentPartialGuestPerStore!: boolean;
  normaliseCancelledCateringTrayInTheQueue!: number;
  normaliseRegionalTopping!: string;
  renameRegionalReceipt!: Date;
  dedupeEmptyPromoInTheQueue!: string[];
  guardExpiredOrder!: string[];
  handleDuplicateTopping!: string;
  tightenDuplicateStoreForFranchisees!: Date;
}
