<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div class="flex justify-center container mx-auto ">
    <div class="w-1/2 p-4">
      <div class="scrum-bg-black p-3">
        <h6 class="text-3xl text-white text-left">產品待辦清單
          <span class="text-lg">Product Backlog</span>
        </h6>
      </div>
    </div>
    <div class="w-1/2 p-4">
      <div class="scrum-bg-black p-3">
        <div class="flex justify-between items-end mb-4">
          <h6 class="text-3xl text-white">開發 A 組的短衝待辦清單
          </h6>
          <span class="text-lg scrum-text-yellow">20 點 / 5 人</span>
        </div>
        <ProgressBarSquare />
      </div>
    </div>
  </div> -->
  <CardList />
  <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50">
    <div class="flex">
      <a @click="setStep(4)" class="cursor-pointer"><img src="@/assets/img/CTA-arrow-left.png" class="object-contain" /></a>
      <a @click="setStep(6)" class="cursor-pointer"><img src="@/assets/img/CTA-ready.png" class="object-contain" /></a>
    </div>
  </div>
</template>

<script>
// import ProgressBarSquare from '@/components/modules/progress-bar-square'
import CardList from '@/components/cardList2.vue'
export default {
  components: {
    // ProgressBarSquare,
    CardList
    
    },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    setStep (val) {
      this.$emit('setStep', val)
    }
  }
}
</script>
<style>
</style>