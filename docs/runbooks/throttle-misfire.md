# Runbook: throttle misfire

Alert `ThrottleMisfire`. The per-store throttle is holding orders back when it should not: throttled orders above 5 per minute for one store, or above 50 per minute across the fleet, while POS volume is normal. A held order is answered to the POS with a retry time and the POS retries, so nothing is lost, but guests wait and the store calls.

## What the store sees

The POS shows "kitchen busy, retrying" on orders that should go straight through. The kitchen is not busy.

## Check, in this order

1. One store or many? `store_connect_throttled_orders_total` by store on the dashboard. One store points at its limits or its bucket; many stores point at the Redis store or a promotion.
2. What limits are in force? `GET /throttle/<storeId>` on the store's edge answers the capacity, the refill and whether an override applies. `GET /throttle` lists every override on that instance. An override nobody remembers setting is the usual single-store cause: they are set during incidents and forgotten.
3. Is Redis healthy? `/ready` on the edge; the `throttle-store` check is a Redis ping. With `THROTTLE_STORE=redis`, a failover resets no buckets (they refill full), but a Redis that answers slowly makes every decision slow and the POS gateway times out and retries, which reads as throttling from the store. Check Redis latency on the edge host: `redis-cli --latency`.
4. Clock skew between the two edge instances fronting the store? Buckets refill by the caller's clock. Compare `date` on both instances; more than a few seconds apart and the bucket sees time go backwards.
5. Did a promotion change the defaults? `THROTTLE_CAPACITY` and `THROTTLE_REFILL_PER_MINUTE` come from the fleet config; compare the values in `/throttle/<storeId>` with the previous release's and read the changelog section of the release marker.

## Mitigate

- Stale override: `DELETE /throttle/<storeId>` clears the override and resets the bucket. Immediate.
- Store genuinely has more capacity than its limits: `PUT /throttle/<storeId>` with a larger capacity, and leave a note in the incident channel to remove it after the rush. Overrides do not survive a restart; make it permanent in `THROTTLE_OVERRIDES` through the fleet config if it should.
- Redis slow or down: the service keeps running; decisions fail closed with a retry time. Restart Redis on the edge host; if it does not come back, set `THROTTLE_STORE=memory` for that store through the fleet config as a last resort (each instance then keeps its own bucket, so the effective limit doubles) and open a ticket to put Redis back.
- Clock skew: fix time sync on the instance that drifted; the buckets correct themselves within a minute.
- After a promotion: roll the stage back (`docs/release.md`) and page the lead.

Never disable the throttle. A store that cannot keep up with its orders is worse off than a store that answers "retry in ten seconds".

## Afterwards

- List the overrides you set and remove them when the rush is over; check `GET /throttle` on both instances.
- If the cause was a forgotten override, add the store and the date to the override log in the incident channel's pinned message.
- Postmortem within 2 business days if more than one store was affected.
