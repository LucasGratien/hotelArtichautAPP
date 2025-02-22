// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      apiBase: 'http://192.168.1.245:8000/api',
    },
  },
  css: [
    '@/public/assets/css/variables.css'
  ],
})