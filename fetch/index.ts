import type { UseFetchOptions } from 'nuxt/app'
import type { IsEmptyObject } from '@/utils/types'
import { API, type API_LIST } from './list'

const __my_useFetch = <T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) => {
  return useFetch(url, {
    onRequest({ request, options, error }) {
      options.headers.set('Accept', 'application/json, text/plain, */*')
    },
    ...options,
    $fetch: useNuxtApp().$api,
  })
}

const __my_$fetch = $fetch.create({
  baseURL: import.meta.env.NUXT_PUBLIC_API_BASE,
  onRequest({ request, options, error }) {
    const userStore = useUserStore()
    if (userStore.token) {
      options.headers.set('Authorization', `Bearer ${userStore.token}`)
    }
    options.headers.set('Accept', 'application/json, text/plain, */*')
  },
  onResponse({ request, response, error, options }) {
    // do something...
  },
  onResponseError({ request, response, error, options }) {
    // do something...
  },
})

type Opts<K extends keyof API_LIST> = Omit<API_LIST[K], 'response'>
type Res<K extends keyof API_LIST> = API_LIST[K]['response']

export const clientAPI = <K extends keyof API_LIST>(
  pathKey: K,
  ...args: IsEmptyObject<Opts<K>> extends true
    ? [options?: Parameters<typeof $fetch>[1]]
    : [options: Opts<K> & Parameters<typeof $fetch>[1]]
) => {
  const { path, method = 'GET' } = API[pathKey]
  return __my_$fetch<Res<K>>(path, {
    method,
    ...args[0],
  })
}

export const useAPI = <K extends keyof API_LIST>(
  pathKey: K,
  ...args: IsEmptyObject<Opts<K>> extends true
    ? [options?: UseFetchOptions<Res<K>>]
    : [options: Opts<K> & UseFetchOptions<Res<K>>]
) => {
  const { path, method = 'GET' } = API[pathKey]

  return __my_useFetch<Res<K>>(path, {
    method,
    ...args[0],
  })
}
