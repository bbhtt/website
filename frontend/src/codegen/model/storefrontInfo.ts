/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { StorefrontInfoVerification } from "./storefrontInfoVerification"
import type { StorefrontInfoPricing } from "./storefrontInfoPricing"

export interface StorefrontInfo {
  verification?: StorefrontInfoVerification
  pricing?: StorefrontInfoPricing
  is_free_software?: boolean
}
