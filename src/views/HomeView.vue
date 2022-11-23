<template>
  <div id="main" class="hidden xl:block">
    <LoadingModule v-if="isLoading" class="LoadingModule overflow-hidden overflow-x-hidden overflow-y-hidden" />
    <ProgressBar :step="step" />

    <Pixelated v-if="isTransition" />

    <div class="w-screen main-h overflow-hidden overflow-x-hidden overflow-y-hidden">
      <Step1 v-if="step === 0" @setStep="setStep" />
      <Step2 v-if="step === 1" @setStep="setStep" />
      <Step3 v-if="step === 2" @setStep="setStep" />
      <Step4 v-if="step === 3" @setStep="setStep" />
      <Step5 v-if="step === 4" @setStep="setStep" />
      <Step6 v-if="step === 5" @setStep="setStep" />
      <Step7 v-if="step === 6" @setStep="setStep" />
      <Step8 v-if="step === 7" @setStep="setStep" />
      <Step9 v-if="step === 8" @setStep="setStep" />
      <Step10 v-if="step === 9" @setStep="setStep"/>
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <div class="hr6 w-full"></div>
      <p class="text-white text-center absolute bottom-1 left-1/2 -translate-x-1/2">2022 F2E 4th week3</p>
    </div>
  </div>
  <div class="xl:hidden bg-black w-screen h-screen flex justify-center items-center">
    <p class="text-white text-xl">請使用桌機版瀏覽以獲得更好的使用者體驗</p>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import LoadingModule from '@/components/modules/LoadingModule'
import Pixelated from '@/components/modules/Pixelated'
import Step1 from '@/pages/Step1.vue'
import ProgressBar from '@/components/modules/progress-bar'
import Step2 from '@/pages/Step2.vue'
import Step3 from '@/pages/Step3.vue'
import Step4 from '@/pages/Step4.vue'
import Step5 from '@/pages/Step5.vue'
import Step6 from '@/pages/Step6.vue'
import Step7 from '@/pages/Step7.vue'
import Step8 from '@/pages/Step8.vue'
import Step9 from '@/pages/Step9.vue'
import Step10 from '@/pages/Step10.vue'
export default {
  components: {
    LoadingModule,
    ProgressBar,
    Pixelated,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10
  },
  setup () {
    const isLoading = ref(false)
    const timer = ref(null)
    const step = ref(0)
    const isTransition = ref(false)

    onMounted(() => {
      isLoading.value ? setTimeOut() : null
    })

    const setTimeOut = () => {
      if (isLoading.value) {
        const timeout = setTimeout(() => {
          isLoading.value = false
        }, 2000)
        clearTimeout(timeout.value)
      }
    }
    const setTimeOutTransition = () => {
      isTransition.value = true
      if (isTransition.value) {
        const timeout = setTimeout(() => {
          isTransition.value = false
        }, 1500)
        clearTimeout(timeout.value)
      }
    }
    const setStep = (setStep) => {
      step.value = setStep
      setTimeOutTransition()
    }

    return {
      step,
      isLoading,
      timer,
      setTimeOut,
      setStep,
      isTransition,
      setTimeOutTransition
    }
  }
}
</script>

<style>

.hr6 {
  border-top: 32px solid rgba(6, 147, 227, 0.3);
}
.LoadingModule {
  z-index: 999;
}
</style>
