#!/usr/bin/env bash
# The health gate between stages. Waits out the soak, then reads the
# cohort's numbers from the fleet manager and fails when any threshold is
# crossed: failed POS events over ERROR_RATE_MAX percent, KDS lag p95
# over KDS_LAG_SECONDS_MAX, or (when READY_REQUIRED=1) a store in the
# cohort not answering /ready. A failed gate fails the Terraform apply,
# so the next stage cannot start until someone looks. DRY_RUN=1 prints
# the thresholds and passes.
set -euo pipefail

stage="${1:?stage required}"
tag="${2:?release tag required}"
soak="${SOAK_MINUTES:-0}"
error_max="${ERROR_RATE_MAX:-0.5}"
lag_max="${KDS_LAG_SECONDS_MAX:-30}"
ready_required="${READY_REQUIRED:-1}"

if [[ "${DRY_RUN:-1}" == "1" || -z "${FLEET_API_URL:-}" ]]; then
  echo "dry run: gate for stage ${stage} at ${tag}: soak ${soak} min, error rate <= ${error_max}%, kds lag p95 <= ${lag_max}s, ready required ${ready_required}"
  exit 0
fi

: "${FLEET_API_TOKEN:?FLEET_API_TOKEN is required when DRY_RUN=0}"
if (( soak > 0 )); then
  echo "soaking ${soak} minutes before reading the gate"
  sleep $(( soak * 60 ))
fi

summary=$(curl -fsS --max-time 30 "${FLEET_API_URL}/stages/${stage}/health?release=${tag}" -H "authorization: Bearer ${FLEET_API_TOKEN}")
error_rate=$(echo "${summary}" | node -pe 'JSON.parse(require("fs").readFileSync(0,"utf8")).errorRatePercent')
lag_p95=$(echo "${summary}" | node -pe 'JSON.parse(require("fs").readFileSync(0,"utf8")).kdsLagSecondsP95')
not_ready=$(echo "${summary}" | node -pe 'JSON.parse(require("fs").readFileSync(0,"utf8")).storesNotReady.length')

echo "stage ${stage} at ${tag}: error rate ${error_rate}%, kds lag p95 ${lag_p95}s, stores not ready ${not_ready}"
fail=0
awk -v a="${error_rate}" -v b="${error_max}" 'BEGIN { exit !(a > b) }' && { echo "gate failed: error rate over ${error_max}%"; fail=1; }
awk -v a="${lag_p95}" -v b="${lag_max}" 'BEGIN { exit !(a > b) }' && { echo "gate failed: kds lag over ${lag_max}s"; fail=1; }
if [[ "${ready_required}" == "1" && "${not_ready}" != "0" ]]; then echo "gate failed: ${not_ready} stores not ready"; fail=1; fi
exit "${fail}"
