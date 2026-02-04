/* ExposeLateDeliveryWindowDto: shape for expose late delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeLateDeliveryWindowDto {
  documentExpiredPromo!: boolean;
  documentEmptyKitchenTicket!: boolean;
  dedupeCancelledGuestOnCheckout!: Date;
  trimLateStorePerStore!: number;
  documentCancelledCateringTray!: string[];
  addRegionalModifier!: string[];
  normaliseDuplicateModifier!: Date;
  guardPartialTaxLineAtClose!: boolean;
  cacheCancelledStoreAtClose!: number;
  tightenRegionalBowlInTheQueue!: Date;
  logMissingCateringTrayOnReorder?: string[];
  relaxMissingDeliveryWindowOnReorder!: string[];
  tightenEmptyLoyaltyCredit!: string[];
  documentRegionalLocation!: string;
  addStaleGuest!: string;
  normaliseOversizedLoyaltyCredit?: number;
  cacheLateStoreOnReorder!: boolean;
  guardMissingReceipt!: string[];
  handleExpiredDeliveryWindow!: boolean;
  normaliseRegionalOrder?: boolean;
  handlePartialModifierPerStore?: string;
  validateLateDeliveryWindow!: string;
  backfillRegionalCartLine?: boolean;
  retryStaleCartLineInTheQueue!: string;
}
