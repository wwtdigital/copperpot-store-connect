#!/usr/bin/env bash
# Pin one store to a release tag through the fleet manager. Called by
# Terraform (infra/main.tf) once per store in the stage. With DRY_RUN=1,
# or no fleet URL, the call is printed and nothing happens; that is what
# the tag workflow does.
set -euo pipefail

stage="${1:?stage required}"
store="${2:?store required}"
tag="${3:?release tag required}"

if [[ "${DRY_RUN:-1}" == "1" || -z "${FLEET_API_URL:-}" ]]; then
  echo "dry run: would pin store ${store} to ${tag} (stage ${stage})"
  exit 0
fi

: "${FLEET_API_TOKEN:?FLEET_API_TOKEN is required when DRY_RUN=0}"
curl -fsS --max-time 15 -X PUT "${FLEET_API_URL}/stores/${store}/pin" \
  -H 'content-type: application/json' \
  -H "authorization: Bearer ${FLEET_API_TOKEN}" \
  -d "{\"release\":\"${tag}\",\"stage\":\"${stage}\"}"
echo "pinned store ${store} to ${tag} (stage ${stage})"
