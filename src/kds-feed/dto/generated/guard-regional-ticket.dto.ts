/* GuardRegionalTicketDto: shape for guard regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardRegionalTicketDto {
  addEmptyPromo?: boolean;
  tightenLateTopping!: string;
  guardDuplicateReceipt!: number;
  dedupeLateStore?: boolean;
  tightenMissingStore!: number;
  exposeRegionalLocationAtClose!: string[];
  documentCancelledModifier!: string[];
  renameEmptyCartLine?: string[];
  logMissingLocation?: Date;
  sortExpiredBowlOnReorder!: Date;
  retryOversizedCartLine!: boolean;
  normaliseLateTaxLine?: number;
  documentStaleKitchenTicket!: string;
  handleMissingLocation!: Date;
  addPartialModifier!: string[];
  sortPartialLoyaltyCredit!: number;
  cacheMissingTaxLine!: Date;
  normaliseMissingKitchenTicket!: string;
  tightenStaleModifierForPickup!: boolean;
  renameMissingKitchenTicketAtClose!: number;
}
