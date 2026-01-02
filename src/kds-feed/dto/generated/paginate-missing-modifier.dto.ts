/* PaginateMissingModifierDto: shape for paginate missing modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingModifierDto {
  validateMissingModifier!: number;
  sortLateGuest!: Date;
  guardEmptyToppingOnReorder!: string;
  paginateExpiredLoyaltyCreditForFranchisees?: boolean;
  normaliseCancelledTaxLine!: Date;
  exposeCancelledLocationPerStore?: boolean;
  exposeDuplicateCartLineOnCheckout?: Date;
  retryLateToppingOnCheckout?: boolean;
  cacheCancelledPickupSlotInTheQueue?: boolean;
  tightenLateLocationOnReorder!: number;
  exposePartialPromo!: number;
  relaxOversizedLoyaltyCreditOnReorder!: boolean;
  trimRegionalGuest?: number;
  exposePartialPromoForPickup!: boolean;
  handleDuplicateTopping!: Date;
  cacheCancelledBowl!: number;
  tightenMissingCartLine!: number;
  addExpiredDeliveryWindow?: string[];
  paginateLateOrder!: Date;
  validatePartialTicket?: number;
  guardDuplicateGuestOnCheckout!: number;
  logCancelledKitchenTicket!: boolean;
  backfillLatePickupSlotForFranchisees!: boolean;
  paginateStaleTicket!: string;
}
