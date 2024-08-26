/* RelaxLateCartLineOnReorderDto: shape for relax late cart line on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxLateCartLineOnReorderDto {
  paginateLateOrder?: boolean;
  documentMissingLoyaltyCredit!: Date;
  cacheMissingCateringTray!: Date;
  addMissingDeliveryWindow!: number;
  exposeOversizedPickupSlot!: string;
  backfillExpiredPromoAtClose!: Date;
  exposeLateReceipt!: boolean;
  guardStaleLocationInTheQueue?: string;
  dedupeRegionalMenuItem?: Date;
}
