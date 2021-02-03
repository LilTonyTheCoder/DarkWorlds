export default {
  INCREASE_STAT(state, payload) {
    if (state.stats.free.num < 1) return

    state.stats[payload].num += 1
    state.stats.free.num -= 1
  },
}
