<template>
  <div class="app-header">
    <div class="app-header__line app-header__line--with-title">
      <span class="app-header__top-icon">
        <el-button
          @click="menuButtonHandler"
        >
          <transition name="rotate-expand">
            <i
              v-if="needToGoToMain"
              class="el-icon-back"
            />
          </transition>

          <transition name="rotate-expand">
            <i
              v-if="!needToGoToMain"
              class="el-icon-s-unfold"
            />
          </transition>

        </el-button>

      </span>

      <div class="app-header__title">
        {{ headerTitle }}
      </div>
    </div>

    <DefaultHeaderBottom v-if="headerBottom === 'default'" />
    <PersonageHeaderBottom v-if="headerBottom === 'personage'" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'HeaderCompo',

  components: {
    DefaultHeaderBottom: () => import('./defaultHeaderBottom.vue'),
    PersonageHeaderBottom: () => import('./personageHeaderBottom.vue'),
  },

  computed: {
    ...mapState({
      headerAction: state => state.header.mainButtonAction,
      headerTitle: state => state.header.title,
      headerBottom: state => state.header.bottomSection,
    }),

    needToGoToMain() {
      // let backMenuNames = ['personage', 'personage-bag', 'personage-skills']
      // return backMenuNames.indexOf(this.$route.name) !== -1
      return this.headerAction === 'goToMainPage'
    },
  },

  methods: {
    ...mapMutations({
      toggleLeftMenu: 'leftMenu/TOGGLE_LEFT_MENU',
      // changeheaderAction: 'header/CHANGE_MENU_BUTTON_LINK',
    }),

    menuButtonHandler() {
      if (this.needToGoToMain) {
        this.$router.push('/')
      } else {
        this.toggleLeftMenu()
      }
    },
  },
}
</script>

<style lang="scss">
.app-header {
  width: 100%;
  padding: 0px 0% 4px;
  font-size: 18px;
  background: #fff;

  &__line {
    width: 100%;
    // margin-bottom: 24px;
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    &--with-title {

      .el-button {
        border: 0;
        font-size: 20px;
        width: 60px;
        height: 45px;
        position: relative;

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .app-header__title {
        margin-left: 2%;
      }
    }

    &--buttons {
      display: flex;
      justify-content: space-between;
      padding-left: 3%;
      padding-right: 3%;

      .el-button {
        width: 32.5%;
        font-size: 20px;
        padding: 0;
        height: 40px;

        a {
          text-decoration: none;
          padding: 0px 13px;
          display: inline-block;
          width: 100%;
          height: 100%;
          line-height: 6px;
          display: flex;
          align-items: center;
        }
      }

      .el-button+.el-button {
        margin-left: 0px;
      }

      &__button-inner {
        display: flex;
        color: $black-color;
        align-items: center;
        // justify-content: flex-start;
      }

      &__info {
        font-size: 16px;
        margin-left: 8% !important;
        text-align: left;
        line-height: 11px;

        .current {
          font-size: 12px;
          font-weight: normal;
        }

        .max {
          color: $regular-text;
          font-size: 10px;
        }
      }
    }

    &--personage-page {
      padding: 0;
      .el-button {
        width: 33.333%;
        border: none;
        font-size: 12px;
        text-transform: uppercase;
        a {
          justify-content: center;
          color: $regular-text;

          &.nuxt-link-exact-active {
            color: $black-color;
          }
        }
      }
    }
  }
}

.rotate-expand-enter-active,
.rotate-expand-leave-active {
  transition: .5s;
}

.rotate-expand-enter,
.rotate-expand-leave-active {
  opacity: 0;
  transform: translate(-50%, -50%) rotate(-180deg) scaleY(0.1) !important;
}
</style>
