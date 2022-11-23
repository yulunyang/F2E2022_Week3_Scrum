<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cursor-move my-2 mx-4 pock-card">
    <div class="p-4 px-6 space-y-2 text-left">
      <p class="text-xl">{{ item.data }}</p>
      <p class="text-sm" v-if="item.text">{{ item.text }}</p>
    </div>
  </div>
</template>
<!-- eslint-disable vue/multi-word-component-names -->
<script>

export default {
  name: "Cards",
  props: {
    item: Object,
  }
};
</script>

<style scoped lang="scss">
.pock-card {
  border: 6px solid #FFF205;
  background: #2F343F;
  color: white;
  &:active {
    background: #FFF205;
    color: #454545;
    border: 6px solid #ffffff;
    .point-text {
      color: #454545;
    }
    .points {
      width: 8px;
      height: 8px;
      background: #454545;
    }
  }
  .points {
    width: 8px;
    height: 8px;
    background: #FFF205;
  }
}
</style>