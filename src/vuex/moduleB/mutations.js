export default {
  INCREMENT: (state, count) => {
    state.count = count++
  },
  DECREMENT: (state, count) => {
    state.count = count--
  }
}
