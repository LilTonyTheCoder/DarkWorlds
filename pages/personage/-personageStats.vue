<template>
  <div>
      <el-link type="warning">Снять все</el-link>

      <p>Уровень: {{ userCommon.lvl }}</p>

      <p>Опыт: {{ userCommon.exp }} ({{userCommon.needExp}})</p>

      <el-tag
        type="info"
      >
        {{ userStats.free.title }}: {{ userStats.free.num }}
      </el-tag>

      <br>

      <div class="info__item item item--title">Характеристики</div>

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
            <el-button
              size="mini"
              circle
              :disabled="userStats.free.num < 1"
              @click="increaseUserStat(key)"
            >+</el-button>
            <!-- <el-button size="mini" circle>-</el-button> -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'PersonageStats',

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

  methods: {
    ...mapMutations({
      increaseUserStat: 'user/INCREASE_STAT',
    }),
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
  }
}
</style>
