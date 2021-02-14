<template>
  <div class="main-page personage-page">
    <div class="personage-page__wrapper">
      <UserClothesSection
        class="personage-page__inventory inventory inventory--left"
        :clothes="leftSideItems"
      />

      <div class="personage-page__inventory inventory inventory--avatar">
        <div class="inventory__item inventory__item--runes">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
        </div>
        <img
          :src="userCommon.avatar"
          alt="user avatar"
        >
        <div class="inventory__item inventory__item--runes">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
          <img src="images/items/default/char_rune.gif" alt="">
        </div>
      </div>

      <UserClothesSection
        class="personage-page__inventory inventory inventory--right"
        :clothes="rightSideItems"
      />

      <UserClothesSection
        class="personage-page__inventory inventory inventory--w100"
        :clothes="stones"
      />
    </div>

    <div class="personage-page__info info">

      <PersonageStats />

      <BottomParams />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'PersonagePage',

  components: {
    BottomParams: () => import('./-bottomParams.vue'),
    PersonageStats: () => import('./-personageStats.vue'),
    UserClothesSection: () => import('./-userClothesSection.vue'),
  },

  data() {
    return {
      itemsTest: 'prototypes',

      leftSideItems: [
        { title: 'helmet', styleClass: 'inventory__item--helmet' },
        { title: 'weapon', styleClass: 'inventory__item--double' },
        { title: 'armor', styleClass: 'inventory__item--triple' },
        { title: 'r1', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
        { title: 'r2', type: 'ring', styleClass: 'inventory__item--ring' },
        { title: 'belt' },
      ],

      rightSideItems: [
        { title: 'earring' },
        { title: 'necklace' },
        { title: 'bracelet' },
        { title: 'gloves' },
        { title: 'shield', styleClass: 'inventory__item--double' },
        { title: 'r3', type: 'ring', styleClass: 'inventory__item--ring' },
        { title: 'r4', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
        { title: 'boot', styleClass: 'inventory__item--boots' },
      ],

      stones: [
        { title: 'stone1', type: 'stone' },
        { title: 'stone2', type: 'stone' },
        { title: 'stone3', type: 'stone' },
        { title: 'stone4', type: 'stone' },
        { title: 'stone5', type: 'stone' },
        { title: 'stone6', type: 'stone' },
        { title: 'stone7', type: 'stone' },
      ],
    }
  },

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
    }),
  },

  created() {
    this.changeHeaderAction('goToMainPage')
    this.changeHeaderTitle(`${this.userCommon.name} [${this.userCommon.lvl}]`)
    this.changeHeaderBottom('personage')
  },

  methods: {
    ...mapMutations({
      changeHeaderAction: 'header/CHANGE_MAIN_BUTTON_ACTION',
      changeHeaderTitle: 'header/CHANGE_TITLE',
      changeHeaderBottom: 'header/CHANGE_BOTTOM_SECTION',
    }),
  },
}
</script>

<style lang="scss">
.personage-page {
  &__wrapper {
    display: flex;
    padding-top: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .info {
    padding-top: 10px;
    padding-left: 3%;
    padding-right: 3%;
    line-height: 24px;
    font-size: 14px;
  }

  &__dialog {
    width: 90%;
  }
}
</style>
