<template>
  <div class="main-chat">
    <div>19:22 <b>Чемпион:</b> привет мир</div>
    <div>19:22 <b>bender:</b> а я сгибаю мир</div>
    <div>19:24 <b>bender:</b> кстати, я офф</div>
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
}
</style>
