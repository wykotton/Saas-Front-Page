import Vue from 'vue'
import Vuex from 'vuex'
import moduleAActions from './moduleA/actions'
import moduleAMutations from './moduleA/mutations'
import moduleAGetters from './moduleA/getters'
import moduleBActions from './moduleB/actions'
import moduleBMutations from './moduleB/mutations'
import moduleBGetters from './moduleB/getters'

Vue.use(Vuex)

// A模块状态管理
const moduleA = {
  // 应用初始状态
  namespaced: true,
  state: {
    count: 10,
    isLoading: false,
    articles: []
  },
  mutations: moduleAMutations,
  actions: moduleAActions,
  getters: moduleAGetters
}
// A模块状态管理
const moduleB = {
  // 应用初始状态
  namespaced: true,
  state: {
    count: 10
  },
  mutations: moduleBMutations,
  actions: moduleBActions,
  getters: moduleBGetters
}
// 创建 store 实例
export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})
