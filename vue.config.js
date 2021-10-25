module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  configureWebpack: {
    resolve: {
      symlinks: false
    }
  },

  //transpileDependencies: [],

  pwa: {
    name: 'frontendchallenge',
    shortName: 'frontendchallenge',
    themeColor: '#dc143c',
    msTileColor: '#dc143c',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestPath: 'manifest.json',
    workboxPluginMode: 'InjectManifest', //'GenerateSW',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/, /web.config/]
    }
  }
}
