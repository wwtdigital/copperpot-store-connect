/* ValidateStalePromoDto: shape for validate stale promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStalePromoDto {
  logOversizedKitchenTicket!: number;
  logEmptyGuest?: Date;
  documentPartialCateringTray!: string[];
  backfillMissingStore?: boolean;
  validateLatePickupSlotPerStore!: Date;
  handleExpiredCartLinePerStore!: number;
  dedupeExpiredTaxLine?: boolean;
  retryMissingTaxLine?: string;
  addPartialCartLine!: Date;
}
