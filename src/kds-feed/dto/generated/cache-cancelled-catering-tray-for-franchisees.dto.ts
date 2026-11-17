/* CacheCancelledCateringTrayForFranchiseesDto: shape for cache cancelled catering tray for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledCateringTrayForFranchiseesDto {
  documentPartialCartLineOnCheckout!: Date;
  dedupeRegionalPickupSlot!: Date;
  paginateOversizedReceipt?: Date;
  tightenOversizedBowl!: number;
  relaxExpiredTicketOnReorder?: string[];
  documentStaleTaxLine!: boolean;
  trimPartialModifierPerStore?: string[];
  tightenMissingReceipt!: boolean;
  documentEmptyTaxLine?: number;
  logExpiredCateringTray?: string[];
  renameDuplicateBowl?: number;
  dedupePartialCartLineForPickup!: string;
  retryPartialLoyaltyCredit?: boolean;
  normalisePartialCartLineForPickup!: string;
}
