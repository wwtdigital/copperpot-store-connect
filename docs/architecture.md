# Architecture

One process per fleet edge, one HTTP listener. The POS gateway in a store pushes events; the kitchen display pulls tickets over a socket; the commerce API is the system of record for orders.

## An order, end to end

1. The POS gateway sends `ORDER_PLACED` (`src/pos-adapter/pos-events.ts`). The adapter mints or adopts a correlation id.
2. `mapOrderPlaced` translates PLUs to SKUs against the catalog and validates every field. A bad event is rejected here, named by field, before it costs anything.
3. `StoreThrottle.decide(storeId, cost)` asks the bucket store. A held order is answered to the POS with `retryAfterMs`; nothing is dropped.
4. `CommerceClient.createOrder` posts to the commerce API with `x-correlation-id`, `x-request-id` and `traceparent`. Latency lands in `store_connect_commerce_request_seconds`.
5. On success the adapter publishes a `KitchenTicket` to the store's room on the KDS feed. A failed post publishes no ticket: the kitchen never cooks an order the system does not hold.

## Throttle state

`BucketStore` has two implementations. `MemoryBucketStore` is for one process. `RedisBucketStore` runs the same arithmetic as a Lua script so two edge instances cannot both spend the last token; the script is in `redis-bucket-store.ts` and the pure arithmetic it mirrors is in `token-bucket.ts`, tested against the same cases.

## Readiness

`/ready` runs every registered check with a timeout and answers 503 naming the ones that failed. The checks are the throttle store (`ping`) and the feed (attached). The container `HEALTHCHECK` and the compose `healthcheck` read `/health` and `/ready`; the fleet promotion's pilot gate reads `/ready` across the pilot cohort before the next stage.

## What is not here

Deploys. Release tags are promoted to the fleet in stages by the tooling under `infra/` and `.github/workflows/`, described in `docs/release.md` once it lands; this service only reports its version.
