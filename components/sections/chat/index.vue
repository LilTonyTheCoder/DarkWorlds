<template>
  <div class="main-chat">
    <div>19:22 <b>Чемпион:</b> привет мир</div>
    <div>19:22 <b>bender:</b> а я сгибаю мир</div>
    <div>19:24 <b>bender:</b> кстати, я офф</div>

    <div class="main-chat__release">
      v 0.003
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatSection',
}
</script>

<style lang="scss">
.main-chat {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #eee;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: -1;

  font-size: 14px;
  padding: 0 1%;

  &__release {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 7px 12px;
    background: #fff;
    border: 1px dashed #848484;
  }
}
</style>
