# The staged rollout. A release reaches the fleet in three cohorts; each
# cohort sits behind a health gate that the next stage waits on. The
# store lists are the fleet manager's ids; a store moves between cohorts
# by a change here, reviewed like any other.
locals {
  # Stage pilot: the pilot cohort, twelve stores that opted in and have a
  # manager on the fleet channel during the soak.
  pilot_stores = ["101", "102", "103", "118", "127", "140", "212", "233", "301", "347", "402", "455"]

  # Stage region: the pilot cohort plus the two regions nearest the office,
  # about 120 stores, promoted on a weekday morning.
  region_stores = distinct(concat(local.pilot_stores, [for n in range(100, 220) : tostring(n)]))

  # Stage all: every store the fleet manager lists.
  all_stores = distinct(concat(local.region_stores, [for n in range(220, 700) : tostring(n)]))

  stages = {
    pilot = {
      stores = local.pilot_stores
      health_gate = {
        soak_minutes        = 60
        error_rate_max      = 0.5 # percent of POS events failed over the soak
        kds_lag_seconds_max = 30  # ticket published to ticket shown, p95
        ready_required      = true
        approval            = "store-systems-lead"
      }
    }
    region = {
      stores = local.region_stores
      health_gate = {
        soak_minutes        = 240
        error_rate_max      = 0.5
        kds_lag_seconds_max = 30
        ready_required      = true
        approval            = "store-systems-lead"
      }
    }
    all = {
      stores = local.all_stores
      health_gate = {
        soak_minutes        = 0 # the last stage has nothing after it; the alerts take over
        error_rate_max      = 1.0
        kds_lag_seconds_max = 45
        ready_required      = false
        approval            = null
      }
    }
  }

  previous_stage = {
    pilot  = null
    region = "pilot"
    all    = "region"
  }

  stage = local.stages[var.stage]
}
