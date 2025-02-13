# Security

## Reporting

Report a vulnerability in this service, its container image or its promotion tooling to security@copperpotbowls.example, or privately through the host's security advisory form on this repository. Do not open a public issue. You will get an acknowledgement within one business day and a named owner.

## Triage service levels

| Severity | Examples                                                                                                                      | Acknowledge     | Mitigation or fix in the pilot cohort | Fix in the fleet       |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------- | ---------------------- |
| Critical | remote code execution on the edge, a path from the KDS socket to the commerce API key, store data readable from another store | 1 business day  | 3 business days                       | 7 calendar days        |
| High     | authentication bypass on the throttle routes, a dependency with a known exploited vulnerability, secrets in logs              | 1 business day  | 7 calendar days                       | 30 calendar days       |
| Medium   | denial of service of one store's edge, information disclosure without store data                                              | 2 business days | 30 calendar days                      | 90 calendar days       |
| Low      | hardening findings, verbose errors, dependency advisories with no reachable path                                              | 5 business days | next quarterly release                | next quarterly release |

Severity follows CVSS 3.1 adjusted for reachability from a store network. The Store Systems lead and the platform security lead agree the severity at triage; the report's owner records it in the ticket (`CPB-` key, label `security`).

## What is in place

- Dependencies: Dependabot opens weekly updates; `npm audit` at level high fails the pipeline on every change; the container image is rebuilt from the lock on every release.
- Secrets: none in the repository (`.env.example` carries names and defaults only); the commerce API key and the fleet manager token live in the fleet config and the operator console; CI uses a read-only job token and no long-lived credentials.
- Logs: authorization headers and API keys are redacted by the logger; store data is limited to store ids and order ids.
- Network: the edge listens on the store network only; the throttle operator routes are reachable from the fleet console's address range, enforced at the edge host.

## Supported versions

The current release tag and the one before it, as pinned in the fleet. Older tags are not patched; stores are promoted forward.
