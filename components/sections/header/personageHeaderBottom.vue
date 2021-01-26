<template>
  <div class="app-header__line app-header__line--buttons app-header__line--personage-page">
    <el-button>
      <NuxtLink to="/personage">
        Персонаж
      </NuxtLink>
    </el-button>

    <el-button>
      <NuxtLink to="/personage/skills">
        Умения
      </NuxtLink>
    </el-button>

    <el-button>
      <NuxtLink to="/personage/bag">
        Сумка
      </NuxtLink>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'PrsonageHeaderBottom',
}
</script>

<style lang="scss">

</style>
