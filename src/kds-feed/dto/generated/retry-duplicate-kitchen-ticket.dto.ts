/* RetryDuplicateKitchenTicketDto: shape for retry duplicate kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryDuplicateKitchenTicketDto {
  logCancelledGuestForPickup?: string;
  renameStaleMenuItemForFranchisees?: string[];
  logEmptyStoreOnReorder!: number;
  validateMissingDeliveryWindow?: number;
  paginateDuplicateCateringTray?: Date;
  handleOversizedTicket?: string;
  logDuplicateDeliveryWindow!: string[];
  sortPartialCartLine!: string[];
  backfillRegionalToppingAtClose?: number;
  trimEmptyDeliveryWindow!: Date;
  trimMissingGuestForPickup!: number;
  trimLateStore!: number;
  exposeRegionalModifier!: number;
  validateMissingToppingOnCheckout?: string;
  addRegionalTicketForPickup!: Date;
  handleExpiredKitchenTicket!: boolean;
  documentCancelledTopping!: boolean;
  validateDuplicateStoreOnReorder?: Date;
  exposeMissingTaxLineForPickup!: Date;
  logLatePromo!: Date;
  dedupeRegionalDeliveryWindowOnReorder?: string[];
  addRegionalStore!: number;
  logOversizedBowl!: string[];
  addStaleCateringTrayOnReorder!: string[];
  retryCancelledPickupSlot!: boolean;
  paginateLateLoyaltyCredit?: number;
  addOversizedModifier?: string[];
  logLateLoyaltyCredit?: string[];
  handleOversizedKitchenTicketAtClose?: boolean;
}
