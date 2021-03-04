<template>
  <div>
    <div
      v-for="(item, index) in clothes"
      :key="`clothes ${index}`"
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
      custom-class="personage-page__dialog dialog"
      :visible.sync="dialogVisible"
    >
      <BlockClothesItem
        v-for="(item, index) in dialogInnerItems"
        :key="`dialog item ${index}`"
        :item="item"
        :current-active-title="currentActive.title"
        @close="closeDialog"
      />
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import userItems from '~/mixins/user-items.js'
import { armorNameMatch } from '~/helpers/paramsNames.js'

export default {
  name: 'UserClothesSection',

  components: {
    BlockClothesItem: () => import('@/components/blocks/clothes-item'),
  },

  mixins: [
    userItems,
  ],

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

      dialogInnerItems: [],

      currentActive: {
        type: null,
        title: null,
      },
    }
  },

  computed: {
    isMultiType() {
      return this.currentActive.type !== this.currentActive.title
    },

    typeToNameMatch() {
      return armorNameMatch
    },

    ...mapState({
      userEquip: state => state.user.equipped,
    }),
  },

  methods: {
    showItemsToWear(title, type = title) {
      this.currentActive.type = type
      this.currentActive.title = title

      this.dialogInnerItems = this.allUserItemsExpanded.filter(el => el.type === type)

      this.dialogInnerItems = this.dialogInnerItems.map((item) => {
        const equippedIn = (this.userEquip[this.currentActive.title] === item.id) ? this.currentActive.title : null

        return {
          ...item,
          equippedIn,
        }
      })

      this.dialogTitle = this.typeToNameMatch[type]
      this.dialogVisible = true
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

    closeDialog() {
      this.dialogVisible = false
    },
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
