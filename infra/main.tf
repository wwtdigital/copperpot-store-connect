# One pin per store: the fleet manager holds the release tag each store
# runs, and a store pulls the image for its pin on its next check-in.
# Replacing the trigger (a new tag) re-pins the store.
resource "terraform_data" "pin" {
  for_each = toset(local.stage.stores)

  triggers_replace = {
    store       = each.key
    release_tag = var.release_tag
  }

  provisioner "local-exec" {
    command = "${path.module}/../scripts/promote.sh ${var.stage} ${each.key} ${var.release_tag}"
    environment = {
      FLEET_API_URL = var.fleet_api_url
      DRY_RUN       = var.dry_run ? "1" : "0"
    }
  }
}

# The health gate runs after every pin in the stage and fails the apply,
# and so the next stage, when the cohort is not healthy after the soak:
# error rate over the threshold, KDS lag over the threshold, or a store
# in the cohort not answering /ready.
resource "terraform_data" "health_gate" {
  depends_on = [terraform_data.pin]

  triggers_replace = {
    stage       = var.stage
    release_tag = var.release_tag
  }

  provisioner "local-exec" {
    command = "${path.module}/../scripts/gate.sh ${var.stage} ${var.release_tag}"
    environment = {
      FLEET_API_URL       = var.fleet_api_url
      DRY_RUN             = var.dry_run ? "1" : "0"
      SOAK_MINUTES        = local.stage.health_gate.soak_minutes
      ERROR_RATE_MAX      = local.stage.health_gate.error_rate_max
      KDS_LAG_SECONDS_MAX = local.stage.health_gate.kds_lag_seconds_max
      READY_REQUIRED      = local.stage.health_gate.ready_required ? "1" : "0"
      STORES              = join(",", local.stage.stores)
    }
  }
}
