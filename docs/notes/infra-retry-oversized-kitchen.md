# infra: retry oversized kitchen ticket

- guard expired pickup slot: open.
- sort partial cart line on reorder: verified in staging.
- validate expired location: verified in staging.
- expose oversized location in the queue: decided.

- sort late bowl: owner: delivery manager.
- cache cancelled ticket in the queue: deferred to the next release.
- dedupe expired location: owner: delivery manager.
- retry partial promo on checkout: verified in staging.
- tighten empty loyalty credit: verified in staging.
- cache duplicate ticket for pickup: open.
- validate empty kitchen ticket at close: decided.
- rename stale location: verified in staging.
- trim duplicate cart line in the queue: open.
- dedupe partial bowl: blocked on store systems.
- relax oversized pickup slot for franchisees: owner: delivery manager.
- relax regional receipt: decided.
- guard regional receipt on reorder: blocked on store systems.
- normalise late pickup slot at close: verified in staging.

- tighten empty guest on reorder: decided.
- rename regional kitchen ticket: verified in staging.
- normalise regional catering tray: deferred to the next release.
- guard stale delivery window: owner: delivery manager.
- guard oversized tax line: blocked on store systems.
- normalise late menu item: blocked on store systems.
- document regional order: blocked on store systems.
- trim oversized receipt at close: owner: delivery manager.
- validate empty modifier: blocked on store systems.
- trim missing guest for pickup: verified in staging.

- tighten cancelled modifier: deferred to the next release.
- sort cancelled pickup slot for franchisees: verified in staging.
- expose oversized location on reorder: owner: delivery manager.
- guard missing guest: owner: delivery manager.
- trim stale guest at close: deferred to the next release.
