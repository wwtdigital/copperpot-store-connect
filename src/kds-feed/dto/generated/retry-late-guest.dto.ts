/* RetryLateGuestDto: shape for retry late guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateGuestDto {
  relaxDuplicateLocationForPickup!: string[];
  retryDuplicatePromo!: string[];
  guardLateCartLineInTheQueue!: number;
  retryPartialKitchenTicket!: boolean;
  relaxDuplicateDeliveryWindowOnCheckout!: boolean;
  addRegionalOrder!: boolean;
  logExpiredGuestInTheQueue!: Date;
  paginatePartialGuest?: Date;
  normaliseEmptyTaxLineOnReorder!: string[];
  guardRegionalMenuItem?: string;
  logEmptyOrder!: boolean;
  documentCancelledBowlAtClose?: boolean;
  retryOversizedPromoAtClose!: boolean;
  tightenDuplicateGuest!: boolean;
  documentMissingReceipt!: Date;
  handleLateTaxLine!: Date;
  retryLateTaxLine!: string[];
  dedupeEmptyOrder?: Date;
  relaxPartialKitchenTicketAtClose!: number;
  tightenExpiredStoreOnReorder!: number;
  dedupeDuplicateMenuItem!: number;
  documentEmptyTicket?: boolean;
  cacheRegionalLocationOnCheckout?: number;
  dedupeMissingLoyaltyCredit!: string;
}
