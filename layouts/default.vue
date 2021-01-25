<template>
  <div class="mobile-container">
    <div class="mobile-container__inner">
      <Header />

      <Nuxt />

      <transition name="slideRight">
        <LeftMenu v-if="isOpen" />
      </transition>

      <Chat />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',

  components: {
    Header: () => import('@/components/sections/header'),
    LeftMenu: () => import('@/components/sections/leftMenu'),
    Chat: () => import('@/components/sections/chat'),
  },

  computed: {
    ...mapState({
      isOpen: state => state.leftMenu.isOpen,
    }),
  },
}
</script>

<style lang="scss">
html, body {
  /* font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.mobile-container {
  // background: red;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;

  &__inner {
    max-width: 575px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }
}

.slideRight-enter-active,
.slideRight-leave-active {
  transition: opacity .5s;

  .left-menu__inner, .left-menu__shadow {
    transition: .3s;
  }
}

.slideRight-enter,
.slideRight-leave-active {
  opacity: 0.99;

  .left-menu__inner {
    transform: translateX(-100%);
  }

  .left-menu__shadow {
    opacity: 0;
  }
}
</style>
