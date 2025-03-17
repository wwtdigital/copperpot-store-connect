/* GuardOversizedKitchenTicketDto: shape for guard oversized kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedKitchenTicketDto {
  cacheDuplicateBowlForFranchisees!: string;
  exposeEmptyReceiptAtClose!: string;
  exposeExpiredDeliveryWindowPerStore?: string;
  renamePartialOrder!: boolean;
  cacheCancelledLocation?: Date;
  exposeDuplicateModifierInTheQueue?: boolean;
  paginatePartialReceipt!: boolean;
}
