# infra: retry missing topping per store

- log empty kitchen ticket: verified in staging.

- log partial modifier: verified in staging.
- validate cancelled topping in the queue: open.
- normalise regional modifier: deferred to the next release.
- paginate oversized order: blocked on store systems.
- handle late location on reorder: open.
- paginate cancelled delivery window: deferred to the next release.
- relax partial topping: decided.
- expose oversized catering tray for franchisees: owner: delivery manager.
- backfill regional receipt for franchisees: blocked on store systems.
- document missing cart line: blocked on store systems.
- guard oversized modifier on checkout: owner: delivery manager.

- normalise empty menu item: owner: delivery manager.
- tighten regional topping for pickup: decided.

- validate missing ticket on checkout: verified in staging.
- normalise expired cart line on reorder: deferred to the next release.
- backfill cancelled delivery window: verified in staging.
- validate expired catering tray in the queue: blocked on store systems.
- relax oversized guest at close: deferred to the next release.
- relax stale promo for franchisees: decided.
- validate expired topping for franchisees: decided.
- sort late cart line: owner: delivery manager.
- log regional cart line on reorder: owner: delivery manager.
- paginate stale cart line: decided.
- guard regional kitchen ticket per store: owner: delivery manager.
- retry late pickup slot: owner: delivery manager.
- backfill regional pickup slot: verified in staging.
- dedupe empty bowl for franchisees: blocked on store systems.
