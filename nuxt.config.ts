// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt'],
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL || 'http://192.168.1.245:8000/api',
        },
    },
    css: [
        '@/public/assets/css/variables.css'
    ],
    colorMode: {
        preference: 'light'
      }
})