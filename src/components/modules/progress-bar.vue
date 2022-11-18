<template>
  <div class="progress-bar fixed top-0 left-0 w-full z-50">
    <div class="progress-bar-inner absolute bottom-0 w-full left-0"></div>

    <div class="progress-bar-main absolute top-0 w-3/12 left-0" v-if="step > 1" :style="`width: ${calcWidth}%;`">
      <div class="progress-bar-main-inner absolute top-0 w-full left-0"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "progress-bar",
  components: { },
  data () {
    return {
    }
  },
  props: {
    step: {
      type: Number
    }
  },
  computed: {
    calcWidth () {
      if (this.step > 0) {
        return ((this.step - 1) / 8) * 100
      } else {
        return 0
      }
    }
  }
};
</script>
<style scoped lang="scss">
.progress-bar {
  height: 48px;
  background: #454545;
  .progress-bar-inner {
    background: rgb(0, 0, 0, 0.4);
    height: 16px;
  }
  .progress-bar-main {
    background: rgb(6, 147, 227,0.4);
    height: 48px;
    &::after {
      content: '';
      background-image: url('@/assets/img/Rocket.png');
      background-repeat: no-repeat;
      width: 76px;
      height: 48px;
      position: absolute;
      right: -46px;
      bottom: 0%;
      z-index: 99;
    }
  }
  .progress-bar-main-inner {
    background: #0693E3;
    height: 32px;
    position: absolute;
    z-index: 98;
  }
}
</style>