// import Vue from 'vue'
// 初始化私有方法
// const star = commit => {
//   commit('STAR', true)
//   return Date.now()
// }
export default {
  increment: ({commit}) => {
    commit('INCREMENT')
  },
  decrement: ({commit}) => {
    commit('DECREMENT')
  }
}
