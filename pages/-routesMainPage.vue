<template>
  <div class="main-page__routes routes">
    <div class="routes__wrapper">
      <div class="routes__title">
        Переходы
      </div>

      <el-button
        v-for="(route, index) in routes"
        :key="index"
        class="routes__line line"
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
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoutesMainPage',

  data() {
    return {
      routes: [
        { name: 'Переход к змеиной поляне', time: 7, isActive: false },
        { name: 'Вход в паучье гнездо', time: 7 },
      ],
    }
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

    .line {
      width: 100%;
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
