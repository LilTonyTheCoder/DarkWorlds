<template>
  <div class="clothes-item">
    <div class="clothes-item__left">
      <img
        :src="item.img"
        alt=""
      >
    </div>

    <div class="clothes-item__right">
      <b>
        {{ item.info.title }}
      </b>
      <br>

      Прочность: {{ item.durability }} / {{ item.info.maxDurability }}

      <br>

      <b>Требования:</b>
      <br>

      <div
        v-for="(reqProp, reqKey, reqIndex) in item.require"
        :key="`require ${reqIndex}`"
      >
        {{ reqKey }} : {{ reqProp }}
      </div>

      <b>Свойства:</b>

      <div
        v-for="(propProp, propKey, propIndex) in item.props"
        :key="`property ${propIndex}`"
      >
        {{ propKey }} : +{{ propProp }}
      </div>

      <br>

      <div v-if="buttonAction === 'default'">
        <el-button
          v-if="item.equippedIn"
          type="warning"
          round
          size="small"
          @click="undressItem(item.equippedIn)"
        >
          Снять
        </el-button>

        <div v-else>
          <el-button
            type="primary"
            round
            size="small"
            @click="dressItem(item.id, item.equippedIn)"
          >
            Надеть
          </el-button>
          <br>
          <!-- {{ dressTextToMultiType(item.id) }} -->
        </div>
      </div>

      <div v-if="buttonAction === 'throwItem'">
        <el-button
          round
          size="small"
          @click="throwItem(item.id)"
        >
          Выбросить
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BlockClothesItem',

  props: {
    item: {
      default: () => {},
      type: Object,
    },

    currentActiveTitle: {
      default: '',
      type: String,
    },

    buttonAction: {
      type: String,

      /**
       * @type {string} string with accepted values:
       * @value "default" - put on / take off item
       * @value "throwItem" - throw item from inventory
       */
      default: 'default',
    },
  },

  computed: {
    ...mapState({
      userEquip: state => state.user.equipped,
    }),
  },

  methods: {
    undressItem(equippedIn) {
      this.userUndress(equippedIn)
      this.$emit('close')
    },

    dressItem(itemId) {
      // For multi type: ring, stone, etc.
      Object.keys(this.userEquip).forEach((objKey) => {
        if (this.userEquip[objKey] === itemId) {
          this.userUndress(objKey)
        }
      })

      this.userDress({ type: this.currentActiveTitle, id: itemId })

      this.$emit('close')
    },

    throwItem(itemId) {
      this.throwItemFromInventory(itemId)
    },

    ...mapMutations({
      userDress: 'user/DRESS_ITEM',
      userUndress: 'user/UNDRESS_ITEM',
      throwItemFromInventory: 'user/THROW_ITEM_FROM_INVENTORY',
    }),
  },
}
</script>

<style lang="scss">
.clothes-item {
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &__left {
    width: 90px;
  }

  &__right {
    width: calc(100% - 90px);
  }
}
</style>
