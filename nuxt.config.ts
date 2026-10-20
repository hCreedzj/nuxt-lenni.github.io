// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  
  css: ["@/styles/styles.less"],
  devtools: { enabled: true },
  components: [
    { path: '~/components', pathPrefix: false }
  ],

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
    plugins: [svgLoader()],
  },

});

