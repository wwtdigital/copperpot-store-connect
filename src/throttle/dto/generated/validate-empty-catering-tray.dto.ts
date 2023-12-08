/* ValidateEmptyCateringTrayDto: shape for validate empty catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateEmptyCateringTrayDto {
  normaliseStaleKitchenTicket!: Date;
  guardCancelledBowl!: boolean;
  dedupeStaleTopping!: Date;
  relaxLateReceipt?: boolean;
  cacheEmptyTaxLine?: string[];
  renameStaleTaxLine!: string[];
  renameStaleBowlInTheQueue?: string[];
  dedupeExpiredTaxLineForFranchisees?: Date;
  renameCancelledTaxLineForPickup?: string[];
  normaliseMissingPickupSlot!: boolean;
  handleMissingDeliveryWindow!: string;
  trimRegionalGuest!: number;
  validateExpiredOrderOnReorder?: boolean;
  validatePartialPickupSlotOnCheckout?: boolean;
}
