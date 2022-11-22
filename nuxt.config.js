export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog Apiki',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      //{ rel: 'icon', type: 'image/png', sizes: '128x128', href: '/icons/favicon-128x128.png' },
      //{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      //{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      //{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-BR'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
