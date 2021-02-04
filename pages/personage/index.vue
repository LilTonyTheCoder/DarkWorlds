<template>
  <div class="main-page personage-page">
    <div class="personage-page__wrapper">
      <!-- {{ allUserItemsExpanded }} -->
      <div class="personage-page__inventory inventory inventory--left">
        <div
          class="inventory__item inventory__item--helmet"
          @click="showItemsToWear('helmet')"
        >
          <img
            v-if="!userEquip.helmet"
            src="images/items/default/char_helmet.gif"
            alt="helmet"
          >

          <img
            v-if="userEquip.helmet"
            :src="getItem(userEquip.helmet).img"
            alt="helmet"
          >
        </div>
        <div class="inventory__item inventory__item--double">
          <img src="images/items/default/char_weapon.gif" alt="">
        </div>
        <div class="inventory__item inventory__item--triple">
          <img src="images/items/default/char_armor.gif" alt="">
        </div>
        <div class="inventory__item inventory__item--ring inventory__item--ring--grow">
          <img src="images/items/default/char_ring.gif" alt="">
        </div>
        <div class="inventory__item inventory__item--ring">
          <img src="images/items/default/char_ring.gif" alt="">
        </div>
        <div class="inventory__item">
          <img src="images/items/default/char_belt.gif" alt="">
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
        <div class="inventory__item">
          <img src="images/items/default/char_earring.gif" alt="">
        </div>
        <div class="inventory__item">
          <img src="images/items/default/char_necklace.gif" alt="">
        </div>
        <div class="inventory__item">
          <img src="images/items/default/char_bracelet.gif" alt="">
        </div>
        <div class="inventory__item">
          <img src="images/items/default/char_gloves.gif" alt="">
        </div>
        <div class="inventory__item  inventory__item--double">
          <img src="images/items/default/char_shield.gif" alt="">
        </div>
        <div class="inventory__item">
          <img src="images/items/default/char_ring.gif" alt="">
          <img src="images/items/default/char_ring.gif" alt="">
        </div>
        <div class="inventory__item">
          <img width="70px" src="images/items/default/char_shoes.gif" alt="">
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

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <div
        v-for="(item, index) in dialogInnerItems"
        :key="index"
      >
        {{ item.info.title }}
        <br>
        {{ item }}
        <br>
        <button v-if="userEquip[item.type] === item.id">Снять</button>
        <button v-else>Надеть</button>
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

      leftSideItems: [
        { title: 'helmet', extraClasses: ['--helmet'] },
        { title: 'weapon', extraClasses: ['--double'] },
        { title: 'armor', extraClasses: ['--triple'] },
        { title: 'r1', type: 'ring', extraClasses: ['--ring', '--ring--grow'] },
        { title: 'r2', type: 'ring', extraClasses: ['--ring'] },
        { title: 'belt' },
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
    }),

    getItem(id) {
      return getItemById(id)
    },

    showItemsToWear(type) {
      this.dialogInnerItems = this.allUserItemsExpanded.filter(el => el.type === type)

      console.log(this.dialogInnerItems)

      this.dialogTitle = type
      this.dialogVisible = true
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

      &--helmet {
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
}
</style>
