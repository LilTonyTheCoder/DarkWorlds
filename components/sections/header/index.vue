<template>
  <div class="app-header">
    <div class="app-header__line app-header__line--with-title">
      <span class="app-header__top-icon">
        <el-button>
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
export default {
  name: 'HeaderCompo',
}
</script>

<style lang="scss">
.app-header {
  width: 100%;
  padding: 8px 3% 8px;
  font-size: 32px;
  background: #fff;

  &__line {
    width: 100%;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    &--with-title {

      .el-button {
        border: 0;
        font-size: 32px;
      }
    }

    &--buttons {
      display: flex;
      justify-content: space-between;

      .el-button {
        width: 31%;
        font-size: 32px;
      }

      &__button-inner {
        display: flex;
        color: #000;
      }

      &__info {
        font-size: 16px;
        margin-left: 8% !important;
        text-align: left;

        .current {
          font-size: 20px;
          font-weight: normal;
        }

        .max {
          color: #606266;
        }
      }
    }
  }

  &__top-icon {
    margin-right: 3%;
  }
}
</style>
