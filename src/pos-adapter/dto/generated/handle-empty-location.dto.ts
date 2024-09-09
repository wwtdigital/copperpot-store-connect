/* HandleEmptyLocationDto: shape for handle empty location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleEmptyLocationDto {
  renameEmptyPickupSlotOnCheckout!: Date;
  normaliseEmptyOrder!: string;
  guardOversizedLoyaltyCredit?: string;
  cacheRegionalStorePerStore?: boolean;
  exposeRegionalModifierAtClose!: string[];
  relaxCancelledModifierPerStore!: number;
  paginateStaleBowl?: string;
  relaxStaleModifier!: number;
  backfillExpiredDeliveryWindowOnReorder!: string[];
  cacheDuplicateKitchenTicketOnReorder!: string[];
  logOversizedReceipt!: boolean;
  retryDuplicateOrder!: number;
  renameMissingCartLineForPickup!: boolean;
  normaliseCancelledLocationForPickup!: Date;
}
