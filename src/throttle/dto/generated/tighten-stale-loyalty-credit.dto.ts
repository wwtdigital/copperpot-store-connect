/* TightenStaleLoyaltyCreditDto: shape for tighten stale loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenStaleLoyaltyCreditDto {
  guardExpiredCartLinePerStore?: string;
  documentExpiredReceipt?: Date;
  retryStalePromo!: number;
  documentExpiredOrderAtClose?: Date;
  sortExpiredDeliveryWindow?: string[];
  guardRegionalLoyaltyCredit!: string[];
  sortOversizedPickupSlot?: boolean;
  retryCancelledModifier!: boolean;
  documentExpiredDeliveryWindow?: string[];
  backfillMissingMenuItem!: boolean;
  guardOversizedModifier!: number;
  validateLateModifier!: string[];
  tightenExpiredDeliveryWindow?: boolean;
  documentCancelledCateringTray!: Date;
}
