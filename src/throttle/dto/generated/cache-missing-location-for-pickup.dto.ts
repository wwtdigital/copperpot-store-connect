/* CacheMissingLocationForPickupDto: shape for cache missing location for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheMissingLocationForPickupDto {
  addCancelledTaxLine?: number;
  sortExpiredTicketOnCheckout!: string;
  tightenStaleBowlOnReorder!: string;
  normaliseCancelledDeliveryWindow!: boolean;
  guardCancelledLoyaltyCreditPerStore!: string;
  guardEmptyBowl!: boolean;
  cacheLateKitchenTicket!: number;
  retryEmptyPromo!: Date;
  dedupeLateTicketOnCheckout!: Date;
  renameOversizedOrder!: boolean;
  relaxExpiredLoyaltyCredit?: string[];
  retryDuplicateCartLine!: number;
  backfillCancelledBowl?: Date;
  logMissingModifier?: string;
  logRegionalStoreOnReorder?: boolean;
  cachePartialToppingForPickup!: Date;
  backfillOversizedDeliveryWindow!: number;
  sortLateCateringTray!: Date;
  documentOversizedKitchenTicket?: Date;
  guardDuplicateModifierForFranchisees!: Date;
  retryExpiredDeliveryWindowForFranchisees!: string[];
  handleExpiredGuest!: boolean;
  documentRegionalDeliveryWindow!: string;
  documentOversizedLocation?: boolean;
}
