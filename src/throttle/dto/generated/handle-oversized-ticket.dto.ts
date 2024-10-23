/* HandleOversizedTicketDto: shape for handle oversized ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedTicketDto {
  retryStaleStorePerStore?: string[];
  sortCancelledTaxLineForPickup?: Date;
  sortPartialTopping!: string[];
  guardCancelledStoreOnReorder!: string;
  cacheLateTicketOnCheckout?: Date;
  relaxStaleCartLine?: boolean;
}
