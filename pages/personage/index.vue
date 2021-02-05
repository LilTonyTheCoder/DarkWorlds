<template>
  <div class="main-page personage-page">
    <div class="personage-page__wrapper">
      <!-- {{ allUserItemsExpanded }} -->
      <div class="personage-page__inventory inventory inventory--left">
        <div
          v-for="(item, index) in leftSideItems"
          :key="index"
          :class="[
            'inventory__item',
            item.styleClass
          ]"
          @click="showItemsToWear(item.type || item.title, item.title)"
        >
          <img
            v-if="!userEquip[item.title]"
            :src="`images/items/default/char_${item.type || item.title}.gif`"
            :alt="item.type || item.title"
          >

          <img
            v-if="userEquip[item.title]"
            :src="getItem(userEquip[item.title]).img"
            :alt="item.type || item.title"
          >
        </div>
      </div>

      <div class="personage-page__inventory inventory inventory--avatar">
        <div class="inventory__item">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
        </div>
        <img
          :src="userCommon.avatar"
          alt="user avatar"
        >
        <div class="inventory__item">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
        </div>
      </div>

      <div class="personage-page__inventory inventory inventory--right">
        <div
          v-for="(item, index) in rightSideItems"
          :key="index"
          :class="[
            'inventory__item',
            item.styleClass
          ]"
          @click="showItemsToWear(item.type || item.title, item.title)"
        >
          <img
            v-if="!userEquip[item.title]"
            :src="`images/items/default/char_${item.type || item.title}.gif`"
            :alt="item.type || item.title"
          >

          <img
            v-if="userEquip[item.title]"
            :src="getItem(userEquip[item.title]).img"
            :alt="item.type || item.title"
          >
        </div>
      </div>

      <div class="personage-page__inventory inventory inventory--w100">
        <img src="images/items/default/char_stone.gif" alt="">
        <img src="images/items/default/char_stone.gif" alt="">
        <img src="images/items/default/char_stone.gif" alt="">
        <img src="images/items/default/char_stone.gif" alt="">
        <img src="images/items/default/char_stone.gif" alt="">
        <img src="images/items/default/char_stone.gif" alt="">
        <img src="images/items/default/char_stone.gif" alt="">
      </div>
    </div>

    <div class="personage-page__info info">

      <PersonageStats />

      <BottomParams />
    </div>

    <el-dialog :title="dialogTitle" top="2vh" custom-class="personage-page__dialog" :visible.sync="dialogVisible">
      <div
        v-for="(item, index) in dialogInnerItems"
        :key="index"
      >
        {{ item.info.title }}
        <br>
        {{ item }}
        <br>
        <button
          v-if="showUndressButton(item)"
          @click="undressItem(item.type)"
        >Снять</button>
        <button
          v-else
          @click="dressItem({ type: item.type, id: item.id })"
        >Надеть</button>
        <br><br>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getItemById } from '~/backendInfo/items.js'

export default {
  name: 'PersonagePage',

  components: {
    BottomParams: () => import('./-bottomParams.vue'),
    PersonageStats: () => import('./-personageStats.vue'),
  },

  data() {
    return {
      itemsTest: 'prototypes',
      dialogVisible: false,
      dialogTitle: 'title',
      dialogInnerItems: [],

      currentActiveRing: null,

      leftSideItems: [
        { title: 'helmet', styleClass: 'inventory__item--helmet' },
        { title: 'weapon', styleClass: 'inventory__item--double' },
        { title: 'armor', styleClass: 'inventory__item--triple' },
        { title: 'r1', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
        { title: 'r2', type: 'ring', styleClass: 'inventory__item--ring' },
        { title: 'belt' },
      ],

      rightSideItems: [
        { title: 'earring' },
        { title: 'necklace' },
        { title: 'bracelet' },
        { title: 'gloves' },
        { title: 'shield', styleClass: 'inventory__item--double' },
        { title: 'r3', type: 'ring', styleClass: 'inventory__item--ring' },
        { title: 'r4', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
        { title: 'boot', styleClass: 'inventory__item--boots' },
      ],
    }
  },

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
      userEquip: state => state.user.equipped,
      userInventory: state => state.user.inventory,
    }),

    allUserItemsExpanded() {
      const arr = []

      this.userInventory.forEach(id => {
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
      userDress: 'user/DRESS_ITEM',
      userUndress: 'user/UNDRESS_ITEM',
    }),

    getItem(id) {
      return getItemById(id)
    },

    showItemsToWear(type, title) {
      if (title) {
        this.currentActiveRing = title
      }

      this.dialogInnerItems = this.allUserItemsExpanded.filter(el => el.type === type)

      console.log(this.dialogInnerItems)

      this.dialogTitle = type
      this.dialogVisible = true
    },

    undressItem(type) {
      if (type === 'ring') {
        this.userUndress(this.currentActiveRing)
      } else {
        this.userUndress(type)
      }
    },

    dressItem(item) {
      if (item.type === 'ring') {
        if ( this.userEquip.r1 === item.id ) this.userUndress('r1')
        if ( this.userEquip.r2 === item.id ) this.userUndress('r2')
        if ( this.userEquip.r3 === item.id ) this.userUndress('r3')
        if ( this.userEquip.r4 === item.id ) this.userUndress('r4')

        this.userDress({ type: this.currentActiveRing, id: item.id })
      } else {
        this.userDress({ type: item.type, id: item.id })
      }
    },

    showUndressButton(item) {
      if (item.type === 'ring') {
        return this.userEquip[this.currentActiveRing] === item.id
      } else {
        return this.userEquip[item.type] === item.id
      }
    },
  },
}
</script>

<style lang="scss">
.personage-page {
  &__wrapper {
    display: flex;
    padding-top: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .inventory {
    width: 30%;
    // text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &--left {
      .inventory__item {
        text-align: right;
      }
    }

    &--right {
      .inventory__item {
        text-align: left;
      }
    }

    &--avatar {
      width: 40%;
      max-width: 120px;

      img {
        max-width: 100%;
      }
    }

    &--w100 {
      width: 100%;
      flex-direction: row;
      padding-top: 10px;

      img {
        background: #dedede;
      }
    }

    &__item {
      height: 35px;
      width: 100%;
      text-align: center;

      img {
        max-width: 100%;
        max-height: 100%;
        background: #dedede;
      }

      &--ring {
        width: 35px;

        &--grow {
          flex-grow: 1;
        }
      }

      &--helmet, &--boots {
        img {
          width: 70px;
        }
      }

      &--double {
        height: 70px;
      }

      &--triple {
        height: 105px;
      }
    }
  }

  .info {
    padding-top: 10px;
    padding-left: 3%;
    padding-right: 3%;
    line-height: 24px;
    font-size: 14px;
  }

  &__dialog {
    width: 90%;
  }
}
</style>
