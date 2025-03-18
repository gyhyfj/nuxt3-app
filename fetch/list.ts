import type { ValidateAPIList, APIS } from './index.d'
import type { P1Res } from './list.d'

export type API_LIST = ValidateAPIList<{
  P1: {
    response: P1Res
  }
  P2: {
    response: boolean
    params: { flag: boolean }
  }
}>

export const API: APIS<API_LIST> = {
  P1: { path: '/hello/1' },
  P2: { path: '/hello/2', method: 'POST' },
}
