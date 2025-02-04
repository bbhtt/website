/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import type {
  GetUploadTokensUploadTokensAppIdGetParams,
  HTTPValidationError,
  NewTokenResponse,
  TokensResponse,
  UploadTokenRequest,
} from ".././model"

/**
 * Get all upload tokens for the given app
 * @summary Get Upload Tokens
 */
export const getUploadTokensUploadTokensAppIdGet = (
  appId: string,
  params?: GetUploadTokensUploadTokensAppIdGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<TokensResponse>> => {
  return axios.get(`/upload-tokens/${appId}`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetUploadTokensUploadTokensAppIdGetQueryKey = (
  appId: string,
  params?: GetUploadTokensUploadTokensAppIdGetParams,
) => {
  return [`/upload-tokens/${appId}`, ...(params ? [params] : [])] as const
}

export const getGetUploadTokensUploadTokensAppIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetUploadTokensUploadTokensAppIdGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
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
    getGetUploadTokensUploadTokensAppIdGetQueryKey(appId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>
  > = ({ signal }) =>
    getUploadTokensUploadTokensAppIdGet(appId, params, {
      signal,
      ...axiosOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!appId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetUploadTokensUploadTokensAppIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>
>
export type GetUploadTokensUploadTokensAppIdGetQueryError =
  AxiosError<HTTPValidationError>

export function useGetUploadTokensUploadTokensAppIdGet<
  TData = Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params: undefined | GetUploadTokensUploadTokensAppIdGetParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
          TError,
          Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetUploadTokensUploadTokensAppIdGet<
  TData = Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetUploadTokensUploadTokensAppIdGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
          TError,
          Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetUploadTokensUploadTokensAppIdGet<
  TData = Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetUploadTokensUploadTokensAppIdGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get Upload Tokens
 */

export function useGetUploadTokensUploadTokensAppIdGet<
  TData = Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  appId: string,
  params?: GetUploadTokensUploadTokensAppIdGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUploadTokensUploadTokensAppIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetUploadTokensUploadTokensAppIdGetQueryOptions(
    appId,
    params,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Create Upload Token
 */
export const createUploadTokenUploadTokensAppIdPost = (
  appId: string,
  uploadTokenRequest: UploadTokenRequest,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<NewTokenResponse>> => {
  return axios.post(`/upload-tokens/${appId}`, uploadTokenRequest, options)
}

export const getCreateUploadTokenUploadTokensAppIdPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUploadTokenUploadTokensAppIdPost>>,
    TError,
    { appId: string; data: UploadTokenRequest },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof createUploadTokenUploadTokensAppIdPost>>,
  TError,
  { appId: string; data: UploadTokenRequest },
  TContext
> => {
  const mutationKey = ["createUploadTokenUploadTokensAppIdPost"]
  const { mutation: mutationOptions, axios: axiosOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, axios: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createUploadTokenUploadTokensAppIdPost>>,
    { appId: string; data: UploadTokenRequest }
  > = (props) => {
    const { appId, data } = props ?? {}

    return createUploadTokenUploadTokensAppIdPost(appId, data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateUploadTokenUploadTokensAppIdPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUploadTokenUploadTokensAppIdPost>>
>
export type CreateUploadTokenUploadTokensAppIdPostMutationBody =
  UploadTokenRequest
export type CreateUploadTokenUploadTokensAppIdPostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Create Upload Token
 */
export const useCreateUploadTokenUploadTokensAppIdPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUploadTokenUploadTokensAppIdPost>>,
    TError,
    { appId: string; data: UploadTokenRequest },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof createUploadTokenUploadTokensAppIdPost>>,
  TError,
  { appId: string; data: UploadTokenRequest },
  TContext
> => {
  const mutationOptions =
    getCreateUploadTokenUploadTokensAppIdPostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Revoke Upload Token
 */
export const revokeUploadTokenUploadTokensTokenIdRevokePost = (
  tokenId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.post(`/upload-tokens/${tokenId}/revoke`, undefined, options)
}

export const getRevokeUploadTokenUploadTokensTokenIdRevokePostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof revokeUploadTokenUploadTokensTokenIdRevokePost>
      >,
      TError,
      { tokenId: number },
      TContext
    >
    axios?: AxiosRequestConfig
  }): UseMutationOptions<
    Awaited<ReturnType<typeof revokeUploadTokenUploadTokensTokenIdRevokePost>>,
    TError,
    { tokenId: number },
    TContext
  > => {
    const mutationKey = ["revokeUploadTokenUploadTokensTokenIdRevokePost"]
    const { mutation: mutationOptions, axios: axiosOptions } = options
      ? options.mutation &&
        "mutationKey" in options.mutation &&
        options.mutation.mutationKey
        ? options
        : { ...options, mutation: { ...options.mutation, mutationKey } }
      : { mutation: { mutationKey }, axios: undefined }

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof revokeUploadTokenUploadTokensTokenIdRevokePost>
      >,
      { tokenId: number }
    > = (props) => {
      const { tokenId } = props ?? {}

      return revokeUploadTokenUploadTokensTokenIdRevokePost(
        tokenId,
        axiosOptions,
      )
    }

    return { mutationFn, ...mutationOptions }
  }

export type RevokeUploadTokenUploadTokensTokenIdRevokePostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof revokeUploadTokenUploadTokensTokenIdRevokePost>>
  >

export type RevokeUploadTokenUploadTokensTokenIdRevokePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Revoke Upload Token
 */
export const useRevokeUploadTokenUploadTokensTokenIdRevokePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof revokeUploadTokenUploadTokensTokenIdRevokePost>>,
    TError,
    { tokenId: number },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof revokeUploadTokenUploadTokensTokenIdRevokePost>>,
  TError,
  { tokenId: number },
  TContext
> => {
  const mutationOptions =
    getRevokeUploadTokenUploadTokensTokenIdRevokePostMutationOptions(options)

  return useMutation(mutationOptions)
}
