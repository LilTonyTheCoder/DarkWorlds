<template>
  <div class="main-page personage-page">
    <div class="personage-page__wrapper">
      <UserClothesSection
        class="personage-page__inventory inventory inventory--left"
        :clothes="leftSideItems"
      />

      <div class="personage-page__inventory inventory inventory--avatar">
        <UserClothesSection
          class="inventory__runes"
          :clothes="runesTop"
        />

        <UserAvatarSection />

        <UserClothesSection
          class="inventory__runes"
          :clothes="runesBottom"
        />
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
    UserAvatarSection: () => import('./-userAvatarSection.vue'),
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
        { title: 'earrings' },
        { title: 'necklace' },
        { title: 'bracelets' },
        { title: 'gloves' },
        { title: 'shield', styleClass: 'inventory__item--double' },
        { title: 'r3', type: 'ring', styleClass: 'inventory__item--ring' },
        { title: 'r4', type: 'ring', styleClass: 'inventory__item--ring inventory__item--ring--grow' },
        { title: 'boots', styleClass: 'inventory__item--boots' },
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

      runesTop: [
        { title: 'rune1', type: 'rune' },
        { title: 'rune2', type: 'rune' },
        { title: 'rune3', type: 'rune' },
      ],

      runesBottom: [
        { title: 'rune4', type: 'rune' },
        { title: 'rune5', type: 'rune' },
        { title: 'rune6', type: 'rune' },
      ],
    }
  },

  computed: {
    ...mapState({
      userCommon: state => state.user.common,
      userSettings: state => state.user.settings,
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
    line-height: 16px;
  }
}
</style>
