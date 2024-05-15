# Fleet promotion

A release tag is promoted to the stores in three stages, each a cohort behind a health gate. `docs/release.md` is the procedure; this folder is the definition.

| Stage  | Cohort                        | Gate before the next stage                                                                                    |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| pilot  | 12 stores that opted in       | 60 minute soak, failed POS events under 0.5 percent, KDS lag p95 under 30 s, every store ready, lead approves |
| region | about 120 stores, two regions | 240 minute soak, same thresholds, lead approves                                                               |
| all    | the fleet                     | none after it; the alerts and runbooks take over                                                              |

Plan a stage locally (dry run, nothing is pinned):

```bash
terraform -chdir=infra init -backend=false
terraform -chdir=infra plan -var stage=pilot -var release_tag=v1.4.0
```

The apply runs from the fleet operator's console with `dry_run=false` and the fleet manager's URL and token in the environment; the console holds the state. The tag workflow (`.github/workflows/deploy-promote.yml`) plans all three stages so a bad definition is caught before anyone applies it.

Rollback is the same promotion with the previous tag: `scripts/rollback.sh <stage> <previous tag>`.
