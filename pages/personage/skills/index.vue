<template>
  <div>Hello PersonageSkillsPage</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'PersonageSkillsPage',

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
    }),
  },

  created() {
    this.changeHeaderAction('goToMainPage')
    this.changeHeaderTitle(this.userCommon.name)
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
