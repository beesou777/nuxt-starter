// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 3,
  },
  site:{
    url: 'https://eventeir.ai',
    title: 'Eventeir',
    trailingSlash: true,
    excludeAppSources: ['nuxt:pages']
  },
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },

  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: process.env.NODE_ENV === 'development',
  },

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
    },
  },

  runtimeConfig: {
    public: {
      // myValue: process.env.NUXT_PUBLIC_MY_VALUE,
    },
  },

  vite: {
    server: {
      hmr: {
        clientPort: 3000,
      },
    },
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-tiptap-editor',
    'nuxt-lazy-hydrate',
    '@nuxtjs/sitemap',
    '@nuxt/ui',
  ],

  i18n: {
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'no', iso: 'no-NO', name: 'Norsk', file: 'no.json' },
    ],
  },

  imports: {
    dirs: ['composable/**', 'utils/**'],
  },

  image: {},

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Template Nuxt3' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  compatibilityDate: '2024-10-16',
});