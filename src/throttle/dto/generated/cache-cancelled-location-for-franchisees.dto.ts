/* CacheCancelledLocationForFranchiseesDto: shape for cache cancelled location for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledLocationForFranchiseesDto {
  dedupeDuplicateDeliveryWindowForPickup!: number;
  cacheMissingBowlOnCheckout!: Date;
  dedupeDuplicateDeliveryWindow!: Date;
  dedupeRegionalMenuItem?: string;
  dedupeStaleTaxLineInTheQueue!: string[];
  trimLatePromoForFranchisees?: number;
  renameExpiredToppingForFranchisees?: string[];
  validateEmptyTaxLine!: string[];
  relaxMissingTaxLineInTheQueue!: boolean;
  normaliseEmptyDeliveryWindowInTheQueue!: string[];
  normaliseLateReceipt!: Date;
  exposeExpiredCateringTray!: boolean;
  renameCancelledOrder!: Date;
  backfillExpiredCartLineOnCheckout!: string[];
  backfillDuplicateGuest!: string[];
  relaxCancelledTaxLineForPickup!: Date;
  sortRegionalTopping!: number;
  cacheRegionalStoreOnReorder!: string[];
  relaxRegionalStore!: number;
  logEmptyCartLine!: Date;
  addOversizedCartLine!: string[];
  documentOversizedLoyaltyCredit?: string;
  tightenMissingPromoOnCheckout?: Date;
  validateMissingCateringTray!: string[];
  guardOversizedLocationPerStore?: string;
}
