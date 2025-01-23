/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type {
  AppPickRecommendationsResponse,
  FailedByGuideline,
  QualityModerationDashboardResponse,
  QualityModerationResponse,
  QualityModerationStatus,
  SimpleQualityModerationResponse,
} from ".././model"

export const getGetQualityModerationStatusQualityModerationStatusGetResponseMock =
  (
    overrideResponse: Partial<QualityModerationDashboardResponse> = {},
  ): QualityModerationDashboardResponse => ({
    apps: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      id: faker.string.alpha(20),
      quality_moderation_status: {
        passes: faker.datatype.boolean(),
        unrated: faker.number.int({ min: undefined, max: undefined }),
        passed: faker.number.int({ min: undefined, max: undefined }),
        not_passed: faker.number.int({ min: undefined, max: undefined }),
        last_updated: faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          null,
        ]),
        review_requested_at: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            `${faker.date.past().toISOString().split(".")[0]}Z`,
            null,
          ]),
          undefined,
        ]),
      },
      appstream: faker.helpers.arrayElement([
        faker.helpers.arrayElement([{}, null]),
        undefined,
      ]),
      installs_last_7_days: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          null,
        ]),
        undefined,
      ]),
    })),
    pagination: {
      page: faker.number.int({ min: undefined, max: undefined }),
      page_size: faker.number.int({ min: undefined, max: undefined }),
      total: faker.number.int({ min: undefined, max: undefined }),
      total_pages: faker.number.int({ min: undefined, max: undefined }),
    },
    ...overrideResponse,
  })

export const getGetPassingQualityAppsQualityModerationPassingAppsGetResponseMock =
  (
    overrideResponse: Partial<SimpleQualityModerationResponse> = {},
  ): SimpleQualityModerationResponse => ({
    apps: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha(20)),
    pagination: {
      page: faker.number.int({ min: undefined, max: undefined }),
      page_size: faker.number.int({ min: undefined, max: undefined }),
      total: faker.number.int({ min: undefined, max: undefined }),
      total_pages: faker.number.int({ min: undefined, max: undefined }),
    },
    ...overrideResponse,
  })

export const getGetAppPickRecommendationsQualityModerationAppPickRecommendationsGetResponseMock =
  (
    overrideResponse: Partial<AppPickRecommendationsResponse> = {},
  ): AppPickRecommendationsResponse => ({
    recommendations: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      app_id: faker.string.alpha(20),
      numberOfTimesAppOfTheWeek: faker.number.int({
        min: undefined,
        max: undefined,
      }),
      lastTimeAppOfTheWeek: faker.helpers.arrayElement([
        faker.date.past().toISOString().split("T")[0],
        null,
      ]),
      numberOfTimesAppOfTheDay: faker.number.int({
        min: undefined,
        max: undefined,
      }),
      lastTimeAppOfTheDay: faker.helpers.arrayElement([
        faker.date.past().toISOString().split("T")[0],
        null,
      ]),
    })),
    ...overrideResponse,
  })

export const getGetQualityModerationStatsQualityModerationFailedByGuidelineGetResponseMock =
  (): FailedByGuideline[] =>
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      guideline_id: faker.string.alpha(20),
      not_passed: faker.number.int({ min: undefined, max: undefined }),
    }))

export const getGetQualityModerationForAppQualityModerationAppIdGetResponseMock =
  (
    overrideResponse: Partial<QualityModerationResponse> = {},
  ): QualityModerationResponse => ({
    guidelines: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      guideline_id: faker.string.alpha(20),
      guideline: {
        id: faker.string.alpha(20),
        url: faker.string.alpha(20),
        needed_to_pass_since: `${faker.date.past().toISOString().split(".")[0]}Z`,
        category: faker.string.alpha(20),
        read_only: faker.helpers.arrayElement([
          faker.datatype.boolean(),
          undefined,
        ]),
      },
      app_id: faker.string.alpha(20),
      updated_at: `${faker.date.past().toISOString().split(".")[0]}Z`,
      updated_by: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        null,
      ]),
      passed: faker.helpers.arrayElement([faker.datatype.boolean(), null]),
      comment: faker.helpers.arrayElement([faker.string.alpha(20), null]),
      needed_to_pass_since: `${faker.date.past().toISOString().split(".")[0]}Z`,
    })),
    is_fullscreen_app: faker.datatype.boolean(),
    review_requested_at: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        null,
      ]),
      undefined,
    ]),
    ...overrideResponse,
  })

export const getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetResponseMock =
  (
    overrideResponse: Partial<QualityModerationStatus> = {},
  ): QualityModerationStatus => ({
    passes: faker.datatype.boolean(),
    unrated: faker.number.int({ min: undefined, max: undefined }),
    passed: faker.number.int({ min: undefined, max: undefined }),
    not_passed: faker.number.int({ min: undefined, max: undefined }),
    last_updated: faker.helpers.arrayElement([
      `${faker.date.past().toISOString().split(".")[0]}Z`,
      null,
    ]),
    review_requested_at: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        null,
      ]),
      undefined,
    ]),
    ...overrideResponse,
  })

export const getGetQualityModerationStatusQualityModerationStatusGetMockHandler =
  (
    overrideResponse?:
      | QualityModerationDashboardResponse
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) =>
          | Promise<QualityModerationDashboardResponse>
          | QualityModerationDashboardResponse),
  ) => {
    return http.get("*/quality-moderation/status", async (info) => {
      await delay(1000)

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === "function"
              ? await overrideResponse(info)
              : overrideResponse
            : getGetQualityModerationStatusQualityModerationStatusGetResponseMock(),
        ),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
    })
  }

export const getGetPassingQualityAppsQualityModerationPassingAppsGetMockHandler =
  (
    overrideResponse?:
      | SimpleQualityModerationResponse
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) =>
          | Promise<SimpleQualityModerationResponse>
          | SimpleQualityModerationResponse),
  ) => {
    return http.get("*/quality-moderation/passing-apps", async (info) => {
      await delay(1000)

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === "function"
              ? await overrideResponse(info)
              : overrideResponse
            : getGetPassingQualityAppsQualityModerationPassingAppsGetResponseMock(),
        ),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
    })
  }

export const getGetAppPickRecommendationsQualityModerationAppPickRecommendationsGetMockHandler =
  (
    overrideResponse?:
      | AppPickRecommendationsResponse
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) =>
          | Promise<AppPickRecommendationsResponse>
          | AppPickRecommendationsResponse),
  ) => {
    return http.get(
      "*/quality-moderation/app-pick-recommendations",
      async (info) => {
        await delay(1000)

        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? await overrideResponse(info)
                : overrideResponse
              : getGetAppPickRecommendationsQualityModerationAppPickRecommendationsGetResponseMock(),
          ),
          { status: 200, headers: { "Content-Type": "application/json" } },
        )
      },
    )
  }

export const getGetQualityModerationStatsQualityModerationFailedByGuidelineGetMockHandler =
  (
    overrideResponse?:
      | FailedByGuideline[]
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) => Promise<FailedByGuideline[]> | FailedByGuideline[]),
  ) => {
    return http.get(
      "*/quality-moderation/failed-by-guideline",
      async (info) => {
        await delay(1000)

        return new HttpResponse(
          JSON.stringify(
            overrideResponse !== undefined
              ? typeof overrideResponse === "function"
                ? await overrideResponse(info)
                : overrideResponse
              : getGetQualityModerationStatsQualityModerationFailedByGuidelineGetResponseMock(),
          ),
          { status: 200, headers: { "Content-Type": "application/json" } },
        )
      },
    )
  }

export const getGetQualityModerationForAppQualityModerationAppIdGetMockHandler =
  (
    overrideResponse?:
      | QualityModerationResponse
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) => Promise<QualityModerationResponse> | QualityModerationResponse),
  ) => {
    return http.get("*/quality-moderation/:appId", async (info) => {
      await delay(1000)

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === "function"
              ? await overrideResponse(info)
              : overrideResponse
            : getGetQualityModerationForAppQualityModerationAppIdGetResponseMock(),
        ),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
    })
  }

export const getSetQualityModerationForAppQualityModerationAppIdPostMockHandler =
  (
    overrideResponse?:
      | unknown
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => Promise<unknown> | unknown),
  ) => {
    return http.post("*/quality-moderation/:appId", async (info) => {
      await delay(1000)
      if (typeof overrideResponse === "function") {
        await overrideResponse(info)
      }
      return new HttpResponse(null, { status: 200 })
    })
  }

export const getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetMockHandler =
  (
    overrideResponse?:
      | QualityModerationStatus
      | ((
          info: Parameters<Parameters<typeof http.get>[1]>[0],
        ) => Promise<QualityModerationStatus> | QualityModerationStatus),
  ) => {
    return http.get("*/quality-moderation/:appId/status", async (info) => {
      await delay(1000)

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === "function"
              ? await overrideResponse(info)
              : overrideResponse
            : getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetResponseMock(),
        ),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
    })
  }

export const getRequestReviewForAppQualityModerationAppIdRequestReviewPostMockHandler =
  (
    overrideResponse?:
      | unknown
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => Promise<unknown> | unknown),
  ) => {
    return http.post(
      "*/quality-moderation/:appId/request-review",
      async (info) => {
        await delay(1000)
        if (typeof overrideResponse === "function") {
          await overrideResponse(info)
        }
        return new HttpResponse(null, { status: 200 })
      },
    )
  }

export const getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMockHandler =
  (
    overrideResponse?:
      | unknown
      | ((
          info: Parameters<Parameters<typeof http.delete>[1]>[0],
        ) => Promise<unknown> | unknown),
  ) => {
    return http.delete(
      "*/quality-moderation/:appId/request-review",
      async (info) => {
        await delay(1000)
        if (typeof overrideResponse === "function") {
          await overrideResponse(info)
        }
        return new HttpResponse(null, { status: 200 })
      },
    )
  }

export const getSetFullscreenAppQualityModerationAppIdFullscreenPostMockHandler =
  (
    overrideResponse?:
      | unknown
      | ((
          info: Parameters<Parameters<typeof http.post>[1]>[0],
        ) => Promise<unknown> | unknown),
  ) => {
    return http.post("*/quality-moderation/:appId/fullscreen", async (info) => {
      await delay(1000)
      if (typeof overrideResponse === "function") {
        await overrideResponse(info)
      }
      return new HttpResponse(null, { status: 200 })
    })
  }
export const getQualityModerationMock = () => [
  getGetQualityModerationStatusQualityModerationStatusGetMockHandler(),
  getGetPassingQualityAppsQualityModerationPassingAppsGetMockHandler(),
  getGetAppPickRecommendationsQualityModerationAppPickRecommendationsGetMockHandler(),
  getGetQualityModerationStatsQualityModerationFailedByGuidelineGetMockHandler(),
  getGetQualityModerationForAppQualityModerationAppIdGetMockHandler(),
  getSetQualityModerationForAppQualityModerationAppIdPostMockHandler(),
  getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetMockHandler(),
  getRequestReviewForAppQualityModerationAppIdRequestReviewPostMockHandler(),
  getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMockHandler(),
  getSetFullscreenAppQualityModerationAppIdFullscreenPostMockHandler(),
]
