<template>
  <div class="left-menu">
    <div
      class="left-menu__shadow"
      @click="toggleLeftMenu"
    />

    <div class="left-menu__inner inner">
      <div class="inner__row row row--info">
        <div class="row--info__avatar">
          <img
            :src="`/images/avatars/male/avatar1.jpg`"
            alt=""
          >
        </div>

        <div class="row--info__text">
          <div class="row--info__name">
            {{ userName }}
          </div>

          <div class="row--info__lvl">
            {{ userClass }} {{ userLvl }} уровня
          </div>
        </div>
      </div>

      <div class="inner__top-links">
        <div
          v-for="(item, index) in topLinks"
          :key="index"
          class="inner__row row"
        >
          <div class="row__icon">
            <i :class="`el-icon-${item.icon}`" />
          </div>

          <div class="row__title">
            {{ item.title }}
          </div>
        </div>
      </div>

      <div class="inner__middle-links">
        <div
          v-for="(item, index) in middleLinks"
          :key="index"
          class="inner__row row"
        >
          <div class="row__icon">
            <i :class="`el-icon-${item.icon}`" />
          </div>

          <div class="row__title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'LeftMenu',

  data() {
    return {
      topLinks: [
        { title: 'Персонаж', icon: 'user', href: '#' },
        { title: 'Умения', icon: 'reading', href: '#' },
        { title: 'Сумка', icon: 'folder', href: '#' },
      ],
      middleLinks: [
        { title: 'Локация', icon: 'user', href: '#' },
        { title: 'Задания', icon: 'reading', href: '#' },
        { title: 'Друзья', icon: 'folder', href: '#' },
        { title: 'Обмен', icon: 'folder', href: '#' },
        { title: 'История сражений', icon: 'folder', href: '#' },
      ],
    }
  },

  computed: {
    ...mapState({
      userName: state => state.user.name,
      userLvl: state => state.user.lvl,
      userClass: state => state.user.class,
    }),
  },

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
    opacity: 1;
  }

  &__inner {
    transform: translateX(0%);
  }

  .inner {
    background: #fff;
    position: absolute;
    z-index: 2;
    width: 80%;
    height: 100%;
    padding-top: 4px;

    &__top-links, &__middle-links {
      border-bottom: 1px solid #EBEEF5;
    }

    .row {
      height: 42px;
      padding-left: 5%;
      padding-right: 5%;
      display: flex;
      align-items: center;

      &:first-child {
        margin-top: 8px;
      }

      &:last-child {
        margin-bottom: 8px;
      }

      &--info {
        height: 60px;
        margin-top: 0 !important;

        &__avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-right: 6%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        &__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        &__name {
          display: block;
          margin-bottom: 8px;
        }

        &__lvl {
          color: #909399;
          font-size: 14px;
        }
      }

      &__icon {
        font-size: 20px;
        margin-right: 12%;
      }

      &__title {
        font-size: 14px;
      }
    }
  }
}
</style>
