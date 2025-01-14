/* ExposePartialCateringTrayDto: shape for expose partial catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialCateringTrayDto {
  renameMissingCateringTray!: string;
  paginateOversizedModifierForPickup?: boolean;
  addDuplicatePickupSlotForPickup!: number;
  documentEmptyPromo?: boolean;
  paginateOversizedMenuItemInTheQueue!: number;
  guardExpiredTaxLine!: string;
  dedupeCancelledCartLine!: string;
  relaxRegionalLoyaltyCreditForPickup!: string[];
  validateExpiredModifier!: number;
  relaxCancelledTicket!: string;
  handleMissingTaxLine!: string[];
  relaxEmptyLocationPerStore!: string;
  trimEmptyBowl!: number;
  trimStaleMenuItem?: Date;
  sortLateOrderForPickup?: number;
}
