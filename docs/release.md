# Releases and promotion

A release is a tag. The tag is promoted to the stores in three stages, each a cohort behind a health gate. Nothing in this repository's CI deploys anything; the apply runs from the fleet operator's console, and this document is the procedure.

## Cutting a release

1. On `main`, move the `Unreleased` section of `CHANGELOG.md` under a heading for the version (`## 1.4.0`). Every change an operator or a store notices gets a line.
2. Bump `version` in `package.json` to match and merge that change with its ticket key.
3. Tag the merge commit: `git tag -a v1.4.0 -m "Release v1.4.0" && git push origin v1.4.0`. Tags are cut on Tuesday or Wednesday mornings, never on a Friday or before a holiday weekend.

The tag starts `.github/workflows/deploy-promote.yml`, which packages and tests the tag, plans all three stages in order, and records the release marker with the changelog section as its notes. A plan that fails stops the promotion before anyone applies anything.

## The three stages

| Stage  | Cohort                                      | Who applies                                      | Gate before the next stage                                                                                                                                      |
| ------ | ------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pilot  | 12 stores that opted in (`infra/stages.tf`) | Store Systems on call, from the operator console | 60 minute soak; failed POS events under 0.5 percent; KDS lag p95 under 30 s; every pilot store answers `/ready`; the Store Systems lead approves in the console |
| region | about 120 stores                            | Store Systems on call, weekday morning           | 240 minute soak, same thresholds, lead approves                                                                                                                 |
| all    | the fleet                                   | Store Systems on call, next weekday morning      | none; the alerts and the runbooks take over                                                                                                                     |

The apply for a stage is `terraform apply` of the plan the workflow produced, with `dry_run=false` and the fleet manager's URL and token in the console's environment. The console holds the state. Each store pulls the image for its pin on its next check-in, within 15 minutes.

The gate (`scripts/gate.sh`) runs as part of the apply, after every store in the stage is pinned. It waits out the soak, reads the cohort's numbers from the fleet manager and fails the apply when a threshold is crossed. A failed gate pages the on call and the next stage cannot start until someone has looked.

## The release marker

The last job of the workflow records a release on the host for the tag, with the `CHANGELOG.md` section for the version as its body (`scripts/release-notes.mjs`). That release is the deploy event: the dashboards count deploys from it and the delivery metrics take lead time from the merge to it. A tag without a changelog section still gets a marker, with a note saying so.

## Rolling back

A rollback is the same promotion with the previous tag:

```bash
DRY_RUN=0 scripts/rollback.sh region v1.3.2
```

Run from the operator console. Every store in the stage is re-pinned to the previous tag and pulls the older image on its next check-in. Roll back the stage that shows the problem and every stage after it; the pilot cohort is rolled back last if at all, since it is the cohort that finds the next problem. Record the rollback in the incident channel with the correlation ids that led to it, then open the postmortem.

## Who does what

- Store Systems on call: cuts the tag, applies each stage, watches the gate.
- Store Systems lead: approves the pilot and region gates in the console, decides on a rollback.
- The platform group: owns the fleet manager and the operator console; reviews changes to `infra/` and the workflows (`.github/CODEOWNERS`).
