// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: `${process.env.STORYBLOK_SECRET_KEY}`,
        apiOptions: {
          region: 'us',
        },
      },
    ],
  ],
})
