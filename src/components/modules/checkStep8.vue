<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="checkStep8 w-full h-screen fixed top-0 left-0">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
      <div class="flex justify-center mb-10 text-white w-full container mx-auto">
        <div class="">
          <div class="mb-8"><img src="@/assets/img/role3.png" class="object-contain -scale-x-100 mx-auto" /></div>

          <div v-show="result.finish && result.sort">
            <p class="text-4xl mb-8 leading-loose">你做得非常好！<br/>
              你已經了解短衝的流程，<br/>
              接下來再繼續挑戰吧！</p>
            <a @click="nextStep" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
              <p class="z-10">前往下個挑戰</p>
            </a>
          </div>
          <div v-show="!result.finish || !result.sort">
            <p class="text-4xl mb-8 leading-loose">差一點！<br/>
              再思考一下流程，你可以的！</p>
            <a @click="closeCheckStep()" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
              <p class="z-10">再試試看</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: { },
  props: {
    result: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    closeCheckStep () {
      this.$emit('closeCheckStep')
    },
    nextStep () {
      this.$emit('nextStep', 9)
    }
  }
}
</script>
<style lang="scss" scoped>
  .checkStep8 {
    background: rgb(24, 30, 42, 0.8);
    z-index: 9999;
  }
</style>