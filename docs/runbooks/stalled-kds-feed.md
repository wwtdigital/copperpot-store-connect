# Runbook: stalled KDS feed

Alert `KdsFeedStalled`. The kitchen display in a store stops showing new tickets while the POS keeps taking orders. Orders are not lost: the commerce API holds every accepted order, and the POS can re-print. The kitchen is cooking from printed slips until this is fixed, so it is a page during store hours.

## What the store sees

The display shows the last tickets and nothing new. The POS still prints receipts. Guests wait.

## Check, in this order

1. Is the edge instance up and ready? In the fleet console, open the store's instance and read `/ready`. A 503 names the failing check (`throttle-store` or `kds-feed`). If `kds-feed` is false the feed never attached: restart the instance and go to step 5.
2. Are orders being accepted? On the metrics dashboard for the store, compare `store_connect_pos_events_total{outcome="accepted"}` with `store_connect_kds_tickets_total`. If accepted is flat too, this is not the feed: go to the [POS adapter backlog](pos-adapter-backlog.md) runbook.
3. Is the display subscribed? Search the logs for the store with `msg:"ticket published"` and read the `subscribers` field. `0` means the display is not connected to its room. Then look for the last `kds client subscribed` line with that `storeId` and its `socketId`.
4. Is the socket reaching the service? The display connects to `/kds` over a websocket. From the store's network, `curl -i "http://<edge>:8080/kds/?EIO=4&transport=polling"` should answer 200 with a session id. A timeout means the store firewall or the edge's listener; a 404 means the path setting (`KDS_PATH`) differs between the display and the service.
5. Did it start after a promotion? Check the release marker time against the alert. If the stage was applied in the last two hours, treat it as a bad release.

## Mitigate

- Display not subscribed and the socket reaches the service: power-cycle the display. It re-subscribes on connect; the feed holds no state about it.
- Socket not reaching the service: have the store manager power-cycle the store router first (the usual cause after a power cut), then escalate to the network team with the store number.
- Feed not attached or the instance wedged: restart the instance from the fleet console. Thirty seconds.
- After a promotion: roll the stage back (`docs/release.md`, `scripts/rollback.sh <stage> <previous tag>`) and page the lead. Do not wait for the root cause.
- Meanwhile the kitchen works from printed slips. Tell the store manager the order ids that were accepted while the display was down, from the log lines in step 3; the POS can re-print them.

## Afterwards

- Note the correlation ids of the orders that missed the display in the incident channel.
- If more than one store was affected, open the postmortem within 2 business days. If one store, a ticket with the cause and the fix is enough.
- If the runbook sent you the wrong way, fix it in the same change as the fix.
