import type { State } from './userStore.d'

export const useUserStore = defineStore('USER_STORE', {
  state: (): State => ({
    token: '',
  }),
  getters: {},
  actions: {},
  persist: true,
})
