// import Vue from 'vue'
// 初始化私有方法
// const star = commit => {
//   commit('STAR', true)
//   return Date.now()
// }
import { getList } from '../../api/api';
const beginLoading = commit => {
  commit('LOADING_TOGGLE', true)
  return Date.now()
}
const stopLoading = (commit, start, timeAllowed = 400) => {
  const spareTime = timeAllowed - (Date.now() - start)
  setTimeout(commit, spareTime > 0 ? spareTime : 0, 'LOADING_TOGGLE', false)
}
export default {
  increment: ({commit}) => {
    commit('INCREMENT')
  },
  decrement: ({commit}) => {
    commit('DECREMENT')
  },
  getArticles: ({commit}) => {
    let start = beginLoading(commit)
    let aParams = { id: 1 }
    console.log(aParams)
    return getList(aParams)
      .then(data => {
        stopLoading(commit, start)
        let {msg, code, obj} = data;
        if (code === 200) {
          console.log('success:' + msg + '' + obj)
          commit('SET_ARTICLES', obj)
        } else {
          console.log('fail:' + msg)
        }
      });
  }
}
