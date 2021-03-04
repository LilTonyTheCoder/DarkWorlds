<template>
  <div>
    <el-link
      type="warning"
      @click="undressAll"
    >
      Снять все
    </el-link>

    <p>Уровень: {{ userCommon.lvl }}</p>

    <p>Опыт: {{ userCommon.exp }} ({{ userCommon.needExp }})</p>

    <el-tag
      type="info"
    >
      {{ paramNameByKey('free') }}: {{ userStats['free'] }}
    </el-tag>

    <br>

    <div class="info__item item item--title">
      Характеристики
    </div>

    <div
      v-for="(stat, key, index) in filteredUserStats"
      :key="index"
      class="info__item item"
    >
      <div class="item__text">
        {{ paramNameByKey(key) }}
      </div>

      <div class="item__right">
        <div class="item__num">
          <b>{{ stat + allWearedModificators[key] }}</b>
          <span v-if="allWearedModificators[key]">
            ( {{ stat }} + {{ allWearedModificators[key] }} )
          </span>
        </div>

        <div class="item__controllers controllers">
          <el-button
            size="mini"
            circle
            :disabled="userStats.free.num < 1"
            @click="increaseUserStat(key)"
          >
            +
          </el-button>
          <!-- <el-button size="mini" circle>-</el-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getNameByKey } from '~/helpers/paramsNames.js'
import userItems from '~/mixins/user-items.js'

export default {
  name: 'PersonageStats',

  mixins: [
    userItems,
  ],

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
      userStats: state => state.user.stats,
      userEquipped: state => state.user.equipped,
    }),

    filteredUserStats() {
      let copyObj = JSON.parse(JSON.stringify(this.userStats))

      delete copyObj.free

      return copyObj
    },
  },

  methods: {
    ...mapMutations({
      increaseUserStat: 'user/INCREASE_STAT',
      userUndress: 'user/UNDRESS_ITEM',
    }),

    undressAll() {
      Object.keys(this.userEquipped).forEach((key) => {
        this.userUndress(key)
      });
    },

    paramNameByKey(key) {
      return getNameByKey(key)
    },
  },
}
</script>

<style lang="scss">
.personage-page {
  .info {
    p {
      font-size: 14px;
    }

    .item {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &--title {
        color: $regular-text;
      }

      &__right {
        display: flex;
      }

      &__num {
        width: 80px;
        text-align: right;
        padding-right: 10px;
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
  }
}
</style>
