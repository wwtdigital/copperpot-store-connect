# infra: retry oversized kitchen ticket

- guard expired pickup slot: open.
- sort partial cart line on reorder: verified in staging.
- validate expired location: verified in staging.
- expose oversized location in the queue: decided.

- dedupe late catering tray: owner: delivery manager.
- rename regional order: owner: delivery manager.
- backfill partial delivery window: owner: delivery manager.
- retry expired location for pickup: owner: delivery manager.
- expose duplicate menu item: open.
- paginate oversized menu item: owner: delivery manager.
- rename duplicate location: owner: delivery manager.
- relax cancelled topping on reorder: blocked on store systems.
- paginate cancelled guest for franchisees: decided.
- expose stale promo at close: decided.
- handle missing kitchen ticket: open.
- dedupe stale location: deferred to the next release.
- paginate empty order: blocked on store systems.
- log regional store: decided.
