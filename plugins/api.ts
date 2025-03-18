export default defineNuxtPlugin(nuxtApp => {
  const userStore = useUserStore()

  const api = $fetch.create({
    baseURL: import.meta.env.NUXT_PUBLIC_API_BASE,
    onRequest({ request, options, error }) {
      if (userStore.token) {
        options.headers.set('Authorization', `Bearer ${userStore.token}`)
      }
      options.headers.set('Accept', 'application/json, text/plain, */*')
    },
    onResponse({ request, response, options, error }) {
      // response._data = new myBusinessResponse(response._data)
    },
    async onResponseError({ request, response, options, error }) {
      // if (response.status === 401) {
      //   await nuxtApp.runWithContext(() => navigateTo('/login'))
      // }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
