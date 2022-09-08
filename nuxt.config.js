const { API_KEY, API_URL } = process.env
export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
//   target: 'spa',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Headless Travel',
    htmlAttrs: {
      lang: 'ja',
    },
    titleTemplate: '%s | ' + 'Headless Travel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Headless Travel' },
      { hid: 'og:type', property: 'og:type', content: 'サイトのタイプ' },
      { hid: 'og:url', property: 'og:url', content: 'サイトURL' },
      { hid: 'og:title', property: 'og:title', content: 'Headless Travel' },
      { hid: 'og:description', property: 'og:description', content: '海外情報サイト' },
      { hid: 'og:image', property: 'og:image', content: 'サイトURL' },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/flag-icon',
    { src: '@/plugins/v-modal', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@aceforth/nuxt-optimized-images',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-flag-icon'],
    vendor: ['vue-awesome-swiper']
  },
  loading: './components/Loading.vue',
  optimizedImages: {
    optimizeImages: true
  },

  publicRuntimeConfig: {
    apiUrl: API_URL,
  },
  privateRuntimeConfig: {
    apiKey: '691867be-4a35-4006-90c1-9b0856070900',
  }
}
