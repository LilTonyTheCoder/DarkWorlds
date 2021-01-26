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
            <img
              :src="`/images/loot/${item.img}`"
              alt=""
            >
          </div>

          <div class="item__info info">
            <div class="info__name">
              {{ item.name }}
            </div>

            <div class="info__other">
              <span> {{ item.description }} </span>
              <span> Масса: {{ item.weight }} </span>
            </div>

            <div class="info__controller">
              <el-button
                class="info__button"
                @click.stop.prevent="grabItem(index)"
              >
                Подобрать
              </el-button>
            </div>
          </div>
        </div>
      </el-collapse-item>

      <el-collapse-item
        title="Монстры"
        name="2"
      >
        <div
          v-for="(monster, index) in monsters"
          :key="index"
          class="stuff__monster monster"
        >
          <div class="monster__img">
            <img
              :src="`/images/loot/${monster.img}`"
              alt=""
            >
          </div>

          <div class="monster__info info">
            <div class="info__name">
              {{ monster.name }} [{{ monster.lvl }}]
            </div>
            <div class="info__other">
              <span>HP: {{ monster.hp }}</span>
              <span>Урон: {{ monster.min_damage }} - {{ monster.max_damage }}</span>
            </div>
          </div>

          <div class="monster__attack">
            <el-button>
              <i class="el-icon-ice-cream-round" />
            </el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'BottomExpanders',

  data() {
    return {
      activeNames: [],

      fallenItems: [
        { id: '9b4eea689', name: "Змеиная шкура", description: "Некоторые верят, что змеиные шкурки обладают скрытой магической силой.", weight: 1, img: 'snake_skin.png' },
        { id: '844d0bcee', name: "Увесистая дубина", description: "Тяжелая неудобная дубина. Не пригодна для использования людьми, а жаль.", weight: 6, img: 'wolf_tail.png' },
        { id: '68bb8608d', name: "Хитин", description: "Тяжелая неудобная дубина. Не пригодна для использования людьми, а жаль.", weight: 6, img: 'wooden_log.png' },
      ],

      expandedStuff: [],

      monsters: [
        {
          img: 'snake_skin.png',
          name: 'Лесная змея',
          lvl: 18,
          hp: 221,
          min_damage: 46,
          max_damage: 55,
        },

        {
          img: 'snake_skin.png',
          name: 'Лесная змея',
          lvl: 18,
          hp: 221,
          min_damage: 46,
          max_damage: 55,
        },
      ],
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

    grabItem(index) {
      console.log(index)
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
      color: $regular-text;
    }

    .el-collapse-item__content {
      padding-bottom: 0;
    }

    .item {
      display: flex;
      align-items: center;
      color: $black-color;
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

        .info .info__other,
        .info .info__controller {
          width: auto;
          height: auto;
          opacity: 1;

          button {
            display: block;
          }
        }
      }

      &__img {
        margin-right: 0;
        opacity: 0;
        width: 0;
        height: 0;

        transition: .3s;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .info {
        width: calc(100% - 70px);

        &__other {
          width: 0;
          height: 0;
          opacity: 0;

          font-size: 12px;
          color: $secondary-text;
          transition: .3s;

          span {
            display: block;
          }
        }

        &__controller {
          width: 0;
          height: 0;
          opacity: 0;
          text-align: right;

          button {
            display: none;
          }
        }
      }
    }

    .monster {
      height: 80px;
      display: flex;
      align-items: center;
      padding-left: 5%;
      padding-right: 5%;

      & + .monster {
        // border-top: 1px solid $lighter-border;
      }

      &__img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 1px solid $base-border;
        overflow: hidden;
        margin-right: 3%;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .info {
        flex-grow: 1;

        &__name {
          font-size: 14px;
          color: $black-color;
          font-weight: bold;
        }

        &__other {
          font-size: 14px;
          color:$regular-text;
          display: flex;

          span + span {
            margin-left: 8%;
          }
        }
      }

      &__attack button {
        font-size: 38px;
        border: 0;
        padding-right: 0;
      }
    }
  }
}
</style>
