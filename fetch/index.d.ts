import type { UseFetchOptions } from 'nuxt/app'

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'

export type ValidateAPIList<
  T extends Record<
    string,
    UseFetchOptions<T[keyof T]['response']> & {
      response: unknown
    }
  >,
> = T

export type APIS<L extends Record<string, any>> = Record<
  keyof L,
  {
    path: string
    method?: HTTPMethod
  }
>
