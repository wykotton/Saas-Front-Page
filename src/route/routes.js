import Index from '../modules/index/views/main.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    name: ''
  }]
})
