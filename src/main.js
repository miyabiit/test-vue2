/*


*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'
import VueMq from 'vue-mq'

Vue.use(VueAnalytics, {
    id: 'UA-110511020-1',
    router
})

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueHead, { separator: '|'})
Vue.use(VueMq, {
  breakpoints: { sp: 959, pc: 960 },
  defaultBreakpoint: 'sp'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
