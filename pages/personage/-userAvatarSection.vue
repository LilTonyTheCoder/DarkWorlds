<template>
  <div
    class="personage-page__avatar avatar"
  >
    <img
      :src="userCommon.avatar"
      alt="user avatar"
      @click="handleAvatarClick"
    >

    <el-dialog
      title="Выбор образа"
      top="2vh"
      custom-class="personage-page__dialog avatar__dialog"
      :visible.sync="dialogVisible"
    >
      <div
        v-for="(item, index) in dialogInnerItems"
        :key="index"
        class="avatar__item"
      >
        <img
          :src="item"
          alt="выбрать аватар"
          @click="changeAvatar(item)"
        >
        <!-- <button
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
        </div> -->

        <br><br>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'UserAvatarSection',

  data() {
    return {
      dialogVisible: false,
    }
  },

  computed: {
    dialogInnerItems() {
      const { userSettings } = this
      const avatarsUrls = userSettings.availableAvatars.map((el) => {
        return `/images/avatars/${userSettings.gender}/common/${el}`
      })

      return avatarsUrls
    },

    ...mapState({
      userCommon: state => state.user.common,
      userSettings: state => state.user.settings,
    }),
  },

  methods: {
    handleAvatarClick() {
      this.dialogVisible = true
    },

    changeAvatar(avatarUrl) {
      this.putOnAvatar(avatarUrl)
      this.dialogVisible = false
    },

    ...mapMutations({
      putOnAvatar: 'user/PUT_ON_AVATAR',
    }),
  },
}
</script>

<style lang="scss">
.personage-page {
  .personage-page__avatar {
    line-height: 0;
  }

  .avatar {
    &__dialog {
      .el-dialog__body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }

    &__item {
      width: 30%;
      opacity: 0.5;
      transition: .3s;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
