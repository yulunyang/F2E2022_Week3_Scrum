<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="checkStep8 w-full h-screen fixed top-0 left-0">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
      <div class="flex justify-center mb-10 text-white w-full container mx-auto">
        <div class="">
          <div class="mb-8"><img src="@/assets/img/role3.png" class="object-contain -scale-x-100 mx-auto" /></div>

          <div v-show="result">
            <p class="text-4xl mb-8 leading-loose">你做得非常好！<br/>
              你已經了解如何給予『正面表述』的回饋！</p>
              <a @click="nextStep()" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
                <p class="z-10">完成挑戰</p>
              </a>
          </div>
          <div v-show="!result">
            <p class="text-4xl mb-8 leading-loose">差一點！<br/>
              請你再思考看看，哪一些是符合『正面表述』的回饋？</p>
              <a @click="closeCheckStep4()" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
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
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    closeCheckStep4 () {
      this.$emit('closeCheckStep4')
    },
    nextStep () {
      this.$emit('setStep', 9)
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