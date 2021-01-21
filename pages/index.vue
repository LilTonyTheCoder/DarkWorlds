<template>
  <div class="main-page">
    <div class="main-page__wrapper">
      <el-card class="main-page__info info">
        <div class="info__title">
          Змеиная поляна
        </div>

        <div class="info__text">
          Лесная поляна, залитая солнцем, облюбованная греющимися змеями.
          Изредка сюда из леса заглядывают и древни, однако ни те, ни другие особой опасности не представляют.
        </div>
      </el-card>
    </div>

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
              :stroke-width="8"
              :percentage="10"
              status="warning"
            />
          </div>
        </el-button>
      </div>
    </div>

    <div class="main-page__stuff stuff">
      <el-collapse v-model="activeNames">
        <el-collapse-item
          title="Разбросанные вещи"
          name="1"
        >
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </el-collapse-item>

        <el-collapse-item
          title="Монстры"
          name="2"
        >
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      routes: [
        { name: 'Переход к змеиной поляне', time: 7 },
        { name: 'Вход в паучье гнездо', time: 7 },
      ],

      activeNames: ['1', '2'],
    }
  },
}
</script>

<style lang="scss">
  .main-page {
    background: #fff;
    position: relative;
    height: 76%;
    overflow-y: scroll;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    box-sizing: border-box;

    &__wrapper {
      padding-top: 16px;
      padding-left: 3%;
      padding-right: 3%;
    }

    .info {
      margin-bottom: 16px;

      &__title {
        font-size: 24px;
        margin-bottom: 8px;
        font-weight: bold;
      }

      &__text {
        font-size: 18px;
        color: #909399;
      }
    }

    .routes {
      padding-bottom: 24px;
      // border-bottom: 1px solid #dcdfe6;

      &__title, .line {
        width: 100%;
        height: 80px;
      }

      &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
        font-size: 22px;
        color: #606266;
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
          font-size: 24px;
          color: #000;
        }

        &__progress-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
        }
      }
    }

    .stuff {
      display: block;

      .el-collapse-item__header {
        padding-left: 5%;
        padding-right: 5%;
        height: 80px;
        font-size: 22px;
        color: #606266;
      }
    }
  }
</style>
