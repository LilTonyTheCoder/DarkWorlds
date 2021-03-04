import { mapState } from 'vuex'
import { getItemById } from '~/backendInfo/items.js'
import { keyNameMatch } from '~/helpers/paramsNames.js'

export default {
  computed: {
    paramsToCalc() {
      return Object.keys(keyNameMatch)
    },

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

    onlyWearUserItemsExpanded() {
      return this.allUserItemsExpanded.filter((element) => {
        return Object.keys(this.userEquipped).findIndex((el) => {
          return this.userEquipped[el] === element.id
        }) !== -1
      })
    },

    allWearedModificators() {
      const outputArray = {}

      this.paramsToCalc.forEach((key) => {
        let value = 0

        this.onlyWearUserItemsExpanded.forEach(item => {
          value += item.props && item.props[key] || 0
        })

        outputArray[key] = value
      })

      return outputArray
    },

    ...mapState({
      userInventory: state => state.user.inventory,
      userEquipped: state => state.user.equipped,
    }),
  },

  methods: {
    getItem(id) {
      return getItemById(id)
    },
  },
}
