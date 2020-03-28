/*


*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueHead from 'vue-head'
import AxiosCookiejarSupport from 'axios-cookiejar-support'

Vue.config.productionTip = false

AxiosCookiejarSupport(axios)

Vue.use(VueAxios, axios, AxiosCookiejarSupport)
Vue.use(VueHead, { separator: '|'})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
