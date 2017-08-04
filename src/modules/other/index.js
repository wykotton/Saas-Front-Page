import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import { Pagination } from 'element-ui'
import store from '../../vuex/store'
import router from '../../route/routesOther'
import Mock from '../../mock'
Mock.bootstrap()
import 'font-awesome/css/font-awesome.min.css'

// Vue.use(ElementUI)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#other')
