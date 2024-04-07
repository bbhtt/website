/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  ArchiveRequest,
  AvailableMethods,
  ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostParams,
  GetAvailableMethodsVerificationAppIdAvailableMethodsGetParams,
  HTTPValidationError,
  LinkResponse,
  SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostParams,
  VerificationStatus,
  VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost200,
  VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostParams,
  WebsiteVerificationResult,
  WebsiteVerificationToken,
} from ".././model"

/**
 * Gets the verification status of the given app.
 * @summary Get Verification Status
 */
export const getVerificationStatusVerificationAppIdStatusGet = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<VerificationStatus>> => {
  return axios.get(`/verification/${appId}/status`, options)
}

export const getGetVerificationStatusVerificationAppIdStatusGetQueryKey = (
  appId: string,
) => {
  return [`/verification/${appId}/status`] as const
}

export const getGetVerificationStatusVerificationAppIdStatusGetQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetVerificationStatusVerificationAppIdStatusGetQueryKey(appId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>>
  > = ({ signal }) =>
    getVerificationStatusVerificationAppIdStatusGet(appId, {
      signal,
      ...axiosOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!appId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetVerificationStatusVerificationAppIdStatusGetQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>>
  >
export type GetVerificationStatusVerificationAppIdStatusGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Verification Status
 */
export const useGetVerificationStatusVerificationAppIdStatusGet = <
  TData = Awaited<
    ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getVerificationStatusVerificationAppIdStatusGet>
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetVerificationStatusVerificationAppIdStatusGetQueryOptions(
      appId,
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Gets the ways an app may be verified.
 * @summary Get Available Methods
 */
export const getAvailableMethodsVerificationAppIdAvailableMethodsGet = (
  appId: string,
  params?: GetAvailableMethodsVerificationAppIdAvailableMethodsGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<AvailableMethods>> => {
  return axios.get(`/verification/${appId}/available-methods`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetAvailableMethodsVerificationAppIdAvailableMethodsGetQueryKey =
  (
    appId: string,
    params?: GetAvailableMethodsVerificationAppIdAvailableMethodsGetParams,
  ) => {
    return [
      `/verification/${appId}/available-methods`,
      ...(params ? [params] : []),
    ] as const
  }

export const getGetAvailableMethodsVerificationAppIdAvailableMethodsGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet>
    >,
    TError = AxiosError<HTTPValidationError>,
  >(
    appId: string,
    params?: GetAvailableMethodsVerificationAppIdAvailableMethodsGetParams,
    options?: {
      query?: Partial<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet
            >
          >,
          TError,
          TData
        >
      >
      axios?: AxiosRequestConfig
    },
  ) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getGetAvailableMethodsVerificationAppIdAvailableMethodsGetQueryKey(
        appId,
        params,
      )

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet
        >
      >
    > = ({ signal }) =>
      getAvailableMethodsVerificationAppIdAvailableMethodsGet(appId, params, {
        signal,
        ...axiosOptions,
      })

    return {
      queryKey,
      queryFn,
      enabled: !!appId,
      ...queryOptions,
    } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type GetAvailableMethodsVerificationAppIdAvailableMethodsGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet>
    >
  >
export type GetAvailableMethodsVerificationAppIdAvailableMethodsGetQueryError =
  AxiosError<HTTPValidationError>

/**
 * @summary Get Available Methods
 */
export const useGetAvailableMethodsVerificationAppIdAvailableMethodsGet = <
  TData = Awaited<
    ReturnType<typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet>
  >,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetAvailableMethodsVerificationAppIdAvailableMethodsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof getAvailableMethodsVerificationAppIdAvailableMethodsGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetAvailableMethodsVerificationAppIdAvailableMethodsGetQueryOptions(
      appId,
      params,
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * If the current account is eligible to verify the given account via SSO, and the app is not already verified by
someone else, marks the app as verified.
 * @summary Verify By Login Provider
 */
export const verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost = (
  appId: string,
  params?: VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostParams,
  options?: AxiosRequestConfig,
): Promise<
  AxiosResponse<VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost200>
> => {
  return axios.post(
    `/verification/${appId}/verify-by-login-provider`,
    undefined,
    {
      ...options,
      params: { ...params, ...options?.params },
    },
  )
}

export const getVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost
        >
      >,
      TError,
      {
        appId: string
        params?: VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<
        typeof verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost
      >
    >,
    TError,
    {
      appId: string
      params?: VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostParams
    },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<
          typeof verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost
        >
      >,
      {
        appId: string
        params?: VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostParams
      }
    > = (props) => {
      const { appId, params } = props ?? {}

      return verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost(
        appId,
        params,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost
      >
    >
  >

export type VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Verify By Login Provider
 */
export const useVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof verifyByLoginProviderVerificationAppIdVerifyByLoginProviderPost
        >
      >,
      TError,
      {
        appId: string
        params?: VerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }) => {
    const mutationOptions =
      getVerifyByLoginProviderVerificationAppIdVerifyByLoginProviderPostMutationOptions(
        options,
      )

    return useMutation(mutationOptions)
  }
/**
 * Returns the URL to request access to the organization so we can verify the user's membership.
 * @summary Request Organization Access Github
 */
export const requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet =
  (options?: AxiosRequestConfig): Promise<AxiosResponse<LinkResponse>> => {
    return axios.get(
      `/verification/request-organization-access/github`,
      options,
    )
  }

export const getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetQueryKey =
  () => {
    return [`/verification/request-organization-access/github`] as const
  }

export const getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<
        typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
      >
    >,
    TError = AxiosError<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  }) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {}

    const queryKey =
      queryOptions?.queryKey ??
      getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetQueryKey()

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<
          typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
        >
      >
    > = ({ signal }) =>
      requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet(
        { signal, ...axiosOptions },
      )

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<
        ReturnType<
          typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
        >
      >,
      TError,
      TData
    > & { queryKey: QueryKey }
  }

export type RequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
      >
    >
  >
export type RequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetQueryError =
  AxiosError<unknown>

/**
 * @summary Request Organization Access Github
 */
export const useRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet =
  <
    TData = Awaited<
      ReturnType<
        typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
      >
    >,
    TError = AxiosError<unknown>,
  >(options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof requestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGet
          >
        >,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  }): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const queryOptions =
      getRequestOrganizationAccessGithubVerificationRequestOrganizationAccessGithubGetQueryOptions(
        options,
      )

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
      queryKey: QueryKey
    }

    query.queryKey = queryOptions.queryKey

    return query
  }

/**
 * Creates a token for the user to verify the app via website.
 * @summary Setup Website Verification
 */
export const setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost =
  (
    appId: string,
    params?: SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostParams,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<WebsiteVerificationToken>> => {
    return axios.post(
      `/verification/${appId}/setup-website-verification`,
      undefined,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }

export const getSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost
        >
      >,
      TError,
      {
        appId: string
        params?: SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<
        typeof setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost
      >
    >,
    TError,
    {
      appId: string
      params?: SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostParams
    },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<
          typeof setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost
        >
      >,
      {
        appId: string
        params?: SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostParams
      }
    > = (props) => {
      const { appId, params } = props ?? {}

      return setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost(
        appId,
        params,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost
      >
    >
  >

export type SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Setup Website Verification
 */
export const useSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof setupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPost
        >
      >,
      TError,
      {
        appId: string
        params?: SetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }) => {
    const mutationOptions =
      getSetupWebsiteVerificationVerificationAppIdSetupWebsiteVerificationPostMutationOptions(
        options,
      )

    return useMutation(mutationOptions)
  }
/**
 * Checks website verification, and if it succeeds, marks the app as verified for the current account.
 * @summary Confirm Website Verification
 */
export const confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost =
  (
    appId: string,
    params?: ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostParams,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<WebsiteVerificationResult>> => {
    return axios.post(
      `/verification/${appId}/confirm-website-verification`,
      undefined,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }

export const getConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost
        >
      >,
      TError,
      {
        appId: string
        params?: ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<
        typeof confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost
      >
    >,
    TError,
    {
      appId: string
      params?: ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostParams
    },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<
          typeof confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost
        >
      >,
      {
        appId: string
        params?: ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostParams
      }
    > = (props) => {
      const { appId, params } = props ?? {}

      return confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost(
        appId,
        params,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost
      >
    >
  >

export type ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Confirm Website Verification
 */
export const useConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof confirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPost
        >
      >,
      TError,
      {
        appId: string
        params?: ConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostParams
      },
      TContext
    >
    axios?: AxiosRequestConfig
  }) => {
    const mutationOptions =
      getConfirmWebsiteVerificationVerificationAppIdConfirmWebsiteVerificationPostMutationOptions(
        options,
      )

    return useMutation(mutationOptions)
  }
/**
 * If the current account has verified the given app, mark it as no longer verified.
 * @summary Unverify
 */
export const unverifyVerificationAppIdUnverifyPost = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/verification/${appId}/unverify`, undefined, options)
}

export const getUnverifyVerificationAppIdUnverifyPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof unverifyVerificationAppIdUnverifyPost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof unverifyVerificationAppIdUnverifyPost>>,
  TError,
  { appId: string },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof unverifyVerificationAppIdUnverifyPost>>,
    { appId: string }
  > = (props) => {
    const { appId } = props ?? {}

    return unverifyVerificationAppIdUnverifyPost(appId, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UnverifyVerificationAppIdUnverifyPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof unverifyVerificationAppIdUnverifyPost>>
>

export type UnverifyVerificationAppIdUnverifyPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Unverify
 */
export const useUnverifyVerificationAppIdUnverifyPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof unverifyVerificationAppIdUnverifyPost>>,
    TError,
    { appId: string },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getUnverifyVerificationAppIdUnverifyPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Switch To Direct Upload
 */
export const switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost = (
  appId: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(
    `/verification/${appId}/switch_to_direct_upload`,
    undefined,
    options,
  )
}

export const getSwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost
        >
      >,
      TError,
      { appId: string },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<
      ReturnType<
        typeof switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost
      >
    >,
    TError,
    { appId: string },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<
          typeof switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost
        >
      >,
      { appId: string }
    > = (props) => {
      const { appId } = props ?? {}

      return switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost(
        appId,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type SwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPostMutationResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost
      >
    >
  >

export type SwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Switch To Direct Upload
 */
export const useSwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPost =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<
          typeof switchToDirectUploadVerificationAppIdSwitchToDirectUploadPost
        >
      >,
      TError,
      { appId: string },
      TContext
    >
    axios?: AxiosRequestConfig
  }) => {
    const mutationOptions =
      getSwitchToDirectUploadVerificationAppIdSwitchToDirectUploadPostMutationOptions(
        options,
      )

    return useMutation(mutationOptions)
  }
/**
 * @summary Archive
 */
export const archiveVerificationAppIdArchivePost = (
  appId: string,
  archiveRequest: ArchiveRequest,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/verification/${appId}/archive`, archiveRequest, options)
}

export const getArchiveVerificationAppIdArchivePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof archiveVerificationAppIdArchivePost>>,
    TError,
    { appId: string; data: ArchiveRequest },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof archiveVerificationAppIdArchivePost>>,
  TError,
  { appId: string; data: ArchiveRequest },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof archiveVerificationAppIdArchivePost>>,
    { appId: string; data: ArchiveRequest }
  > = (props) => {
    const { appId, data } = props ?? {}

    return archiveVerificationAppIdArchivePost(appId, data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type ArchiveVerificationAppIdArchivePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof archiveVerificationAppIdArchivePost>>
>
export type ArchiveVerificationAppIdArchivePostMutationBody = ArchiveRequest
export type ArchiveVerificationAppIdArchivePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Archive
 */
export const useArchiveVerificationAppIdArchivePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof archiveVerificationAppIdArchivePost>>,
    TError,
    { appId: string; data: ArchiveRequest },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const mutationOptions =
    getArchiveVerificationAppIdArchivePostMutationOptions(options)

  return useMutation(mutationOptions)
}