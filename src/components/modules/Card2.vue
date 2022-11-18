<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cursor-move my-2 mx-4 pock-card">
    <div class="p-4 space-y-2 text-left">
      <p class="text-2xl">{{ item.data }}</p>
      <p class="text-sm" v-if="item.text">{{ item.text }}</p>
      <div class="scrum-text-yellow inline-flex items-center">
        <p class="mr-2">{{ item.points }}點</p>
        <div class="points mr-1" v-for="n in item.points" :key="n"></div>
      </div>
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
  }
  .points {
    width: 8px;
    height: 8px;
    background: #FFF205;
  }
}
</style>