<template>
  <div class="app-header">
    <div class="app-header__line app-header__line--with-title">
      <span class="app-header__top-icon">
        <el-button
          @click="toggleLeftMenu"
        >
          <i class="el-icon-s-unfold" />
        </el-button>

      </span>

      <span class="app-header__title">
        CircleOfLife
      </span>
    </div>

    <div class="app-header__line app-header__line--buttons">
      <el-button round>
        <div class="app-header__line--buttons__button-inner">
          <i class="el-icon-user" />
          <span class="app-header__line--buttons__info">
            <span class="current">396</span>
            <br>
            <span class="max">396</span>
          </span>
        </div>
      </el-button>

      <el-button round>
        <div class="app-header__line--buttons__button-inner">
          <i class="el-icon-sugar" />
          <span class="app-header__line--buttons__info">
            <span class="current">57</span>
            <br>
            <span class="max">57</span>
          </span>
        </div>
      </el-button>

      <el-button round>
        <div class="app-header__line--buttons__button-inner">
          <i class="el-icon-coin" />
          <span class="app-header__line--buttons__info">
            <span class="current">28</span>
            <br>
            <span class="max">107</span>
          </span>
        </div>
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'HeaderCompo',

  methods: {
    ...mapMutations({
      toggleLeftMenu: 'leftMenu/TOGGLE_LEFT_MENU',
    }),
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

    &:last-child {
      margin-bottom: 0;
    }

    &--with-title {

      .el-button {
        border: 0;
        font-size: 20px;
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
</style>
