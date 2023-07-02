require('dotenv').config()
const { API_KEY, API_URL, API_URL_EXPRESS } = process.env
export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
    // ssr: 'true',
    // target: 'server',

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
      { hid: 'description', name: 'description', content: '旅行情報をお届けする情報サイト' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "robots", name: "robots", content: "noindex" },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Headless Travel' },
      { hid: 'og:url', property: 'og:url', content: 'https://headless-travel.site' },
      { hid: 'og:title', property: 'og:title', content: 'Headless Travel' },
      { hid: 'og:description', property: 'og:description', content: '海外情報サイト' },
      { hid: 'og:image', property: 'og:image', content: 'https://headless-travel.site' },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/init.js',
    '~/plugins/v-mq',
    { src: '@/plugins/v-modal', ssr: false },
    { src: '@/plugins/vee-validate'}
    // { src: '@/plugins/v-tippy', mode: 'client'},
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
      '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@aceforth/nuxt-optimized-images',
    'vue-scrollto/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv',
    // '@nuxtjs/auth'
  ],
  markdownit: {
    preset: 'default',
    // ソース内のHTMLタグを有効にする
    html: true,
    // 段落の\nを<br>に変換する
    breaks: true,
    // URLのようなテキストをリンクに変換する
    linkify: false,
    /*
      Nuxt上で$mdを使用できるようにする
      runtime: https://github.com/nuxt-community/markdownit-module#using-md-to-render-markdown
    */
    runtime: true,
    /*
      add plugins
      use: https://markdown-it.github.io/markdown-it/#MarkdownIt.use
    */
    use: []
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-awesome-swiper'],
    transpile: ['vee-validate/dist/rules'],
  },
//   loading: './components/Loading.vue',
  loading: {
    color: '#41ccfa',
    height: '3px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#ff8f9f',
    duration: 5000,
    background: '#FFF'
  },
  optimizedImages: {
    optimizeImages: true
  },

  env: {
    API_KEY,
    API_URL,
    API_URL_EXPRESS
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        statusCode: 404,
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
      routes.push({
        path: '/news/page/:p',
        component: resolve(__dirname, 'pages/news/index.vue'),
        name: 'page',
      })
    }
  },
  auth: {
    strategies: {
        local: {
            endpoints: {
                login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
                logout: { url: '/api/auth/logout', method: 'post' },
                user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
            },
            // tokenRequired: true,
            // tokenType: 'bearer'
        }
    }
  }
}
