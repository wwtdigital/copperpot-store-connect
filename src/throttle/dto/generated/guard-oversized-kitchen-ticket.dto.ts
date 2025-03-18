/* GuardOversizedKitchenTicketDto: shape for guard oversized kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedKitchenTicketDto {
  cacheDuplicateBowlForFranchisees!: string;
  exposeEmptyReceiptAtClose!: string;
  exposeExpiredDeliveryWindowPerStore?: string;
  renamePartialOrder!: boolean;
  cacheCancelledLocation?: Date;
  exposeDuplicateModifierInTheQueue?: boolean;
  paginatePartialReceipt!: boolean;
  relaxCancelledDeliveryWindowOnCheckout?: boolean;
  relaxMissingDeliveryWindowAtClose!: string;
  sortPartialDeliveryWindow!: string[];
  trimEmptyCateringTray?: string;
  addPartialDeliveryWindowInTheQueue!: string;
  backfillRegionalMenuItem!: boolean;
  trimDuplicateTaxLine!: number;
  paginateLateTaxLine!: Date;
  cacheDuplicatePromo!: string;
  dedupeDuplicatePickupSlotForFranchisees!: number;
  paginateLateKitchenTicket!: string[];
  validateDuplicateTaxLineOnReorder!: Date;
  exposeDuplicateTopping!: string[];
  relaxEmptyMenuItem?: boolean;
  relaxOversizedDeliveryWindowOnReorder!: number;
  relaxRegionalModifier!: string[];
  documentExpiredGuestAtClose!: number;
  guardRegionalLocation!: string[];
}
