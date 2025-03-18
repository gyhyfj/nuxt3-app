export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
  ],

  //#region modules
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icon/svg',
      },
    ],
  },
  colorMode: {
    preference: 'light', // or 'dark' or 'system' or 'no-preference'
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/shadcn',
  },
  //#endregion modules

  //#region website
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/webp', href: '/favicon.webp' }],
      script: [],
      htmlAttrs: { lang: 'en' },
    },
  },
  //#endregion website

  //#region framework
  imports: {
    dirs: ['./state', './fetch'],
  },
  css: ['./assets/css/global.css'],
  vite: {
    envPrefix: 'NUXT_PUBLIC_',
  },
  nitro: {
    preset: 'static',
  },
  compatibilityDate: '2024-11-01',
  telemetry: false,
  //#endregion framework
})
