<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cursor-move my-2 mx-4 pock-card">
    <div class="p-4 space-y-2">
      <div class="w-auto">{{ item.data }}</div>
      <!-- <p class="text-xl">{{ item.data }}</p> -->
      <!-- <p class="text-sm" v-if="item.text">{{ item.text }}</p> -->
    </div>
  </div>
</template>
<!-- eslint-disable vue/multi-word-component-names -->
<script>

export default {
  name: "Cards",
  props: {
    item: Object,
  },
};
</script>

<style scoped lang="scss">
.pock-card {
  border: 6px solid #FF52A5;
  background: #2F343F;
  color: white;
  &:active {
    background: rgba(255, 17, 119, 0.1);
  }
}
</style>