import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

import './assets/scss/main.scss'
import 'bulma/css/bulma.css'

Vue.use(VueMeta)

import Default from './layouts/Default.vue'
Vue.component('default-layout', Default)

import Main from './layouts/Main.vue'
Vue.component('main-layout', Main)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
