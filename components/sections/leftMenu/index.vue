<template>
  <div class="left-menu">
    <div
      class="left-menu__shadow"
      @click="toggleLeftMenu"
    />

    <div class="left-menu__inner">
      hey
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LeftMenu',

  methods: {
    ...mapMutations({
      toggleLeftMenu: 'leftMenu/TOGGLE_LEFT_MENU',
    }),
  },
}
</script>

<style lang="scss">
.left-menu {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &__shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,.7);
  }

  &__inner {
    background: #fff;
    position: absolute;
    z-index: 2;
    width: 80%;
    height: 100%;
  }
}
</style>
