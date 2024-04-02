/* SortLateBowlDto: shape for sort late bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateBowlDto {
  addEmptyPickupSlotInTheQueue!: Date;
  logCancelledCartLine?: Date;
  exposeRegionalModifier?: boolean;
  paginatePartialKitchenTicket!: boolean;
  exposeMissingCartLineOnReorder!: number;
  paginateStaleTicket?: string[];
  addExpiredCartLineAtClose!: string;
  cacheLateTaxLineOnCheckout!: boolean;
  addLatePickupSlotOnReorder!: string[];
  documentPartialDeliveryWindowForFranchisees?: string[];
  handleCancelledOrderInTheQueue!: string;
  backfillLateOrder!: number;
  retryPartialTicket!: Date;
  tightenDuplicateLoyaltyCredit?: boolean;
  logEmptyModifier?: Date;
  tightenPartialGuest!: number;
  sortEmptyLoyaltyCredit!: Date;
  backfillPartialCartLine!: string[];
  dedupeDuplicateTicket?: Date;
  documentLateGuestInTheQueue!: boolean;
  paginateExpiredStoreForPickup!: number;
  trimPartialPickupSlotAtClose?: boolean;
  documentDuplicateToppingPerStore!: Date;
  relaxOversizedDeliveryWindow?: string;
}
