/* DedupeStaleToppingDto: shape for dedupe stale topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeStaleToppingDto {
  logStaleGuest?: string;
  dedupeExpiredReceiptForPickup!: string;
  relaxMissingLocation!: Date;
  documentEmptyKitchenTicketForPickup!: number;
  backfillStaleGuestPerStore!: string;
  cacheCancelledDeliveryWindow!: boolean;
  handleOversizedDeliveryWindow!: boolean;
  retryDuplicateTopping!: boolean;
  handlePartialStore!: Date;
  normaliseRegionalGuestPerStore!: number;
  handleOversizedTopping!: number;
  handleLateCateringTrayAtClose?: string;
  backfillStalePickupSlotAtClose!: boolean;
  normaliseEmptyTicketOnReorder!: boolean;
  relaxLatePromo!: Date;
  logCancelledModifier!: string[];
  renamePartialBowl!: string;
}
