/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { VendingApplicationInformationKind } from "./vendingApplicationInformationKind"

/**
 * Information about an app, including tax code etc
 */
export interface VendingApplicationInformation {
  app_id: string
  kind: VendingApplicationInformationKind
  kind_reason: string
  foss: boolean
  foss_reason: string
}
