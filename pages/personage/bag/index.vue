<template>
  <div>Hello PersonageBagPage</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'PersonageBagPage',

  computed: {
    ...mapState({
      userName: state => state.user.name,
    }),
  },

  created() {
    this.changeHeaderAction('goToMainPage')
    this.changeHeaderTitle(this.userName)
    this.changeHeaderBottom('personage')
  },

  methods: {
    ...mapMutations({
      changeHeaderAction: 'header/CHANGE_MAIN_BUTTON_ACTION',
      changeHeaderTitle: 'header/CHANGE_TITLE',
      changeHeaderBottom: 'header/CHANGE_BOTTOM_SECTION',
    }),
  },
}
</script>

<style lang="scss">

</style>
