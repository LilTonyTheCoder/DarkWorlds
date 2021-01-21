<template>
  <div class="mobile-container">
    <div class="mobile-container__inner">
      <Header />

      <Nuxt />

      <Chat />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  components: {
    Header: () => import('@/components/sections/header'),
    Chat: () => import('@/components/sections/chat'),
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

</style>
