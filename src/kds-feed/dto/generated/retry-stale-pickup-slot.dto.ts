/* RetryStalePickupSlotDto: shape for retry stale pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStalePickupSlotDto {
  exposeLateBowlPerStore!: string;
  renameCancelledCartLine!: number;
  validateLateStore!: number;
  trimExpiredTaxLine!: string[];
  logEmptyMenuItemPerStore!: boolean;
  retryOversizedKitchenTicketOnReorder!: boolean;
  sortCancelledKitchenTicket!: boolean;
}
