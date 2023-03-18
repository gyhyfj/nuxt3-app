import AutoImport from 'unplugin-auto-import/vite'
import { i18nConfig } from './i18n/index.js'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-vitest',
    '@nuxtjs/device',
    '@nuxt/image-edge',
    'nuxt-icon', // https://icones.js.org
    '@vite-pwa/nuxt',
    'nuxt-gtag',
  ],
  vite: {
    define: {
      'import.meta.vitest': 'undefined',
    },
    plugins: [
      AutoImport({
        imports: ['vitest'],
        dts: true,
      }),
    ],
  },
  css: ['@/asserts/css/global.css'],
  imports: {
    dirs: ['./stores'],
  },
  eslint: {
    lintOnStart: true,
  },
  stylelint: {
    lintOnStart: true,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  i18n: {
    vueI18n: i18nConfig,
  },
  routeRules: {},
})
