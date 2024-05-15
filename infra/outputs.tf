output "stage" {
  value = var.stage
}

output "release_tag" {
  value = var.release_tag
}

output "store_count" {
  value = length(local.stage.stores)
}

output "health_gate" {
  value = local.stage.health_gate
}

output "previous_stage" {
  value = local.previous_stage[var.stage]
}
