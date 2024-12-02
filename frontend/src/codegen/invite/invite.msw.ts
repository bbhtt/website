/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type { DevelopersResponse, InviteStatus } from ".././model"

export const getGetInviteStatusInvitesAppIdGetResponseMock = (
  overrideResponse: Partial<InviteStatus> = {},
): InviteStatus => ({
  is_direct_upload_app: faker.helpers.arrayElement([
    faker.datatype.boolean(),
    undefined,
  ]),
  is_pending: faker.datatype.boolean(),
  ...overrideResponse,
})

export const getGetDevelopersInvitesAppIdDevelopersGetResponseMock = (
  overrideResponse: Partial<DevelopersResponse> = {},
): DevelopersResponse => ({
  developers: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.number.int({ min: undefined, max: undefined }),
    is_primary: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.datatype.boolean(), null]),
      undefined,
    ]),
    is_self: faker.datatype.boolean(),
    name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
  })),
  invites: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.number.int({ min: undefined, max: undefined }),
    is_primary: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.datatype.boolean(), null]),
      undefined,
    ]),
    is_self: faker.datatype.boolean(),
    name: faker.helpers.arrayElement([faker.string.alpha(20), null]),
  })),
  ...overrideResponse,
})

export const getGetInviteStatusInvitesAppIdGetMockHandler = (
  overrideResponse?:
    | InviteStatus
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<InviteStatus> | InviteStatus),
) => {
  return http.get("*/invites/:appId", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetInviteStatusInvitesAppIdGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getInviteDeveloperInvitesAppIdInvitePostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/invites/:appId/invite", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}

export const getAcceptInviteInvitesAppIdAcceptPostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/invites/:appId/accept", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}

export const getDeclineInviteInvitesAppIdDeclinePostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/invites/:appId/decline", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}

export const getLeaveTeamInvitesAppIdLeavePostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/invites/:appId/leave", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}

export const getGetDevelopersInvitesAppIdDevelopersGetMockHandler = (
  overrideResponse?:
    | DevelopersResponse
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<DevelopersResponse> | DevelopersResponse),
) => {
  return http.get("*/invites/:appId/developers", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetDevelopersInvitesAppIdDevelopersGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getRemoveDeveloperInvitesAppIdRemoveDeveloperPostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/invites/:appId/remove-developer", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}

export const getRevokeInviteInvitesAppIdRevokePostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/invites/:appId/revoke", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}
export const getInviteMock = () => [
  getGetInviteStatusInvitesAppIdGetMockHandler(),
  getInviteDeveloperInvitesAppIdInvitePostMockHandler(),
  getAcceptInviteInvitesAppIdAcceptPostMockHandler(),
  getDeclineInviteInvitesAppIdDeclinePostMockHandler(),
  getLeaveTeamInvitesAppIdLeavePostMockHandler(),
  getGetDevelopersInvitesAppIdDevelopersGetMockHandler(),
  getRemoveDeveloperInvitesAppIdRemoveDeveloperPostMockHandler(),
  getRevokeInviteInvitesAppIdRevokePostMockHandler(),
]
