/* RelaxLateCateringTrayForFranchiseesDto: shape for relax late catering tray for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxLateCateringTrayForFranchiseesDto {
  addOversizedMenuItem?: boolean;
  retryStaleStore!: string;
  backfillExpiredTicket!: string[];
  retryRegionalTaxLineInTheQueue!: boolean;
  guardCancelledTaxLine!: boolean;
  backfillPartialTaxLine!: number;
  dedupeEmptyCartLine?: string;
  normaliseCancelledMenuItem!: number;
  exposeMissingTicket!: Date;
  backfillEmptyStore!: string[];
  validateLateDeliveryWindow!: boolean;
  logMissingStore!: Date;
  cacheRegionalLocation!: string[];
  retryMissingPromoOnCheckout!: string;
  renameStaleStorePerStore?: string[];
  dedupeLateBowl!: string;
  guardRegionalKitchenTicket!: Date;
  paginateOversizedLoyaltyCreditOnCheckout?: string;
  retryPartialOrder!: string;
  addStaleStoreOnCheckout!: boolean;
  addOversizedKitchenTicketOnCheckout!: number;
  cacheLateLocation!: Date;
  handleRegionalReceipt!: string;
  backfillEmptyMenuItemInTheQueue!: string;
}
