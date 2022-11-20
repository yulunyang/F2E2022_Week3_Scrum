<template>
  <section>
    <div class="bar-steps flex">
      <div class="step step-active" v-for="n in points" :key="n"></div>
      <div class="step step-normal" v-for="n in calcRemainNum" :key="n"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: "progress-bar-square",
  components: { },
  data () {
    return {
    }
  },
  props: {
    points: {
      type: Number,
      default: 0
    }
  },
  computed: {
    calcRemainNum () {
      if (this.points > 0) {
        return 20 - this.points
      } else {
        return 20
      }
    }
  }
};
</script>
<style scoped lang="scss">
.step {
  width: 24.2px;
  height: 32px;
  margin-right: 0.6rem;
}
.step-normal {
  width: 24.2px;
  height: 32px;
  background: #464B55;
  margin-right: 0.6rem;
}
.step-active {
  width: 24.2px;
  height: 32px;
  background: yellow;
  margin-right: 0.6rem;
}
</style>