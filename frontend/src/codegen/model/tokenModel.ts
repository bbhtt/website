/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { TokenModelState } from "./tokenModelState"
import type { TokenModelToken } from "./tokenModelToken"

export interface TokenModel {
  id: string
  state: TokenModelState
  name: string
  token?: TokenModelToken
  created: string
  changed: string
}
