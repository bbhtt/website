/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type { AppOfTheDay, AppsOfTheWeek } from ".././model"

export const getGetAppOfTheDayAppPicksAppOfTheDayDateGetResponseMock = (
  overrideResponse: Partial<AppOfTheDay> = {},
): AppOfTheDay => ({
  app_id: faker.string.alpha(20),
  day: faker.date.past().toISOString().split("T")[0],
  ...overrideResponse,
})

export const getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetResponseMock = (
  overrideResponse: Partial<AppsOfTheWeek> = {},
): AppsOfTheWeek => ({
  apps: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    app_id: faker.string.alpha(20),
    isFullscreen: faker.datatype.boolean(),
    position: faker.number.int({ min: undefined, max: undefined }),
  })),
  ...overrideResponse,
})

export const getGetAppOfTheDayAppPicksAppOfTheDayDateGetMockHandler = (
  overrideResponse?:
    | AppOfTheDay
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<AppOfTheDay> | AppOfTheDay),
) => {
  return http.get("*/app-picks/app-of-the-day/:date", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetAppOfTheDayAppPicksAppOfTheDayDateGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetMockHandler = (
  overrideResponse?:
    | AppsOfTheWeek
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<AppsOfTheWeek> | AppsOfTheWeek),
) => {
  return http.get("*/app-picks/apps-of-the-week/:date", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getSetAppOfTheWeekAppPicksAppOfTheWeekPostMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.post("*/app-picks/app-of-the-week", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 200 })
  })
}

export const getSetAppOfTheDayAppPicksAppOfTheDayPostMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.post("*/app-picks/app-of-the-day", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 200 })
  })
}
export const getAppPicksMock = () => [
  getGetAppOfTheDayAppPicksAppOfTheDayDateGetMockHandler(),
  getGetAppOfTheWeekAppPicksAppsOfTheWeekDateGetMockHandler(),
  getSetAppOfTheWeekAppPicksAppOfTheWeekPostMockHandler(),
  getSetAppOfTheDayAppPicksAppOfTheDayPostMockHandler(),
]
