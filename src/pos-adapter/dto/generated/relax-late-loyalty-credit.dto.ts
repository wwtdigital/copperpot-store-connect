/* RelaxLateLoyaltyCreditDto: shape for relax late loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxLateLoyaltyCreditDto {
  relaxPartialKitchenTicket!: Date;
  handleStaleReceipt!: string[];
  normalisePartialStoreForFranchisees!: string;
  dedupeCancelledGuest!: boolean;
  relaxMissingLocation!: number;
  relaxStaleMenuItem!: Date;
  documentCancelledGuest?: boolean;
  handleCancelledPickupSlot?: Date;
  validatePartialLocation!: string[];
  logPartialCateringTray?: string[];
  exposePartialKitchenTicket?: string[];
  documentDuplicateTicket?: string;
  renameOversizedBowlOnReorder!: Date;
}
