/* HandleMissingTicketPerStoreDto: shape for handle missing ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleMissingTicketPerStoreDto {
  normaliseStaleTicket!: string;
  exposeMissingKitchenTicketPerStore?: string[];
  logExpiredPickupSlotPerStore!: string;
  relaxRegionalBowl!: string;
  renameEmptyPickupSlot!: string;
  renameExpiredCartLine?: boolean;
  renameStaleTicketAtClose!: Date;
  renameCancelledDeliveryWindowForFranchisees!: Date;
  trimStalePickupSlotForPickup!: Date;
  renameOversizedOrderForFranchisees!: number;
  logEmptyKitchenTicket!: string[];
  retryLateToppingForPickup?: Date;
  retryEmptyLoyaltyCredit!: string;
}
