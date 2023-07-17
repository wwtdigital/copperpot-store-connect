/* TrimEmptyOrderForFranchiseesDto: shape for trim empty order for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimEmptyOrderForFranchiseesDto {
  exposeCancelledPickupSlot!: Date;
  paginateLateStore!: number;
  normaliseCancelledKitchenTicketAtClose!: number;
  normaliseLateTopping!: boolean;
  exposeMissingPromoForPickup?: boolean;
  trimMissingPromo!: Date;
  relaxOversizedPickupSlot?: string;
  sortPartialTaxLine?: string;
  logStaleOrderInTheQueue!: string[];
  handleExpiredTopping?: Date;
  sortMissingGuest!: number;
  dedupeExpiredLocation!: string;
  renameMissingBowlOnCheckout!: boolean;
  normaliseOversizedGuest!: boolean;
  dedupeStaleCartLine!: string[];
  cacheRegionalOrder!: number;
  dedupeLateTaxLine?: Date;
  documentExpiredTaxLine!: Date;
  backfillLateBowlOnReorder!: string;
  logExpiredPickupSlotForFranchisees!: Date;
  handleOversizedTaxLine!: boolean;
  dedupeCancelledGuest?: number;
  trimPartialCartLine!: boolean;
  cacheOversizedOrderOnCheckout!: string;
  dedupeEmptyTicket!: string;
  dedupeDuplicateModifier!: boolean;
  logMissingGuestForFranchisees!: boolean;
  dedupeMissingCateringTray!: string;
  guardRegionalMenuItem!: Date;
  addPartialCateringTray!: string[];
  normaliseEmptyStorePerStore!: Date;
  validateMissingBowl?: string;
  addStaleTaxLine!: boolean;
  validateMissingKitchenTicket?: string[];
  validateMissingTaxLine!: number;
}
