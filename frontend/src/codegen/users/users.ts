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
  AddUserRoleUsersUserIdRolePostParams,
  DeleteUserRoleUsersUserIdRoleDeleteParams,
  FlathubUsersResult,
  HTTPValidationError,
  RoleName,
  UserResult,
  UsersUsersGetParams,
} from ".././model"

/**
 * Return a list of all known users
 * @summary Users
 */
export const usersUsersGet = (
  params?: UsersUsersGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<FlathubUsersResult>> => {
  return axios.get(`/users`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getUsersUsersGetQueryKey = (params?: UsersUsersGetParams) => {
  return [`/users`, ...(params ? [params] : [])] as const
}

export const getUsersUsersGetQueryOptions = <
  TData = Awaited<ReturnType<typeof usersUsersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: UsersUsersGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersUsersGet>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getUsersUsersGetQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersUsersGet>>> = ({
    signal,
  }) => usersUsersGet(params, { signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersUsersGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type UsersUsersGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersUsersGet>>
>
export type UsersUsersGetQueryError = AxiosError<HTTPValidationError>

export function useUsersUsersGet<
  TData = Awaited<ReturnType<typeof usersUsersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params: undefined | UsersUsersGetParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersUsersGet>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersUsersGet>>,
          TError,
          Awaited<ReturnType<typeof usersUsersGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useUsersUsersGet<
  TData = Awaited<ReturnType<typeof usersUsersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: UsersUsersGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersUsersGet>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersUsersGet>>,
          TError,
          Awaited<ReturnType<typeof usersUsersGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useUsersUsersGet<
  TData = Awaited<ReturnType<typeof usersUsersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: UsersUsersGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersUsersGet>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Users
 */

export function useUsersUsersGet<
  TData = Awaited<ReturnType<typeof usersUsersGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: UsersUsersGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersUsersGet>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getUsersUsersGetQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Return a list of all known role names
 * @summary Roles
 */
export const rolesUsersRolesGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<string[]>> => {
  return axios.get(`/users/roles`, options)
}

export const getRolesUsersRolesGetQueryKey = () => {
  return [`/users/roles`] as const
}

export const getRolesUsersRolesGetQueryOptions = <
  TData = Awaited<ReturnType<typeof rolesUsersRolesGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof rolesUsersRolesGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getRolesUsersRolesGetQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof rolesUsersRolesGet>>
  > = ({ signal }) => rolesUsersRolesGet({ signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof rolesUsersRolesGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type RolesUsersRolesGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof rolesUsersRolesGet>>
>
export type RolesUsersRolesGetQueryError = AxiosError<unknown>

export function useRolesUsersRolesGet<
  TData = Awaited<ReturnType<typeof rolesUsersRolesGet>>,
  TError = AxiosError<unknown>,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof rolesUsersRolesGet>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof rolesUsersRolesGet>>,
        TError,
        Awaited<ReturnType<typeof rolesUsersRolesGet>>
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useRolesUsersRolesGet<
  TData = Awaited<ReturnType<typeof rolesUsersRolesGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof rolesUsersRolesGet>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof rolesUsersRolesGet>>,
        TError,
        Awaited<ReturnType<typeof rolesUsersRolesGet>>
      >,
      "initialData"
    >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useRolesUsersRolesGet<
  TData = Awaited<ReturnType<typeof rolesUsersRolesGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof rolesUsersRolesGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Roles
 */

export function useRolesUsersRolesGet<
  TData = Awaited<ReturnType<typeof rolesUsersRolesGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof rolesUsersRolesGet>>,
      TError,
      TData
    >
  >
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getRolesUsersRolesGetQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Return the current user
 * @summary User
 */
export const userUsersUserIdGet = (
  userId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<UserResult>> => {
  return axios.get(`/users/${userId}`, options)
}

export const getUserUsersUserIdGetQueryKey = (userId: number) => {
  return [`/users/${userId}`] as const
}

export const getUserUsersUserIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof userUsersUserIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  userId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof userUsersUserIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getUserUsersUserIdGetQueryKey(userId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof userUsersUserIdGet>>
  > = ({ signal }) => userUsersUserIdGet(userId, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!userId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof userUsersUserIdGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type UserUsersUserIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof userUsersUserIdGet>>
>
export type UserUsersUserIdGetQueryError = AxiosError<HTTPValidationError>

export function useUserUsersUserIdGet<
  TData = Awaited<ReturnType<typeof userUsersUserIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  userId: number,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof userUsersUserIdGet>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof userUsersUserIdGet>>,
          TError,
          Awaited<ReturnType<typeof userUsersUserIdGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useUserUsersUserIdGet<
  TData = Awaited<ReturnType<typeof userUsersUserIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  userId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof userUsersUserIdGet>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof userUsersUserIdGet>>,
          TError,
          Awaited<ReturnType<typeof userUsersUserIdGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useUserUsersUserIdGet<
  TData = Awaited<ReturnType<typeof userUsersUserIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  userId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof userUsersUserIdGet>>,
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
 * @summary User
 */

export function useUserUsersUserIdGet<
  TData = Awaited<ReturnType<typeof userUsersUserIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  userId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof userUsersUserIdGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getUserUsersUserIdGetQueryOptions(userId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Add a role to a user
 * @summary Add User Role
 */
export const addUserRoleUsersUserIdRolePost = (
  userId: number,
  params: AddUserRoleUsersUserIdRolePostParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<UserResult>> => {
  return axios.post(`/users/${userId}/role`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getAddUserRoleUsersUserIdRolePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addUserRoleUsersUserIdRolePost>>,
    TError,
    { userId: number; params: AddUserRoleUsersUserIdRolePostParams },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof addUserRoleUsersUserIdRolePost>>,
  TError,
  { userId: number; params: AddUserRoleUsersUserIdRolePostParams },
  TContext
> => {
  const mutationKey = ["addUserRoleUsersUserIdRolePost"]
  const { mutation: mutationOptions, axios: axiosOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, axios: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addUserRoleUsersUserIdRolePost>>,
    { userId: number; params: AddUserRoleUsersUserIdRolePostParams }
  > = (props) => {
    const { userId, params } = props ?? {}

    return addUserRoleUsersUserIdRolePost(userId, params, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddUserRoleUsersUserIdRolePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof addUserRoleUsersUserIdRolePost>>
>

export type AddUserRoleUsersUserIdRolePostMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Add User Role
 */
export const useAddUserRoleUsersUserIdRolePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addUserRoleUsersUserIdRolePost>>,
    TError,
    { userId: number; params: AddUserRoleUsersUserIdRolePostParams },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof addUserRoleUsersUserIdRolePost>>,
  TError,
  { userId: number; params: AddUserRoleUsersUserIdRolePostParams },
  TContext
> => {
  const mutationOptions =
    getAddUserRoleUsersUserIdRolePostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Remove a role from a user
 * @summary Delete User Role
 */
export const deleteUserRoleUsersUserIdRoleDelete = (
  userId: number,
  params: DeleteUserRoleUsersUserIdRoleDeleteParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<UserResult>> => {
  return axios.delete(`/users/${userId}/role`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getDeleteUserRoleUsersUserIdRoleDeleteMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteUserRoleUsersUserIdRoleDelete>>,
    TError,
    { userId: number; params: DeleteUserRoleUsersUserIdRoleDeleteParams },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteUserRoleUsersUserIdRoleDelete>>,
  TError,
  { userId: number; params: DeleteUserRoleUsersUserIdRoleDeleteParams },
  TContext
> => {
  const mutationKey = ["deleteUserRoleUsersUserIdRoleDelete"]
  const { mutation: mutationOptions, axios: axiosOptions } = options
    ? options.mutation &&
      "mutationKey" in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, axios: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteUserRoleUsersUserIdRoleDelete>>,
    { userId: number; params: DeleteUserRoleUsersUserIdRoleDeleteParams }
  > = (props) => {
    const { userId, params } = props ?? {}

    return deleteUserRoleUsersUserIdRoleDelete(userId, params, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteUserRoleUsersUserIdRoleDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteUserRoleUsersUserIdRoleDelete>>
>

export type DeleteUserRoleUsersUserIdRoleDeleteMutationError =
  AxiosError<HTTPValidationError>

/**
 * @summary Delete User Role
 */
export const useDeleteUserRoleUsersUserIdRoleDelete = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteUserRoleUsersUserIdRoleDelete>>,
    TError,
    { userId: number; params: DeleteUserRoleUsersUserIdRoleDeleteParams },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteUserRoleUsersUserIdRoleDelete>>,
  TError,
  { userId: number; params: DeleteUserRoleUsersUserIdRoleDeleteParams },
  TContext
> => {
  const mutationOptions =
    getDeleteUserRoleUsersUserIdRoleDeleteMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Return all users with a specific role
 * @summary Role Users
 */
export const roleUsersUsersRolesRoleNameGet = (
  roleName: RoleName,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<UserResult[]>> => {
  return axios.get(`/users/roles/${roleName}`, options)
}

export const getRoleUsersUsersRolesRoleNameGetQueryKey = (
  roleName: RoleName,
) => {
  return [`/users/roles/${roleName}`] as const
}

export const getRoleUsersUsersRolesRoleNameGetQueryOptions = <
  TData = Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  roleName: RoleName,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
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
    getRoleUsersUsersRolesRoleNameGetQueryKey(roleName)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>
  > = ({ signal }) =>
    roleUsersUsersRolesRoleNameGet(roleName, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: !!roleName,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type RoleUsersUsersRolesRoleNameGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>
>
export type RoleUsersUsersRolesRoleNameGetQueryError =
  AxiosError<HTTPValidationError>

export function useRoleUsersUsersRolesRoleNameGet<
  TData = Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  roleName: RoleName,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
          TError,
          Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useRoleUsersUsersRolesRoleNameGet<
  TData = Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  roleName: RoleName,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
          TError,
          Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>
        >,
        "initialData"
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useRoleUsersUsersRolesRoleNameGet<
  TData = Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  roleName: RoleName,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
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
 * @summary Role Users
 */

export function useRoleUsersUsersRolesRoleNameGet<
  TData = Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  roleName: RoleName,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof roleUsersUsersRolesRoleNameGet>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getRoleUsersUsersRolesRoleNameGetQueryOptions(
    roleName,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
