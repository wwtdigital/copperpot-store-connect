# Runbooks

One per paging alert. Each says what the store sees, what to check in order, how to mitigate, and what to do afterwards. The on call reads the runbook before touching anything; if the runbook is wrong, fixing it is part of closing the incident.

| Alert               | Fires when                                                                                                                    | Runbook                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `KdsFeedStalled`    | a store has accepted POS orders but no ticket published for 5 minutes, or a store reports tickets not arriving                | [stalled KDS feed](stalled-kds-feed.md)       |
| `ThrottleMisfire`   | throttled orders above 5 per minute for a store, or above 50 per minute across the fleet, while POS volume is normal          | [throttle misfire](throttle-misfire.md)       |
| `PosAdapterBacklog` | the POS gateway queue is above 50 for a store, or commerce call p95 is above 2 s for 5 minutes, or failed outcomes are rising | [POS adapter backlog](pos-adapter-backlog.md) |

Severity during store hours is a page; overnight it is a ticket for the morning. Escalate to the Store Systems lead after 30 minutes without a mitigation, and at once when more than one region is affected.

Where to look: the fleet console lists each store's edge instance and its `/health` and `/ready`; the metrics dashboard graphs the four `store_connect_` series per store; the log search takes a `correlationId`; the tracing UI takes the same id as a tag.
