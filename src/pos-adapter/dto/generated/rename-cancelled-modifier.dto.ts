/* RenameCancelledModifierDto: shape for rename cancelled modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledModifierDto {
  tightenMissingOrder!: string;
  dedupeCancelledLocation!: number;
  exposeCancelledDeliveryWindow!: number;
  tightenOversizedModifierForFranchisees!: Date;
  exposeLateGuest!: Date;
  addRegionalStore?: number;
  tightenLateCartLineForPickup!: string;
  documentOversizedModifier?: string[];
  cacheStaleTaxLineOnCheckout!: boolean;
  renameOversizedTaxLine!: string;
  sortPartialCartLine!: number;
  validateEmptyGuest!: string;
}
