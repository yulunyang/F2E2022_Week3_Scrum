<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-4">
    <CardList />
    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50 ">
      <div class="flex">
        <a @click="setStep(4)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
          <p class="z-10">&lt;</p>
        </a>
        <a @click="setStep(6)" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
          <p class="z-10">準備好了！開始 Sprint</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/cardList2.vue'
export default {
  components: {
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