// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
  ],

  app: {
    rootAttrs: {
      class: "h-full",
    },
  },

  ui: {
    safelistColors: ["party-primary", "party-secondary"],
    global: true,
    disableGlobalStyles: false,
  },

  hooks: {},

  colorMode: {
    disableTransition: true,
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    "/": {prerender: true},
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-09-04",
})
