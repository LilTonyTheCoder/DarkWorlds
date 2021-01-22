<template>
  <div class="main-page__stuff stuff">
    <el-collapse v-model="activeNames">
      <el-collapse-item
        title="Разбросанные вещи"
        name="1"
      >
        <div
          v-for="(item, index) in fallenItems"
          :key="index"
          :class="[
            'stuff__item item item',
            { 'item--active': expandedStuff.includes(index) },
          ]"
          @click="expandStuff(index)"
        >
          <div class="item__img">
            <img src="/images/items/3.gif" alt="">
          </div>

          <div class="item__info info">
            <div class="info__name">
              {{ item.name }}
            </div>

            <div class="info__other">
              <span> {{item.description}} </span>
              <span> Масса: {{item.weight}} </span>
            </div>

          </div>
        </div>
      </el-collapse-item>

      <el-collapse-item
        title="Монстры"
        name="2"
      >
        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'BottomExpanders',

  data() {
    return {
      activeNames: ['1'],

      fallenItems: [
        { id: '9b4eea689', name: "Змеиная шкура", description: "Некоторые верят, что змеиные шкурки обладают скрытой магической силой.", weight: 1, img: 'snake-skin.png' },
        { id: '844d0bcee', name: "Увесистая дубина", description: "Тяжелая неудобная дубина. Не пригодна для использования людьми, а жаль.", weight: 6, img: 'big-club.png' },
        { id: '68bb8608d', name: "Хитин", description: "Тяжелая неудобная дубина. Не пригодна для использования людьми, а жаль.", weight: 6, img: 'big-club.png' },
      ],

      expandedStuff: [0],
    }
  },

  methods: {
    expandStuff(index) {
      const indexInArray = this.expandedStuff.indexOf(index)

      if (indexInArray > -1) {
        this.expandedStuff.splice(indexInArray, 1)
      } else {
        this.expandedStuff.push(index)
      }
    },
  },
}
</script>

<style lang="scss">
.main-page {
  .stuff {
    display: block;

    .el-collapse-item__header, &__item {
      padding-left: 5%;
      padding-right: 5%;
      height: 60px;
      font-size: 14px;
      color: #606266;
    }

    .item {
      display: flex;
      align-items: center;
      color: #000;
      display: flex;
      transition: .3s;

      &--active {
        height: auto;
        align-items: flex-start;
        margin-bottom: 16px;

        .item__img {
          opacity: 1;
          margin-right: 3%;
          width: 70px;
          height: 70px;
        }

        .info .info__other {
          width: auto;
          height: auto;
          opacity: 1;
        }
      }

      &__img {
        margin-right: 0;
        opacity: 0;
        width: 0;
        height: 0;

        transition: .3s;
      }

      .info {
        &__other {
          width: 0;
          height: 0;
          opacity: 0;

          font-size: 12px;
          color: #909399;
          transition: .3s;

          span {
            display: block;
          }
        }
      }
    }
  }
}
</style>
