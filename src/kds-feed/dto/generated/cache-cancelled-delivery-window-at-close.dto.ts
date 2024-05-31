/* CacheCancelledDeliveryWindowAtCloseDto: shape for cache cancelled delivery window at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledDeliveryWindowAtCloseDto {
  paginateCancelledLocationOnReorder!: string;
  logPartialLocationOnCheckout!: string;
  trimPartialKitchenTicket?: Date;
  logDuplicateKitchenTicket?: Date;
}
