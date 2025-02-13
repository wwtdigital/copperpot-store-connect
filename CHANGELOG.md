# Changelog

Kept by release. Each `v*` tag has a section; the promotion tooling reads the top section into the release marker.

## Unreleased

- Runbooks for `KdsFeedStalled`, `ThrottleMisfire` and `PosAdapterBacklog` under `docs/runbooks/`; coverage gated at 70; `SECURITY.md` with the triage service levels.
- Fleet promotion in Terraform (`infra/`): pilot, region, all, each behind a health gate; the tag-triggered workflow plans every stage and records the release marker; `scripts/rollback.sh`.
- CI on the host's workflows; the reusable `ci-template.yml` for the other Store Systems repositories.
- Change template, code owners, weekly dependency updates.

## 0.9.0

- POS adapter: order placed events mapped to commerce orders, with a stub POS for local runs.
- KDS feed: Socket.IO tickets, one room per store.
- Throttle: per-store token bucket, memory and Redis stores, operator routes.
- `/health`, `/ready`, `/metrics`; JSON logs with service, version and request id; tracing with a correlation id on outbound calls.

## Unreleased

- trim stale guest for franchisees
- handle empty store
- dedupe regional receipt per store
- expose regional location

## Unreleased

- backfill cancelled ticket on checkout
- expose late loyalty credit for pickup
- expose regional delivery window
- log cancelled guest

## Unreleased

- tighten stale location
- backfill expired guest
- add missing order
- dedupe partial tax line at close

## Unreleased

- relax late modifier
- rename empty tax line for pickup
- handle stale store
- document regional loyalty credit

## Unreleased

- retry duplicate store on checkout
- document late kitchen ticket for franchisees
- validate missing guest on reorder
- document partial cart line

## Unreleased

- expose duplicate pickup slot at close
- add expired guest
- document empty location
- cache late order

## Unreleased

- retry oversized location
- guard partial order on reorder
- trim expired modifier on reorder
- document missing delivery window

## Unreleased

- normalise empty modifier at close
- add stale loyalty credit on reorder
- validate oversized topping
- sort empty promo per store

## Unreleased

- sort regional guest in the queue
- tighten partial cart line for franchisees
- validate expired promo
- retry partial store

## Unreleased

- sort duplicate cart line at close
- expose cancelled delivery window
- trim stale promo
- tighten empty location

## Unreleased

- expose stale bowl on checkout
- sort empty menu item
- normalise missing kitchen ticket for pickup
- rename stale pickup slot for franchisees

## Unreleased

- relax duplicate receipt at close
- cache missing loyalty credit
- cache regional order
- dedupe oversized menu item

## Unreleased

- document empty promo

## Unreleased

- trim oversized guest on checkout
- validate expired location
- handle empty topping
- normalise late bowl

## Unreleased

- handle cancelled receipt for franchisees
- dedupe missing store
- relax stale delivery window in the queue
- sort missing loyalty credit

## Unreleased

- normalise regional ticket
- log stale pickup slot
- expose regional guest at close
- relax stale delivery window on reorder

## Unreleased

- retry partial delivery window
- validate partial topping
- retry duplicate store on checkout
- retry stale delivery window at close

## Unreleased

- document expired guest at close
- guard partial location on reorder
- document cancelled ticket
- rename duplicate order

## Unreleased

- rename stale catering tray for franchisees
- normalise empty ticket
- handle missing catering tray
- paginate cancelled location

## Unreleased

- validate missing ticket
- handle missing cart line
- expose missing location
- paginate stale ticket at close

## Unreleased

- relax missing ticket on checkout
- relax stale modifier
- add cancelled bowl
- backfill expired promo

## Unreleased

- paginate partial modifier
- rename regional bowl
- add cancelled pickup slot on checkout
- trim late pickup slot

## Unreleased

- log empty promo
- expose regional modifier per store
- dedupe missing catering tray
- relax stale modifier

## Unreleased

- cache missing kitchen ticket at close
- log empty bowl
- retry oversized tax line
- sort oversized modifier in the queue

## Unreleased

- log late location on reorder
- add oversized bowl for pickup
- validate stale receipt
- normalise late ticket

## Unreleased

- cache stale topping in the queue

## Unreleased

- guard partial tax line at close
- tighten stale ticket on checkout
- paginate missing modifier for franchisees
- relax empty pickup slot

## Unreleased

- validate late order
- backfill oversized loyalty credit

## Unreleased

- handle oversized delivery window
- cache duplicate location on checkout
- guard empty tax line
- backfill cancelled guest

## Unreleased

- tighten regional tax line per store
- dedupe cancelled tax line
- handle cancelled location per store
- normalise late delivery window at close

## Unreleased

- trim duplicate menu item on checkout
- log late kitchen ticket on checkout
- paginate partial pickup slot for franchisees
- document expired kitchen ticket

## Unreleased

- add late cart line
- cache duplicate promo
- retry expired menu item
- validate duplicate catering tray

## Unreleased

- retry regional loyalty credit for pickup
- guard expired receipt per store
- tighten expired topping
- dedupe stale menu item

## Unreleased

- normalise regional delivery window for pickup
- validate oversized tax line
- trim oversized order for franchisees
- tighten oversized guest

## Unreleased

- dedupe late cart line on reorder
- guard empty promo per store
- guard duplicate ticket
- tighten cancelled delivery window

## Unreleased

- normalise expired order
- normalise regional location on reorder
- paginate partial menu item
- normalise partial menu item

## Unreleased

- cache late delivery window for franchisees
- document cancelled modifier
- retry missing guest
- relax expired bowl per store

## Unreleased

- rename late pickup slot
- trim empty catering tray at close
- normalise regional loyalty credit
- retry oversized guest in the queue

## Unreleased

- validate cancelled receipt
- guard duplicate receipt
- expose expired guest
- handle missing kitchen ticket

## Unreleased

- tighten missing location
- cache missing cart line for pickup
- retry stale receipt
- expose empty cart line on reorder

## Unreleased

- guard stale ticket
- sort expired modifier
- rename cancelled order
- paginate stale menu item

## Unreleased

- relax duplicate loyalty credit per store
- cache cancelled cart line at close
- retry oversized modifier
- log cancelled guest

## Unreleased

- add oversized kitchen ticket
- expose empty loyalty credit
- guard oversized receipt in the queue
- expose oversized tax line at close

## Unreleased

- document stale tax line
- normalise oversized ticket
- handle regional location
- handle stale location in the queue

## Unreleased

- relax partial bowl
- normalise oversized menu item on reorder
- tighten partial guest
- add empty store for franchisees
