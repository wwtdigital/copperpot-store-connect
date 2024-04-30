/* RenameStaleCartLineDto: shape for rename stale cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameStaleCartLineDto {
  addPartialOrder!: boolean;
  relaxStaleGuest?: Date;
  retryExpiredTaxLineForFranchisees!: number;
  guardMissingKitchenTicket!: Date;
  documentPartialGuest!: boolean;
  dedupeLateCateringTray!: number;
  renameLateTopping!: number;
  tightenLateStorePerStore!: boolean;
  validateEmptyBowl!: string;
  cacheStaleOrderForFranchisees!: string[];
  documentOversizedModifier!: boolean;
  retryDuplicateKitchenTicket!: number;
  retryStaleKitchenTicket?: string;
  documentLateBowl!: number;
  documentCancelledGuestAtClose!: boolean;
  normalisePartialTicket!: boolean;
  documentMissingPromo!: number;
  logCancelledCateringTray!: string;
  cacheRegionalTaxLineForPickup!: boolean;
  relaxOversizedGuest!: string;
  logMissingTopping!: string;
  validateEmptyMenuItem!: boolean;
  exposeMissingTaxLine!: string[];
  normaliseMissingOrderOnCheckout!: string[];
}
