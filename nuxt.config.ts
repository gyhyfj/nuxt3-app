// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/svg',
      },
    ],
  },
  colorMode: {
    preference: 'light', // or 'dark' or 'system' or 'no-preference'
    fallback: 'light',
    storage: 'cookie', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
})
