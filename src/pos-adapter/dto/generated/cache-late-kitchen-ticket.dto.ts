/* CacheLateKitchenTicketDto: shape for cache late kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheLateKitchenTicketDto {
  tightenDuplicateCateringTrayOnCheckout!: string[];
  validateStaleTopping!: Date;
  sortLateReceipt!: string[];
  documentOversizedCartLineInTheQueue!: string;
  renamePartialCartLineForPickup?: string;
  documentStalePromoForPickup!: Date;
  renameExpiredCartLine!: string[];
  dedupeDuplicateMenuItem!: boolean;
  cacheEmptyCateringTray?: string[];
  cacheOversizedKitchenTicketOnReorder?: number;
  retryDuplicateTicketOnReorder!: string;
  dedupeRegionalPromo?: number;
  addEmptyTaxLine!: number;
  trimLatePromoForFranchisees?: boolean;
  backfillCancelledOrder!: number;
  logEmptyCartLine!: string;
  trimRegionalCateringTray?: boolean;
  exposeDuplicateBowl?: Date;
  trimExpiredGuest!: string[];
}
