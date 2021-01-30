<template>
  <div class="main-page personage-page">
    <div class="personage-page__wrapper">
      <div class="personage-page__inventory inventory inventory--left">
        <div class="inventory__item">
          <img width="70px" src="images/items/default/char_helmet.gif" alt="">
        </div>
        <div class="inventory__item inventory__item--double">
          <img src="images/items/default/char_weapon.gif" alt="">
        </div>
        <div class="inventory__item inventory__item--triple">
          <img src="images/items/default/char_armor.gif" alt="">
        </div>
        <div class="inventory__item">
          <img src="images/items/default/char_ring.gif" alt="">
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

      {{ itemsTest }}

      <el-link type="warning">Снять все</el-link>

      <p>Уровень: {{ userCommon.lvl }}</p>

      <p>Опыт: {{ userCommon.exp }} ({{userCommon.needExp}})</p>

      <br>

      <el-tag type="info">{{ this.userStats.free.title }}: {{ this.userStats.free.num }}</el-tag>

      <div
        v-for="(stat, key) in filteredUserStats"
        :key="key"
        class="info__item item"
      >
        <div class="item__text">
          {{ stat.title }}
        </div>

        <div class="item__right">
          <div class="item__num">
            <b>{{ stat.num }}</b>
          </div>

          <div class="item__controllers controllers">
            <el-button size="mini" circle>+</el-button>
            <el-button size="mini" circle>-</el-button>
          </div>
        </div>
      </div>

      <el-collapse v-model="activeNames">
        <el-collapse-item
          title="Параметры"
          name="1"
          class="info__params"
        >
          <div>
            <div>Уровень жизни:</div>
            <div>205</div>
          </div>
          <div>Уровень выносливости:</div>
          <hr>
          <div>Урон:</div>
          <hr>
          <div>Броня головы:</div>
          <div>Броня корпуса:</div>
          <div>Броня пояса:</div>
          <div>Броня ног:</div>
          <hr>
          <div>Критический удар:</div>
          <div>Против критич-го удара:</div>
          <div>Увертывание:</div>
          <div>Против Увертывания:</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
// import { prototypes } from '~/backendInfo/items.js'

export default {
  name: 'PersonagePage',

  data() {
    return {
      itemsTest: 'prototypes',
      activeNames: [],
    }
  },

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
      userStats: state => state.user.stats,
    }),

    filteredUserStats() {
      let copyObj = JSON.parse(JSON.stringify(this.userStats))

      delete copyObj.free

      return copyObj
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
  },
}
</script>

<style lang="scss">
.personage-page {
  &__wrapper {
    display: flex;
    padding-top: 10px;
    flex-wrap: wrap;
  }

  .inventory {
    width: 30%;
    // text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--avatar {
      width: 40%;

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

    p {
      font-size: 14px;
    }

    .item {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__right {
        display: flex;
      }

      &__num {
        width: 50px;
      }

      .controllers {
        display: flex;

        align-items: center;
        justify-content: center;

        button {
          width: 20px;
          height: 20px;
          padding: 0;
        }

        button + button {
          margin-left: 4px;
        }
      }
    }

    .el-collapse-item__content {
      line-height: 34px;

      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
