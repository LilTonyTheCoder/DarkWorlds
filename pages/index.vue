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
import { mapMutations } from 'vuex'

export default {
  name: 'HomePage',

  components: {
    BottomExpanders: () => import('./-bottomExpanders'),
    RoutesMainPage: () => import('./-routesMainPage'),
  },

  created() {
    this.changeHeaderAction('openLeftMenu')
    this.changeHeaderTitle('CircleOfLife')
    this.changeHeaderBottom('default')
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
.main-page {
  &__wrapper {
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
        color: $secondary-text;
      }
    }
  }
}
</style>
