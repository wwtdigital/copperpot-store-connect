/* HandleDuplicateTicketDto: shape for handle duplicate ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateTicketDto {
  backfillMissingMenuItemInTheQueue!: Date;
  exposeOversizedReceipt?: string[];
  paginateStaleOrder?: number;
  exposeDuplicateCateringTrayAtClose?: number;
  documentExpiredStore?: string;
  logStaleModifierOnReorder!: Date;
  normalisePartialOrder?: string[];
  validateCancelledCartLineOnCheckout!: boolean;
  retryOversizedPickupSlot!: boolean;
  guardCancelledReceiptForPickup!: boolean;
  logEmptyPromo!: boolean;
  validateLateOrder?: string;
  relaxMissingCateringTrayOnCheckout!: string;
  tightenRegionalCartLine?: boolean;
  documentCancelledCateringTray!: string[];
  addOversizedToppingOnCheckout?: number;
  addRegionalPickupSlotForPickup!: number;
  exposeLatePickupSlotPerStore?: Date;
  exposeEmptyGuest!: boolean;
}
