<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <CheckStep8 v-if="checkList" @nextStep="nextStep" @closeCheckStep="closeCheckStep" /> -->
  <div class="w-full main-h relative step8 mt-4">
    <div class="flex container mx-auto mb-4">
      <div class="w-1/6 px-5"><img src="@/assets/img/role3.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center quote py-4 px-8 mb-2 scrum-bg-oliveGreen">
          <div class="text-white text-2xl text-left">
            <p>那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？</p>
          </div>
        </div>
        <div class="flex items-center quote py-4 px-8 scrum-bg-oliveGreen">
          <div class="text-white text-2xl text-left">
            <p>請你試著把左下方三個方塊，拖拉至正確的位置上。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <DragFlow />
    </div>

    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-20 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a @click="setStepHandle(6)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
          <p class="z-10">&lt;</p>
        </a>
        <a @click="setStepHandle(8)" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
          <p class="z-10">完成了～</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import CheckStep8 from '@/components/modules/checkStep8'
import DragFlow from '@/components/DragFlow'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'step8',
  components: {
    // CheckStep8,
    DragFlow
  },
  data () {
    return {
      checkList: false
    }
  },
  mounted () {},
  methods: {
    setStepHandle (val) {
      this.$emit('setStep', val)
    },
    closeCheckStep () {
      this.checkList = false
    },
    newList (newList) {
      this.fininshArray = newList
    },
    // nextStep () {
    //   this.setStepHandle(8)
    // }
  }
}
</script>
<style lang="scss" scoped>
  .active {
    color: #181E2A;
    background: #FFF205;
  }
</style>