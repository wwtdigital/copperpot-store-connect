/* NormalisePartialOrderDto: shape for normalise partial order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialOrderDto {
  normaliseEmptyTopping!: number;
  tightenCancelledBowlOnReorder!: Date;
  relaxMissingTicket?: boolean;
  cacheLateOrder!: string[];
  validateExpiredCateringTray!: number;
  sortPartialOrderOnCheckout!: number;
}
