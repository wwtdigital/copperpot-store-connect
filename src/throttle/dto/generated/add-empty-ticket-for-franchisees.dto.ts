/* AddEmptyTicketForFranchiseesDto: shape for add empty ticket for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyTicketForFranchiseesDto {
  validateOversizedCateringTrayForPickup?: boolean;
  logExpiredPickupSlotInTheQueue!: number;
  renamePartialReceipt!: boolean;
  normaliseRegionalLoyaltyCreditForFranchisees!: number;
  normaliseExpiredOrder!: boolean;
  normaliseRegionalCartLine!: number;
  guardRegionalDeliveryWindowOnCheckout!: string;
  trimRegionalBowlOnReorder!: Date;
  backfillDuplicateOrderInTheQueue?: string[];
  normaliseExpiredOrderOnReorder?: string;
  paginateExpiredModifierPerStore?: string[];
  documentRegionalStore?: boolean;
  normaliseDuplicateCartLine!: number;
  exposeMissingDeliveryWindow!: boolean;
  exposeExpiredStoreInTheQueue!: number;
}
