<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full main-h relative step10 overflow-hidden mt-4">
    <FireWorks class="z-50" />
    <div class="absolute left-1/2 bottom-16 -translate-x-1/2 z-50 w-full">

      <div class="flex justify-center mb-16 text-white w-full container mx-auto">
        <div>
          <div class="mb-8"><img src="@/assets/img/Congrats.png" class="object-contain" /></div>
          <p class="text-5xl mb-8">恭喜通過 Scrum 新手村！</p>
          <p class="text-4xl">正式加入 TT 資訊 開發 A 組！</p>
        </div>
      </div>

      <div class="flex">
        <div class="w-1/2 flex justify-start">
          <div class="px-6"><img src="@/assets/img/PO.png" class="object-contain" /></div>
          <div class="px-6 -mt-8"><img src="@/assets/img/tica.png" class="object-contain" /></div>
        </div>
        <div class="w-1/2 flex justify-end">
          <div class="px-6 -mt-8"><img src="@/assets/img/SM.png" class="object-contain  -scale-x-100" /></div>
          <div class="px-6"><img src="@/assets/img/RD.png" class="object-contain  -scale-x-100" /></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import FireWorks from '@/components/modules/fireworks'
export default {
  components: { FireWorks },
  data () {
    return {
      step: 0
    }
  },
  mounted () {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.quote {
  background: linear-gradient(0deg, rgba(255, 82, 165, 0.3), rgba(255, 82, 165, 0.3)), #181E2A;
  border: 16px solid #FFFFFF;
  min-height: 240px;
  min-width: 931px;
}
.step3 {
  background-image: url('@/assets/img/table.png');
  background-repeat: repeat-x;
  background-position-y: 20%;
  position: relative;
    &::after {
      content: '';
      width: 100vw;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0%;
      background-color: rgba(0, 0, 0, 0.6)
    }
}
</style>