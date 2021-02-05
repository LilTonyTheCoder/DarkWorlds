export default {
  INCREASE_STAT(state, payload) {
    if (state.stats.free.num < 1) return

    state.stats[payload].num += 1
    state.stats.free.num -= 1
  },

  DRESS_ITEM(state, payload) {
    state.equipped[payload.type] = payload.id
  },

  UNDRESS_ITEM(state, itemType) {
    state.equipped[itemType] = null
  },
}
