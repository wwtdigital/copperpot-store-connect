#!/usr/bin/env bash
# Roll a stage back to the previous release: the same promotion with the
# previous tag, so the fleet manager re-pins every store in the stage and
# each store pulls the older image on its next check-in. Run from the
# fleet operator's console (where the state lives) with FLEET_API_URL and
# FLEET_API_TOKEN set; anywhere else it plans and stops.
#
#   scripts/rollback.sh <stage> <previous tag>
#   scripts/rollback.sh region v1.3.2
set -euo pipefail

stage="${1:?stage required (pilot, region, all)}"
previous="${2:?previous release tag required (v1.3.2)}"
dry_run="${DRY_RUN:-1}"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "rollback: stage ${stage} to ${previous} (dry run: ${dry_run})"
terraform -chdir="${here}/../infra" init -backend=false -input=false >/dev/null
terraform -chdir="${here}/../infra" plan -input=false \
  -var "stage=${stage}" -var "release_tag=${previous}" -var "dry_run=${dry_run}" \
  -var "fleet_api_url=${FLEET_API_URL:-}" -out "rollback-${stage}.tfplan"

if [[ "${dry_run}" == "1" ]]; then
  echo "dry run: plan written, nothing applied. Run with DRY_RUN=0 from the operator console to apply."
  exit 0
fi
terraform -chdir="${here}/../infra" apply -input=false "rollback-${stage}.tfplan"
echo "rolled back: stage ${stage} now pins ${previous}; watch the gate and the runbook dashboards for 30 minutes"
