/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { UserResultDisplayName } from "./userResultDisplayName"
import type { UserResultDefaultAccount } from "./userResultDefaultAccount"
import type { UserResultConnectedAccountsItem } from "./userResultConnectedAccountsItem"
import type { UserResultAcceptedPublisherAgreementAt } from "./userResultAcceptedPublisherAgreementAt"
import type { UserRoleResult } from "./userRoleResult"
import type { UserResultGithubRepos } from "./userResultGithubRepos"
import type { UserResultOwnedApps } from "./userResultOwnedApps"

export interface UserResult {
  id: number
  display_name: UserResultDisplayName
  default_account: UserResultDefaultAccount
  connected_accounts: UserResultConnectedAccountsItem[]
  accepted_publisher_agreement_at: UserResultAcceptedPublisherAgreementAt
  roles: UserRoleResult[]
  github_repos: UserResultGithubRepos
  owned_apps: UserResultOwnedApps
}
