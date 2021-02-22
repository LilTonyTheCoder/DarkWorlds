<template>
  <div>
    <div
      v-for="(item, index) in clothes"
      :key="index"
      :class="[
        'inventory__item',
        item.styleClass
      ]"
      @click="showItemsToWear(item.title, item.type)"
    >
      <img
        v-if="!userEquip[item.title]"
        :src="`/images/items/default/char_${item.type || item.title}.gif`"
        :alt="item.type || item.title"
      >

      <img
        v-if="userEquip[item.title]"
        :src="getItem(userEquip[item.title]).img"
        :alt="item.type || item.title"
      >
    </div>

    <el-dialog
      :title="dialogTitle"
      top="2vh"
      custom-class="personage-page__dialog"
      :visible.sync="dialogVisible"
    >
      <div
        v-for="(item, index) in dialogInnerItems"
        :key="index"
      >
        {{ item.info.title }}
        <br>
        {{ item }}
        <br>

        <button
          v-if="showUndressButton(item.id)"
          @click="undressItem"
        >
          Снять
        </button>

        <div v-else>
          <button
            @click="dressItem(item.id)"
          >
            Надеть
          </button>

          {{ dressTextToMultiType(item.id) }}
        </div>

        <br><br>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getItemById } from '~/backendInfo/items.js'

export default {
  name: 'UserClothesSection',

  props: {
    clothes: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      dialogVisible: false,
      dialogTitle: 'title',

      typeToNameMatch: { // TODO - в utils это
        helmet: 'Шлем',
        weapon: 'Оружие',
        armor: 'Броня',

        earrings: 'Серьги',
        necklace: 'Ожерелье',
        gloves: 'Перчатки',
        bracelets: 'Наручи',
        ring: 'Кольцо',
        shield: 'Щит',
        boots: 'Ботинки',
        belt: 'Пояс',

        stone: 'Камень',
      },

      dialogInnerItems: [],

      currentActive: {
        type: null,
        title: null,
      },
    }
  },

  computed: {
    allUserItemsExpanded() {
      const arr = []

      this.userInventory.forEach(id => {
        arr.push({
          id,
          ...this.getItem(id),
        })
      })

      return arr
    },

    isMultiType() {
      return this.currentActive.type !== this.currentActive.title
    },

    ...mapState({
      userEquip: state => state.user.equipped,
      userInventory: state => state.user.inventory,
    }),
  },

  methods: {
    showItemsToWear(title, type = title) {
      this.currentActive.type = type
      this.currentActive.title = title

      this.dialogInnerItems = this.allUserItemsExpanded.filter(el => el.type === type)

      console.log(this.dialogInnerItems)

      this.dialogTitle = this.typeToNameMatch[type]
      this.dialogVisible = true
    },

    getItem(id) {
      return getItemById(id)
    },

    undressItem() {
      this.userUndress(this.currentActive.title)
    },

    dressItem(itemId) {
      if (this.isMultiType) {
        Object.keys(this.userEquip).forEach((objKey) => {
          if (this.userEquip[objKey] === itemId) {
            this.userUndress(objKey)
          }
        })

        this.userDress({ type: this.currentActive.title, id: itemId })
      } else {
        this.userDress({ type: this.currentActive.type, id: itemId })
      }
    },

    showUndressButton(itemId) {
      if (this.isMultiType) {
        return this.userEquip[this.currentActive.title] === itemId
      } else {
        return this.userEquip[this.currentActive.type] === itemId
      }
    },

    dressTextToMultiType(itemId) {
      let outputText = ''

      Object.keys(this.userEquip).forEach((objKey) => {
        if (this.userEquip[objKey] === itemId) {
          outputText = `( снимется со слота ${objKey} )`
        }
      })

      return outputText
    },

    ...mapMutations({
      userDress: 'user/DRESS_ITEM',
      userUndress: 'user/UNDRESS_ITEM',
    }),
  },
}
</script>

<style lang="scss">
.personage-page {
  .inventory {
    width: 30%;
    max-width: 75px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    &--left {
      justify-content: flex-end;

      .inventory__item {
        text-align: right;
      }
    }

    &--right {
      justify-content: flex-start;

      .inventory__item {
        text-align: left;
      }
    }

    &--avatar {
      width: 40%;
      max-width: 105px;

      img {
        max-width: 100%;
        max-height: 210px;
      }
    }

    &--w100 {
      width: 100%;
      max-width: 100%;
      flex-direction: row;

      img {
        background: #dedede;
      }

      .inventory__item {
        width: auto;
      }
    }

    &__item {
      height: 35px;
      width: 100%;
      text-align: center;
      left: 0;
      font-size: 0;
      margin: 0;
      padding: 0;
      border: none;
      max-width: 70px;
      row-gap: 0;
      column-gap: 0;

      img {
        max-width: 100%;
        max-height: 100%;
        background: #dedede;
      }

      &--ring {
        width: 35px;

        &--grow {
          flex-grow: 1;
        }
      }

      &--helmet, &--boots {
        img {
          width: 70px;
        }
      }

      &--double {
        height: 70px;
      }

      &--triple {
        height: 105px;
      }
    }

    &__runes {
      display: flex;
    }
  }
}
</style>
