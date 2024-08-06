// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/device',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/svg',
      },
    ],
  },
})
