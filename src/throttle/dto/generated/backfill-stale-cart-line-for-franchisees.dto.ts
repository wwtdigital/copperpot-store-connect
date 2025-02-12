/* BackfillStaleCartLineForFranchiseesDto: shape for backfill stale cart line for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleCartLineForFranchiseesDto {
  guardRegionalModifierOnCheckout!: string;
  addRegionalLoyaltyCreditPerStore!: Date;
  relaxCancelledModifier?: string[];
  addMissingLocation!: boolean;
  tightenPartialGuest!: number;
  normaliseExpiredOrder!: boolean;
  retryOversizedMenuItem!: string[];
  paginateLateCateringTray!: string;
  guardLateTicket!: string;
  relaxRegionalKitchenTicket!: string;
  validateMissingBowl!: number;
  paginateCancelledTicket!: boolean;
  tightenRegionalTicket!: string[];
  cacheOversizedModifierForFranchisees!: Date;
  logPartialTicket?: string[];
  cacheLateCartLineForPickup?: Date;
  validateExpiredGuestInTheQueue!: string;
  trimPartialCartLine?: string;
  tightenStaleOrderForPickup?: Date;
  exposePartialCartLine!: number;
  validateLateModifierPerStore!: Date;
  renameExpiredKitchenTicket?: boolean;
  sortCancelledTicket!: boolean;
  handleRegionalDeliveryWindow!: boolean;
}
