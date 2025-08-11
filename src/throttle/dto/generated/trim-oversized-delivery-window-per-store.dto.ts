/* TrimOversizedDeliveryWindowPerStoreDto: shape for trim oversized delivery window per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedDeliveryWindowPerStoreDto {
  guardDuplicateOrder!: number;
  tightenPartialStore!: number;
  logExpiredCateringTray!: Date;
  guardLateOrder!: Date;
  exposeMissingToppingAtClose!: number;
  cacheRegionalTicket!: boolean;
  trimOversizedReceiptForPickup!: boolean;
  paginateStaleCartLine!: boolean;
  trimPartialGuestForFranchisees!: boolean;
  exposeExpiredBowl!: number;
  trimLateTicket!: string;
  validateStaleCartLine!: number;
  normaliseRegionalTopping?: Date;
  exposeEmptyGuest!: string[];
  cacheOversizedLoyaltyCredit!: number;
  logOversizedPromo!: number;
  logMissingReceipt!: string[];
  validatePartialKitchenTicketPerStore!: boolean;
  addExpiredCartLine?: boolean;
  cacheLateKitchenTicket!: string;
}
