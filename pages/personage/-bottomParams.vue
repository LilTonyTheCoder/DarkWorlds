<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      title="Параметры"
      name="1"
      class="info__params"
    >
      <div>
        <div>Уровень жизни:</div>
        <div>205</div>
      </div>
      <div>Уровень выносливости:</div>
      <hr>
      <div>Урон:</div>
      <hr>
      <div>Броня головы:</div>
      <div>Броня корпуса:</div>
      <div>Броня пояса:</div>
      <div>Броня ног:</div>
      <hr>
      <div>Критический удар:</div>
      <div>Против критич-го удара:</div>
      <div>Увертывание:</div>
      <div>Против Увертывания:</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'PersonagePageBottomParams',

  data() {
    return {
      activeNames: [],
    }
  },
}
</script>

<style lang="scss">
.personage-page {
  .info {
    .el-collapse-item__header {
      font-size: 14px;
      color: $regular-text;
      height: 60px;
    }

    .el-collapse-item__content {
      line-height: 34px;

      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
