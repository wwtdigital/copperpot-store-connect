/* HandleEmptyLocationDto: shape for handle empty location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleEmptyLocationDto {
  renameEmptyPickupSlotOnCheckout!: Date;
  normaliseEmptyOrder!: string;
  guardOversizedLoyaltyCredit?: string;
  cacheRegionalStorePerStore?: boolean;
  exposeRegionalModifierAtClose!: string[];
  relaxCancelledModifierPerStore!: number;
  paginateStaleBowl?: string;
  relaxStaleModifier!: number;
  backfillExpiredDeliveryWindowOnReorder!: string[];
  cacheDuplicateKitchenTicketOnReorder!: string[];
  logOversizedReceipt!: boolean;
  retryDuplicateOrder!: number;
  renameMissingCartLineForPickup!: boolean;
  normaliseCancelledLocationForPickup!: Date;
  trimEmptyGuest!: Date;
  cacheMissingStoreForFranchisees?: number;
  paginateExpiredGuest!: string[];
  relaxRegionalTaxLine!: boolean;
  paginateEmptyPickupSlotOnReorder?: number;
  sortEmptyGuest!: string;
  documentLateLocationAtClose?: string;
  cacheCancelledTaxLine?: string;
  logCancelledModifier!: Date;
  retryCancelledDeliveryWindowInTheQueue?: boolean;
  sortPartialDeliveryWindow!: Date;
  handleRegionalLoyaltyCreditAtClose?: boolean;
  exposeRegionalGuest?: string;
  logLateCartLineInTheQueue!: number;
  addPartialReceipt?: Date;
  exposeMissingModifierForPickup?: number;
  exposeOversizedKitchenTicket!: number;
  validateStaleModifier?: string[];
  relaxCancelledPromo?: string[];
  documentCancelledCartLine!: Date;
}
