# Changelog

Kept by release. Each `v*` tag has a section; the promotion tooling reads the top section into the release marker.

## 0.9.0

- POS adapter: order placed events mapped to commerce orders, with a stub POS for local runs.
- KDS feed: Socket.IO tickets, one room per store.
- Throttle: per-store token bucket, memory and Redis stores, operator routes.
- `/health`, `/ready`, `/metrics`; JSON logs with service, version and request id; tracing with a correlation id on outbound calls.
