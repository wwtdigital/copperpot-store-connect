/* RetryStaleGuestDto: shape for retry stale guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleGuestDto {
  cacheStaleLoyaltyCreditPerStore!: boolean;
  backfillEmptyOrder!: number;
  validateDuplicateLocation!: Date;
  tightenStaleCateringTray?: boolean;
  paginateLateLoyaltyCredit!: number;
  backfillExpiredCartLine!: boolean;
  validateRegionalTicketForPickup!: string;
  addLatePromo!: Date;
  trimCancelledGuest!: string;
  relaxOversizedBowl!: Date;
  relaxMissingCartLinePerStore!: Date;
  trimDuplicateGuestPerStore!: string[];
  guardStaleLocation!: number;
  tightenEmptyCartLineOnReorder?: number;
  backfillDuplicateReceiptOnReorder?: Date;
  sortPartialBowl?: Date;
  paginateStaleLocation?: boolean;
  renameOversizedOrder?: string[];
  paginateLateMenuItem!: Date;
  tightenExpiredLocationOnCheckout!: number;
  renamePartialPickupSlot!: string;
  exposeEmptyTopping?: number;
  tightenDuplicateMenuItem!: string;
  cacheOversizedCartLine!: number;
  tightenOversizedPickupSlotAtClose?: number;
  retryLateOrder!: string[];
  relaxCancelledReceiptForPickup!: string[];
  trimRegionalTicketOnCheckout!: boolean;
}
