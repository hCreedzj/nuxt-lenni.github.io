// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  css: ["@/styles/styles.less"],
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
          @import "@/styles/variables.less";
          @import "@/styles/mixins.less";
          `,
        },
      },
    },
  },

});

