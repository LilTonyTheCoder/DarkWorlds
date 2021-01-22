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

    <RoutesMainPage />

    <BottomExpanders />
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  components: {
    BottomExpanders: () => import('./-bottomExpanders'),
    RoutesMainPage: () => import('./-routesMainPage'),
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
      padding-top: 6px;
      padding-left: 3%;
      padding-right: 3%;

      .info {
        margin-bottom: 20px;

        .el-card__body {
          padding: 12px 14px;
        }

        &__title {
          font-size: 14px;
          margin-bottom: 8px;
          font-weight: bold;
        }

        &__text {
          font-size: 12px;
          color: #909399;
        }
      }
    }
  }
</style>
