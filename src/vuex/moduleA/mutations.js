export default {
  INCREMENT: (state, count) => {
    state.count = count++
  },
  DECREMENT: (state, count) => {
    state.count = count--
  },
  LOADING_TOGGLE: (state, isLoading) => {
    state.isLoading = isLoading
  },
  SET_ARTICLES: (state, articles) => {
    state.articles = articles
  }
}
