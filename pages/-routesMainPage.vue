<template>
  <div class="main-page__routes routes">
    <div class="routes__wrapper">
      <div class="routes__title">
        Переходы
      </div>

      <div class="routes__controllers">
        <el-button
          v-for="(route, index) in routesArray"
          :key="index"
          class="routes__line line"
          :disabled="!route.canMove"
          @click="handleMove(route.name)"
        >
          {{ route.name }}
        </el-button>
      </div>

      <!-- <el-button
        v-for="(route, index) in routesArray"
        :key="index"
        class="routes__line line"
        @click="handleMove(route.name)"
      >
        <div class="line__inner">
          <div class="line__name">
            {{ route.name }}
          </div>

          <div class="line__time">
            {{ route.time }} сек
          </div>
        </div>

        <div class="line__progress-wrapper">
          <el-progress
            v-if="route.isActive"
            :show-text="false"
            :stroke-width="4"
            :percentage="10"
            status="warning"
          />
        </div>
      </el-button> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'RoutesMainPage',

  props: {
    mapArray: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {}
  },

  computed: {
    possibleMoves() {
      const currentAreaObj = this.mapArray[this.userPosition.y][this.userPosition.x]

      return currentAreaObj.possibleMoves ? currentAreaObj.possibleMoves : ['t', 'l', 'r', 'b']
    },

    routesArray() {
      let outputArray = [
        { name: '↑', canMove: false },
        { name: '←', canMove: false },
        { name: '↓', canMove: false },
        { name: '→', canMove: false },
      ]

      if (this.possibleMoves.includes('t')) outputArray[0].canMove = true
      if (this.possibleMoves.includes('l')) outputArray[1].canMove = true
      if (this.possibleMoves.includes('b')) outputArray[2].canMove = true
      if (this.possibleMoves.includes('r')) outputArray[3].canMove = true

      return outputArray
    },

    ...mapState({
      userPosition: state => state.user.position,
    }),
  },

  mounted() {
    document.addEventListener("keyup", this.setKeyPressToMove)
  },

  beforeDestroy() {
    document.removeEventListener("keyup", this.setKeyPressToMove)
  },

  methods: {
    handleMove(direction) {
      const canMove = this.routesArray.find(el => el.name === direction).canMove

      if (!canMove) return
      this.userMapMove(direction)
    },

    setKeyPressToMove(event) {
      if (event.keyCode === 37 || event.keyCode === 65) this.handleMove('←')
      if (event.keyCode === 38 || event.keyCode === 87) this.handleMove('↑')
      if (event.keyCode === 39 || event.keyCode === 68) this.handleMove('→')
      if (event.keyCode === 40 || event.keyCode === 83) this.handleMove('↓')
    },

    ...mapMutations({
      userMapMove: 'user/MAP_MOVE',
    }),
  },
}
</script>

<style lang="scss">
.main-page {
  .routes {
    padding-bottom: 12px;
    // border-bottom: 1px solid $base-border;

    &__title {
      width: 100%;
      height: 20px;
      margin-bottom: 10px;
    }

    &__controllers {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .routes__line:first-child {
        width: 100%;
      }
    }

    .line {
      // width: 100%;
      height: 50px;

      .el-progress-bar {

        &__inner, &__outer {
          border-radius: 0;
        }
      }
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5%;
      font-size: 14px;
      color: $regular-text;
    }

    .line {
      margin-left: 0;
      padding-left: 5%;
      padding-right: 5%;
      border: 0;
      position: relative;

      &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: $black-color;
      }

      &__progress-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
      }
    }
  }
}
</style>
