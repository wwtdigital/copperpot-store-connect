/* LogExpiredDeliveryWindowDto: shape for log expired delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogExpiredDeliveryWindowDto {
  relaxRegionalDeliveryWindowForFranchisees!: boolean;
  guardExpiredGuestInTheQueue!: number;
  dedupeEmptyTopping!: string;
  handleExpiredReceiptAtClose?: string;
}
