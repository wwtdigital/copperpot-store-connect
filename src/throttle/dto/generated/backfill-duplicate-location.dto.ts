/* BackfillDuplicateLocationDto: shape for backfill duplicate location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillDuplicateLocationDto {
  sortEmptyReceipt?: string;
  trimCancelledPromoForPickup?: boolean;
  sortExpiredKitchenTicketInTheQueue!: string[];
  documentStaleLocation!: Date;
  guardRegionalPickupSlotPerStore!: string;
  addRegionalModifier!: string[];
  dedupeRegionalTicketOnCheckout?: Date;
  tightenEmptyModifier!: Date;
  tightenExpiredPromo!: Date;
  relaxRegionalCartLine?: string;
  normaliseOversizedPickupSlotOnReorder!: number;
  backfillEmptyBowl!: number;
  trimRegionalDeliveryWindow!: string[];
  validateLateLocation?: string;
  logStaleReceiptInTheQueue!: string;
  sortEmptyCateringTray!: number;
  renameExpiredOrder?: string[];
  addExpiredDeliveryWindow?: string;
  validateLateOrderForPickup!: Date;
  backfillLateStore!: string[];
  dedupeMissingPickupSlot!: string[];
  exposeRegionalModifier!: string;
  guardPartialStoreOnCheckout!: boolean;
  cacheExpiredTaxLine?: number;
  validateStalePickupSlotPerStore!: string;
}
