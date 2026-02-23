/* RetryEmptyOrderDto: shape for retry empty order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyOrderDto {
  relaxCancelledKitchenTicket!: number;
  sortOversizedLocationOnCheckout!: string[];
  guardDuplicateLocationOnCheckout?: string;
}
