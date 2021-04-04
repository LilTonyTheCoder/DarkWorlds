<template>
  <div class="main-page__wrapper">
    <el-card class="main-page__info info">
      <div class="info__map-wrapper">
        <div
          class="info__map-inner"
          :style="[
            {height: `${(mapArray.length+1) * blockParams.height}px`},
            {marginTop: `${(userPosition.y - mapArray.length/2) * -blockParams.height - 10}px`},
            {marginLeft: `${(userPosition.x - mapArray[0].length/2) * -blockParams.width - blockParams.width/2}px`}
          ]"
        >
          <div
            v-for="(row, rowIndex) in mapArray"
            :key="`rowIndex ${rowIndex}`"
            class="info__row"
            :style="`width: ${blockParams.width * row.length}px`"
          >
            <div
              v-for="(block, blockIndex) in row"
              :key="`blockIndex ${blockIndex}`"
              class="info__block block"
              :style="[
                {width: `${blockParams.width}px`},
                {height: `${blockParams.height}px`}
              ]"
            >
              <template v-if="block.area !== 'empty'">
                <div
                  :data-area-name="block.area"
                  class="block__border"
                />

                <div
                  v-if="userPosition.x === blockIndex && userPosition.y === rowIndex"
                  class="block__current-position"
                />

                <img
                  v-if="areaIconMatch.get(block.area) !== 'no-image'"
                  :src="`/images/map/${areaIconMatch.get(block.area)}.png`"
                  alt=""
                  class="block__icon"
                >

                <template v-if="block.possibleMoves">
                  <div
                    v-if="block.possibleMoves.includes('b')"
                    class="block__no-border block__no-border--b"
                  />
                  <div
                    v-if="block.possibleMoves.includes('t')"
                    class="block__no-border block__no-border--t"
                  />
                  <div
                    v-if="block.possibleMoves.includes('l')"
                    class="block__no-border block__no-border--l"
                  />
                  <div
                    v-if="block.possibleMoves.includes('r')"
                    class="block__no-border block__no-border--r"
                  />
                </template>

                <template v-else>
                  <div class="block__no-border block__no-border--b" />
                  <div class="block__no-border block__no-border--t" />
                  <div class="block__no-border block__no-border--l" />
                  <div class="block__no-border block__no-border--r" />
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="info__title">
        Змеиная поляна
      </div>

      <div class="info__text">
        Лесная поляна, залитая солнцем, облюбованная греющимися змеями.
        Изредка сюда из леса заглядывают и древни, однако ни те, ни другие особой опасности не представляют.
      </div> -->
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MapSection',

  props: {
    mapArray: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      blockParams: {
        width: 30, // (*1)
        height: 30, // (*1)
      },

      areaIconMatch: {
        ground: 'no-image',

        star: 'star',
        shop: 'shop',
        port: 'port',
        library: 'library',
        circle: 'circle',
        'exclusive-shop': 'exclusive-shop',
        sword: 'sword',
        shield: 'shield',
        cleaning: 'cleaning',
        beer: 'beer',
        key: 'key',
        dollar: 'dollar',
        hat: 'hat',
        battle: 'battle',
        clothes: 'clothes',
        ring: 'ring',

        get(prop) {
          return this[prop] ? this[prop] : 'in-progress'
        },
      },
    }
  },

  computed: {
    ...mapState({
      userPosition: state => state.user.position,
    }),
  },
}
</script>

<style lang="scss">
/**
  (80 / 100) / 3 = 2.6667
  30px (*1) - depends on blockParams.width
 */
$border-param: 30px * 0.26667;

.main-page {
  &__wrapper {
    .info {
      margin-bottom: 20px;

      .el-card__body {
        padding: 0;
      }

      &__title {
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: bold;
      }

      &__text {
        font-size: 12px;
        color: $secondary-text;
      }

      &__map-wrapper {
        height: 240px; // 140
        position: relative;
        overflow: hidden;
        background: #c1bcad;
      }

      &__map-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgb(193, 188, 173);
        padding: 10px;
        height: 300px;
      }

      &__row {
        display: flex;
      }

      .block {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &__current-position {
          border-radius: 50%;
          background: rgba(255,255,255, .5);
          width: 70%;
          height: 70%;
          position: absolute;
          top: 15%;
          left: 15%;
          z-index: 10;
        }

        &__icon {
          width: 50%;
          height: 50%;
        }

        &__border {
          position: absolute;
          width: 80%;
          height: 80%;
          border: 1px solid #000;
          top: 10%;
          left: 10%;
          border-radius: 5px;
        }

        &__no-border {
          background: #c1bcad;
          position: absolute;

          &--b {
            left: 33%;
            width: 33%;
            height: 2px;
            bottom: 10%;

            &::before {
              content: "";
              position: absolute;
              left: 0;
              top: 1px;
              width: 1px;
              height: $border-param;
              background: #000;
            }

            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 1px;
              width: 1px;
              height: $border-param;
              background: #000;
            }
          }

          &--t {
            width: 33%;
            left: 33%;
            height: 2px;
            top: 10%;
          }

          &--l {
            left: 3px;
            height: 33%;
            top: 33%;
            left: 10%;
            width: 2px;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 1 - $border-param;
              height: 1px;
              width: $border-param;
              background: #000;
            }

            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 1 - $border-param;
              height: 1px;
              width: $border-param;
              background: #000;
            }
          }

          &--r {
            height: 33%;
            top: 33%;
            right: 10%;
            width: 2px;
          }
        }
      }
    }
  }
}
</style>
