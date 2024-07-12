/* DocumentLateToppingDto: shape for document late topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateToppingDto {
  retryExpiredLoyaltyCredit!: number;
  retryRegionalTopping!: Date;
  logLateCateringTray!: number;
  renameLateBowl!: boolean;
  cacheCancelledTopping!: string[];
  documentCancelledCateringTray!: Date;
  validateOversizedModifierOnReorder!: string;
  logEmptyMenuItem!: Date;
}
