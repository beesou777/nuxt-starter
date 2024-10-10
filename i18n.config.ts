export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  detectBrowserLanguage: false,
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'GBP',
      },
    },
    no: {
      currency: {
        style: 'currency',
        currency: 'EUR',
      },
    },
  },
}));
