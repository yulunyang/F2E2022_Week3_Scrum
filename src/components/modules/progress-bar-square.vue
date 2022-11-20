<template>
  <section>
    <div class="bar-steps flex">
      <div class="step step-active" v-for="n in points" :key="n"></div>
      <div class="step step-active-future" v-for="n in addPoints" :key="n"></div>
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
    },
    addPoints: {
      type: Number,
      default: 0
    }
  },
  computed: {
    calcRemainNum () {
      return 20 - this.points - this.addPoints
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
.step-active-future {
  width: 24.2px;
  height: 32px;  
  background: linear-gradient(0deg, rgba(255, 242, 5, 0.2), rgba(255, 242, 5, 0.2)), #464B55;
  margin-right: 0.6rem;
}
</style>