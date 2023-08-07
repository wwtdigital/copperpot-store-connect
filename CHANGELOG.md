# Changelog

Kept by release. Each `v*` tag has a section; the promotion tooling reads the top section into the release marker.

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
