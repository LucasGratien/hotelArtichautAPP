// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt'],
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'http://192.168.1.245:8000',
        },
    },
    css: [
        '@/public/assets/css/variables.css'
    ],
    colorMode: {
        preference: 'light'
      }
})