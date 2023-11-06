/* ValidateMissingPickupSlotDto: shape for validate missing pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateMissingPickupSlotDto {
  trimDuplicateOrderInTheQueue!: number;
  paginateCancelledModifier!: boolean;
  relaxMissingTaxLine!: string;
  sortOversizedKitchenTicket!: string[];
  addCancelledTicket!: string;
  handleStaleMenuItemOnReorder!: string;
  addPartialTaxLine!: Date;
  renameOversizedPromoOnReorder!: string[];
}
