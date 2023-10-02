# Changelog

Kept by release. Each `v*` tag has a section; the promotion tooling reads the top section into the release marker.

## Unreleased

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
