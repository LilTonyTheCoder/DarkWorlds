<template>
  <div class="main-page bag-page">
    <div>Загрузка: 37/107</div>
    <div>Золото: 455</div>

    <br><br>

    <!-- <div
      v-for="(item,index) in allItemsArray"
      :key="index"
    >
      {{ index + 1 }}
      {{ item.info.title }}
      <br> <br>
    </div> -->

    <BlockClothesItem
      v-for="(item, index) in allItemsArray"
      :key="`dialog item ${index}`"
      :item="item"
      button-action="throwItem"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getItemById, prototypes } from '~/backendInfo/items.js'

export default {
  name: 'PersonageBagPage',

  components: {
    BlockClothesItem: () => import('@/components/blocks/clothes-item'),
  },

  data() {
    return {
      itemProt: prototypes,
    }
  },

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
      userInventory: state => state.user.inventory,
      userEquipped: state => state.user.equipped,
    }),

    allItemsArray() {
      const arr = []

      this.userInventory.forEach(id => {
        // sort only non-equipped items

        let isEquippedCurrentItem = false

        Object.keys(this.userEquipped).forEach((key) => {
          if (this.userEquipped[key] === id) isEquippedCurrentItem = true
        })

        if (isEquippedCurrentItem) return

        // add item info from back
        arr.push({
          id,
          ...this.getItem(id),
        })
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
.bag-page {
  padding-left: 3%;
  padding-right: 3%;
}
</style>
