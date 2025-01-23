/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import { LoginProvider, VerificationMethod } from ".././model"
import type {
  CheckPurchasesResponseSuccess,
  GenerateUpdateTokenResponse,
  GetDownloadTokenResponse,
  StorefrontInfo,
} from ".././model"

export const getGetStorefrontInfoPurchasesStorefrontInfoGetResponseMock = (
  overrideResponse: Partial<StorefrontInfo> = {},
): StorefrontInfo => ({
  verification: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      {
        verified: faker.datatype.boolean(),
        timestamp: faker.helpers.arrayElement([
          faker.helpers.arrayElement([faker.string.alpha(20), null]),
          undefined,
        ]),
        method: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            faker.helpers.arrayElement(Object.values(VerificationMethod)),
            null,
          ]),
          undefined,
        ]),
        website: faker.helpers.arrayElement([
          faker.helpers.arrayElement([faker.string.alpha(20), null]),
          undefined,
        ]),
        login_provider: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            faker.helpers.arrayElement(Object.values(LoginProvider)),
            null,
          ]),
          undefined,
        ]),
        login_name: faker.helpers.arrayElement([
          faker.helpers.arrayElement([faker.string.alpha(20), null]),
          undefined,
        ]),
        login_is_organization: faker.helpers.arrayElement([
          faker.helpers.arrayElement([faker.datatype.boolean(), null]),
          undefined,
        ]),
        detail: faker.helpers.arrayElement([
          faker.helpers.arrayElement([faker.string.alpha(20), null]),
          undefined,
        ]),
      },
      null,
    ]),
    undefined,
  ]),
  pricing: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      {
        recommended_donation: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            faker.number.int({ min: undefined, max: undefined }),
            null,
          ]),
          undefined,
        ]),
        minimum_payment: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            faker.number.int({ min: undefined, max: undefined }),
            null,
          ]),
          undefined,
        ]),
      },
      null,
    ]),
    undefined,
  ]),
  is_free_software: faker.helpers.arrayElement([
    faker.datatype.boolean(),
    undefined,
  ]),
  ...overrideResponse,
})

export const getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetResponseMock =
  (): boolean => faker.datatype.boolean()

export const getGetUpdateTokenPurchasesGenerateUpdateTokenPostResponseMock = (
  overrideResponse: Partial<GenerateUpdateTokenResponse> = {},
): GenerateUpdateTokenResponse => ({
  token: faker.string.alpha(20),
  ...overrideResponse,
})

export const getCheckPurchasesPurchasesCheckPurchasesPostResponseMock = (
  overrideResponse: Partial<CheckPurchasesResponseSuccess> = {},
): CheckPurchasesResponseSuccess => ({
  status: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  ...overrideResponse,
})

export const getGetDownloadTokenPurchasesGenerateDownloadTokenPostResponseMock =
  (
    overrideResponse: Partial<GetDownloadTokenResponse> = {},
  ): GetDownloadTokenResponse => ({
    token: faker.string.alpha(20),
    update_token: faker.string.alpha(20),
    ...overrideResponse,
  })

export const getGetStorefrontInfoPurchasesStorefrontInfoGetMockHandler = (
  overrideResponse?:
    | StorefrontInfo
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<StorefrontInfo> | StorefrontInfo),
) => {
  return http.get("*/purchases/storefront-info", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetStorefrontInfoPurchasesStorefrontInfoGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetMockHandler =
  (
    overrideResponse?:
      | boolean
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) => Promise<boolean> | boolean),
  ) => {
    return http.get(
      "*/purchases/storefront-info/is-free-software",
      async (info) => {
        await delay(1000)

        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? await overrideResponse(info)
                : overrideResponse
              : getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetResponseMock(),
          ),
          { status: 200, headers: { "Content-Type": "application/json" } },
        )
      },
    )
  }

export const getGetUpdateTokenPurchasesGenerateUpdateTokenPostMockHandler = (
  overrideResponse?:
    | GenerateUpdateTokenResponse
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<GenerateUpdateTokenResponse> | GenerateUpdateTokenResponse),
) => {
  return http.post("*/purchases/generate-update-token", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetUpdateTokenPurchasesGenerateUpdateTokenPostResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getCheckPurchasesPurchasesCheckPurchasesPostMockHandler = (
  overrideResponse?:
    | CheckPurchasesResponseSuccess
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) =>
        | Promise<CheckPurchasesResponseSuccess>
        | CheckPurchasesResponseSuccess),
) => {
  return http.post("*/purchases/check-purchases", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getCheckPurchasesPurchasesCheckPurchasesPostResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getGetDownloadTokenPurchasesGenerateDownloadTokenPostMockHandler =
  (
    overrideResponse?:
      | GetDownloadTokenResponse
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => Promise<GetDownloadTokenResponse> | GetDownloadTokenResponse),
  ) => {
    return http.post("*/purchases/generate-download-token", async (info) => {
      await delay(1000)

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === "function"
              ? await overrideResponse(info)
              : overrideResponse
            : getGetDownloadTokenPurchasesGenerateDownloadTokenPostResponseMock(),
        ),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
    })
  }
export const getPurchaseMock = () => [
  getGetStorefrontInfoPurchasesStorefrontInfoGetMockHandler(),
  getGetIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGetMockHandler(),
  getGetUpdateTokenPurchasesGenerateUpdateTokenPostMockHandler(),
  getCheckPurchasesPurchasesCheckPurchasesPostMockHandler(),
  getGetDownloadTokenPurchasesGenerateDownloadTokenPostMockHandler(),
]
