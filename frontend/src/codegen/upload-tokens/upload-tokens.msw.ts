/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type { NewTokenResponse, TokensResponse } from ".././model"

export const getGetUploadTokensUploadTokensAppIdGetResponseMock = (
  overrideResponse: any = {},
): TokensResponse => ({
  is_direct_upload_app: faker.datatype.boolean(),
  tokens: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    app_id: faker.word.sample(),
    comment: faker.word.sample(),
    expires_at: faker.number.int({ min: undefined, max: undefined }),
    id: faker.number.int({ min: undefined, max: undefined }),
    issued_at: faker.number.int({ min: undefined, max: undefined }),
    issued_to: faker.helpers.arrayElement([faker.word.sample(), {}]),
    repos: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    revoked: faker.datatype.boolean(),
    scopes: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    ...overrideResponse,
  })),
  ...overrideResponse,
})

export const getCreateUploadTokenUploadTokensAppIdPostResponseMock = (
  overrideResponse: any = {},
): NewTokenResponse => ({
  details: {
    app_id: faker.word.sample(),
    comment: faker.word.sample(),
    expires_at: faker.number.int({ min: undefined, max: undefined }),
    id: faker.number.int({ min: undefined, max: undefined }),
    issued_at: faker.number.int({ min: undefined, max: undefined }),
    issued_to: faker.helpers.arrayElement([faker.word.sample(), {}]),
    repos: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    revoked: faker.datatype.boolean(),
    scopes: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    ...overrideResponse,
  },
  token: faker.word.sample(),
  ...overrideResponse,
})

export const getGetUploadTokensUploadTokensAppIdGetMockHandler = (
  overrideResponse?: TokensResponse,
) => {
  return http.get("*/upload-tokens/:appId", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetUploadTokensUploadTokensAppIdGetResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getCreateUploadTokenUploadTokensAppIdPostMockHandler = (
  overrideResponse?: NewTokenResponse,
) => {
  return http.post("*/upload-tokens/:appId", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getCreateUploadTokenUploadTokensAppIdPostResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  })
}

export const getRevokeUploadTokenUploadTokensTokenIdRevokePostMockHandler =
  () => {
    return http.post("*/upload-tokens/:tokenId/revoke", async () => {
      await delay(1000)
      return new HttpResponse(null, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    })
  }
export const getUploadTokensMock = () => [
  getGetUploadTokensUploadTokensAppIdGetMockHandler(),
  getCreateUploadTokenUploadTokensAppIdPostMockHandler(),
  getRevokeUploadTokenUploadTokensTokenIdRevokePostMockHandler(),
]