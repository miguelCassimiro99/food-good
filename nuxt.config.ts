// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    [
      '@storyblok/nuxt',
      {
        accessToken: `${process.env.STORYBLOK_SECRET_KEY}`,
        apiOptions: {
          region: 'us',
        },
      },
    ],
    '@nuxt/image',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  googleFonts: {
    display: 'swap',
    families: {
      Questrial: true,
      Roboto: true,
      'Tilt+Neon': true,
    },
  },
})
