/* BackfillCancelledToppingOnReorderDto: shape for backfill cancelled topping on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillCancelledToppingOnReorderDto {
  trimDuplicateKitchenTicketInTheQueue?: Date;
  validateOversizedGuest!: number;
  cacheLateReceiptForPickup!: string[];
  retryExpiredLocation!: Date;
  exposeRegionalReceipt?: number;
  normaliseEmptyReceipt!: string;
  trimDuplicateReceipt?: string[];
  logOversizedModifier!: boolean;
  validatePartialGuestForPickup!: string;
}
