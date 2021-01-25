export default {
  CHANGE_MAIN_BUTTON_ACTION(state, payload) {
    state.mainButtonAction = payload
  },

  CHANGE_TITLE(state, payload) {
    state.title = payload
  },

  CHANGE_BOTTOM_SECTION(state, payload) {
    state.bottomSection = payload
  },
}
