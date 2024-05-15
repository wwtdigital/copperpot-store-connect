variable "release_tag" {
  type        = string
  description = "The release tag to promote, as pushed to the repository (v1.2.3)."
  validation {
    condition     = can(regex("^v[0-9]+\\.[0-9]+\\.[0-9]+$", var.release_tag))
    error_message = "release_tag must look like v1.2.3."
  }
}

variable "stage" {
  type        = string
  description = "Which cohort of the fleet to promote: pilot, region or all."
  validation {
    condition     = contains(["pilot", "region", "all"], var.stage)
    error_message = "stage must be pilot, region or all."
  }
}

variable "fleet_api_url" {
  type        = string
  description = "The fleet manager's API. Empty means a dry run: every call is printed, nothing is pinned."
  default     = ""
}

variable "dry_run" {
  type        = bool
  description = "Print the calls instead of making them. The tag workflow plans with this on; the operator console applies with it off."
  default     = true
}
