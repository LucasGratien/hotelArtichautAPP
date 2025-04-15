// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/motion/nuxt"],
  plugins: ["~/plugins/app.js", "~/plugins/motion.js"],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://192.168.1.245:8000",
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    },
  },
  css: ["@/public/assets/css/variables.css"],
});

