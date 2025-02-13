# Runbook: POS adapter backlog

Alert `PosAdapterBacklog`. Orders are arriving from the POS faster than the adapter is getting them into the commerce API: the gateway queue for a store is above 50, or `store_connect_commerce_request_seconds` p95 is above 2 s for 5 minutes, or `outcome="failed"` is rising. The POS gateway retries with backoff, so orders are delayed, not lost; after 10 minutes the stores fall to offline mode and the kitchen works from printed slips.

## What the store sees

Tickets reach the kitchen late, then stop. The POS keeps taking orders and prints slips. Loyalty and online pickup times fall behind because the commerce API has not seen the orders.

## Check, in this order

1. Is it the commerce API? On the dashboard, `store_connect_commerce_request_seconds` by `outcome`. `http_5xx` or `error` outcomes mean the commerce API is failing or unreachable; a slow `ok` means it is up and slow. Check the commerce API's own status page and the `#incidents` channel before anything else; most backlogs are theirs.
2. One store or many? If one store, it is the store's network to the commerce API or that edge instance. If many, it is the commerce API or the shared network path.
3. Read the failures. Search the logs for `msg:"commerce API call failed"` and take a `correlationId`. Put it into the tracing UI: the `commerce.createOrder` span carries the status, and the trace shows whether the time went into the network or the API.
4. Timeouts? `commerce API timed out after 2500ms` in the logs means the API answered, late. A raised timeout buys time; see mitigation.
5. Authorisation? `http_401` or `http_403` after a key rotation: the stage's `COMMERCE_API_KEY` in the fleet config is stale.
6. Rejected rather than failed? `outcome="rejected"` rising means the POS is sending something the mapping refuses (an unknown PLU after a menu change). The log line names the field. That is a menu fix, not an outage; tell the menu team the PLU.

## Mitigate

- Commerce API down or failing: nothing to do here except keep the stores informed; the gateway retries and offline mode holds. Do not disable the throttle to "push harder".
- Commerce API slow: raise `COMMERCE_TIMEOUT_MS` to 5000 for the stage through the fleet config, which restarts the instances in the stage. Lower it back when the API recovers.
- Stale key: rotate it in the fleet config for the stage; the instances restart with it.
- One store's network: have the manager power-cycle the store router; escalate to the network team with the store number if that does not clear it.
- A bad release (the backlog started within two hours of a stage apply): roll the stage back (`docs/release.md`) and page the lead.

## Afterwards

- Reconcile. Every order the adapter accepted has `externalId` `pos:<store>:<posOrderId>` in the commerce API; the gateway's retry log for the store lists what it sent. Anything printed in offline mode and not in the commerce API is keyed in by the store from the slips; the store manager has that list by close.
- Postmortem within 2 business days when offline mode was reached in any store.
