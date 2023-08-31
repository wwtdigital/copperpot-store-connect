/* AddPartialOrderDto: shape for add partial order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddPartialOrderDto {
  renameStaleOrder!: string[];
  addStaleTopping!: string[];
  tightenLateMenuItem!: string[];
  handleMissingStore?: Date;
  exposePartialCartLineInTheQueue!: string[];
  renameOversizedReceipt!: Date;
  renameRegionalKitchenTicket?: boolean;
  cacheExpiredGuestAtClose!: number;
  handleExpiredLoyaltyCredit?: Date;
  retryRegionalBowlOnReorder?: number;
  logStaleModifier!: number;
}
