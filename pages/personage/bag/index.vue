<template>
  <div class="main-page bag-page">
    <div>Загрузка: 37/107</div>
    <div>Золото: 455 флоринов</div>

    <br><br>

    <div
      v-for="(item,index) in allItemsArray"
      :key="index"
    >
      {{ index + 1 }}
      {{ item.info.title }}
      <br> <br>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getItemById, prototypes } from '~/backendInfo/items.js'

export default {
  name: 'PersonageBagPage',

  data() {
    return {
      itemProt: prototypes,
    }
  },

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
      userInventory: state => state.user.inventory,
    }),

    allItemsArray() {
      const arr = []

      this.userInventory.forEach(el => {
        arr.push(this.getItem(el))
      })

      return arr
    },
  },

  created() {
    this.changeHeaderAction('goToMainPage')
    this.changeHeaderTitle(`${this.userCommon.name} [${this.userCommon.lvl}]`)
    this.changeHeaderBottom('personage')
  },

  methods: {
    ...mapMutations({
      changeHeaderAction: 'header/CHANGE_MAIN_BUTTON_ACTION',
      changeHeaderTitle: 'header/CHANGE_TITLE',
      changeHeaderBottom: 'header/CHANGE_BOTTOM_SECTION',
    }),

    getItem(id) {
      return getItemById(id)
    },
  },
}
</script>

<style lang="scss">

</style>
