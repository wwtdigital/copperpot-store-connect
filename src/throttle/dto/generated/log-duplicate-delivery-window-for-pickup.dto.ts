/* LogDuplicateDeliveryWindowForPickupDto: shape for log duplicate delivery window for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogDuplicateDeliveryWindowForPickupDto {
  handleEmptyCartLine!: string[];
  sortExpiredKitchenTicket!: string[];
  documentCancelledCartLine!: string;
  retryDuplicateStorePerStore?: number;
  sortMissingPickupSlotOnCheckout!: boolean;
  documentEmptyKitchenTicketOnReorder!: number;
  tightenStaleTicketInTheQueue!: number;
  handleRegionalKitchenTicket!: number;
  guardMissingMenuItem?: Date;
  dedupeRegionalTopping!: number;
  sortPartialGuest?: Date;
  trimMissingDeliveryWindow?: Date;
  exposeMissingDeliveryWindow!: boolean;
  documentDuplicateGuest!: string[];
  handleStaleCartLineOnCheckout?: boolean;
  tightenLateStore?: string;
  handleEmptyOrderForFranchisees?: Date;
  tightenStaleCartLineInTheQueue!: string[];
  normaliseEmptyPickupSlotOnCheckout!: boolean;
  retryCancelledCartLine!: boolean;
  handleLateGuestForPickup!: string[];
  retryStaleMenuItem?: string;
}
