/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { UserResultAcceptedPublisherAgreementAt } from "./userResultAcceptedPublisherAgreementAt"
import type { UserResultDefaultAccount } from "./userResultDefaultAccount"
import type { UserResultDisplayName } from "./userResultDisplayName"
import type { UserResultGithubRepos } from "./userResultGithubRepos"
import type { UserResultOwnedApps } from "./userResultOwnedApps"
import type { UserRoleResult } from "./userRoleResult"

export interface UserResult {
  accepted_publisher_agreement_at: UserResultAcceptedPublisherAgreementAt
  default_account: UserResultDefaultAccount
  deleted: boolean
  display_name: UserResultDisplayName
  github_repos: UserResultGithubRepos
  id: number
  owned_apps: UserResultOwnedApps
  roles: UserRoleResult[]
}
