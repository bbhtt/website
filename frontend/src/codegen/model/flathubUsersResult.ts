/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { Pagination } from "./pagination"
import type { UserResult } from "./userResult"

export interface FlathubUsersResult {
  pagination: Pagination
  users: UserResult[]
}