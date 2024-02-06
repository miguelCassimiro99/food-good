// https://nuxt.com/docs/api/configuration/nuxt-config

const OPEN_GRAPH = [
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: 'Food Good',
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content:
      'Food Good is recipes app built with Nuxt 3, Storyblok, and TailwindCSS',
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: 'Food Good',
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: 'https://pizza-profile.vercel.app/',
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: 'https://imgur.com/3GAq6Nl',
  },
  { property: 'og:updated_time', content: new Date().toISOString() },
]

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Food Good',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Food Good is recipes app built with Nuxt 3, Storyblok, and TailwindCSS',
        },
        { hid: 'author', name: 'author', content: 'Miguel Cassimiro' },
        {
          hid: 'keywords',
          property: 'keywords',
          content: 'recipes, nuxt, storyblok, tailwindcss, vue',
        },
        ...OPEN_GRAPH,
      ],
    },
  },
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
