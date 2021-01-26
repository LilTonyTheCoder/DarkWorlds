<template>
  <div class="app-header__line app-header__line--buttons">
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
</template>

<script>
export default {
  name: 'DefaultHeaderBottom',
}
</script>

<style lang="scss">

</style>
