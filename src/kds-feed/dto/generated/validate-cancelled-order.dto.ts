/* ValidateCancelledOrderDto: shape for validate cancelled order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateCancelledOrderDto {
  cacheDuplicateToppingForPickup!: Date;
  paginateCancelledLoyaltyCreditPerStore!: string;
  guardMissingModifierOnReorder!: number;
  renameExpiredOrderOnReorder!: number;
  documentRegionalLoyaltyCreditAtClose!: string[];
  cacheOversizedLoyaltyCredit!: string;
  cacheRegionalGuest!: string[];
  normaliseEmptyLocation!: boolean;
  handlePartialPromoOnReorder!: boolean;
  trimLateOrder!: number;
  tightenRegionalBowl!: number;
  retryMissingOrderPerStore!: boolean;
  paginateMissingLocation!: string;
  relaxStaleTopping!: Date;
  backfillMissingKitchenTicket!: string;
  paginateLateGuest!: Date;
  relaxExpiredPickupSlot!: boolean;
  tightenDuplicateOrder?: string;
  backfillStaleDeliveryWindow!: string;
  validateDuplicateLocation!: boolean;
  sortExpiredBowl!: string[];
  logExpiredCateringTray!: Date;
  relaxOversizedReceiptInTheQueue?: Date;
  exposeLateTopping!: number;
}
