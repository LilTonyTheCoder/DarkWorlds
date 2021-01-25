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

    <div
      v-if="headerBottom === 'default'"
      class="app-header__line app-header__line--buttons"
    >
      <el-button round>
        <NuxtLink to="/personage">
          <div class="app-header__line--buttons__button-inner">
            <i class="el-icon-user" />
            <span class="app-header__line--buttons__info">
              <span class="current">396</span>
              <br>
              <span class="max">396</span>
            </span>
          </div>
        </NuxtLink>
      </el-button>

      <el-button round>
        <NuxtLink to="/personage/skills">
          <div class="app-header__line--buttons__button-inner">
            <i class="el-icon-sugar" />
            <span class="app-header__line--buttons__info">
              <span class="current">57</span>
              <br>
              <span class="max">57</span>
            </span>
          </div>
        </NuxtLink>
      </el-button>

      <el-button round>
        <NuxtLink to="/personage/bag">
          <div class="app-header__line--buttons__button-inner">
            <i class="el-icon-coin" />
            <span class="app-header__line--buttons__info">
              <span class="current">28</span>
              <br>
              <span class="max">107</span>
            </span>
          </div>
        </NuxtLink>
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'HeaderCompo',

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
        padding: 0px 13px;
        line-height: 6px;
        height: 40px;

        a {
          text-decoration: none;
        }
      }

      .el-button+.el-button {
        margin-left: 0px;
      }

      &__button-inner {
        display: flex;
        color: #000;
        align-items: center;
        // justify-content: flex-start;
      }

      &__info {
        font-size: 16px;
        margin-left: 8% !important;
        text-align: left;

        .current {
          font-size: 10px;
          font-weight: normal;
        }

        .max {
          color: #606266;
          font-size: 10px;
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
