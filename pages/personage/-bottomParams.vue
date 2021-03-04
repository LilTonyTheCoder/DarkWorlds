<template>
  <el-collapse
    v-model="activeNames"
    @input="scrollToBottom"
  >
    <el-collapse-item
      title="Параметры"
      name="1"
      class="info__params"
    >
      <div
        v-for="(param, index) in paramsToShow"
        :key="index"
        :class="`personage-page__param-row param-row param-row--${param}`"
      >
        <div> {{ paramNameByKey(param) }} </div>
        <div>
          <b>
            + {{ allWearedModificators[param] }}
          </b>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import userItems from '~/mixins/user-items.js'
import { getNameByKey } from '~/helpers/paramsNames.js'

export default {
  name: 'PersonagePageBottomParams',

  mixins: [
    userItems,
  ],

  data() {
    return {
      activeNames: [],

      paramsToShow: [
        'hp',
        'pw',
        'min_damage',
        'max_damage',
        'armor_head',
        'armor_body',
        'armor_waist',
        'armor_legs',
        'crit',
        'a_crit',
        'uvorot',
        'a_uvorot',
      ],
    }
  },

  methods: {
    paramNameByKey(key) {
      return getNameByKey(key)
    },

    scrollToBottom() {
      if (this.activeNames.length > 0) {
        this.$emit('scrollToBottom')
      }
    },
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

      .param-row {
        display: flex;
        justify-content: space-between;

        &--hp, &--crit, &--a_crit {
          color: #F56C6C;
        }

        &--pw, &--uvorot, &--a_uvorot {
          color: #409EFF;
        }

        &--max_damage, &--pw, &--armor_legs {
          border-bottom: 1px solid $base-border;
        }
      }
    }
  }
}
</style>
