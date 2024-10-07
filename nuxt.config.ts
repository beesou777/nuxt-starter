// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 3
  },
  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: process.env.NODE_ENV === 'development'
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
    }
  },
  runtimeConfig: {
    public: {
      // myValue: process.env.NUXT_PUBLIC_MY_VALUE,
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/utils/global.scss";'
        }
      }
    }
  },
  css: ['~/assets/css/main.scss'],
  modules: [// https://nuxt.com/modules/security
  'nuxt-security', // https://nuxt.com/modules/eslint | https://eslint.vuejs.org
  '@nuxtjs/eslint-module', // https://pinia.vuejs.org/ssr/nuxt.html
  '@pinia/nuxt', // https://tailwindcss.nuxtjs.org
  '@nuxtjs/tailwindcss', // https://github.com/nuxt-modules/icon | https://icones.js.org/collection/all?s=github
  'nuxt-icon', // https://vueuse.org/guide/#nuxt
  '@vueuse/nuxt', // https://image.nuxt.com
  '@nuxt/image', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English',file: 'en.json' },
      { code: 'no', iso: 'no-NO', name: 'Norsk' , file: 'no.json' }
    ]
  },
  imports: {
    dirs: ['composable/**', 'utils/**'],
  },
  image: {},
  app:{
    head: {
      title: 'Template Nuxt3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Template Nuxt3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    dir: './output'
  }
  
})