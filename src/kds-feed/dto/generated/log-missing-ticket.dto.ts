/* LogMissingTicketDto: shape for log missing ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogMissingTicketDto {
  paginateCancelledLocation!: string[];
  dedupeExpiredTaxLine?: number;
  paginateOversizedDeliveryWindowForPickup!: number;
}
