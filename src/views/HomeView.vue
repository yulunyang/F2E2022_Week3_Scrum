<template>
  <div id="main">
    <LoadingModule v-if="isLoading" class="z-50 overflow-hidden" />
    <ProgressBar :step="step" />
    <div class="w-full h-screen overflow-hidden">
      <Step1 v-if="step === 0" />
      <Step2 v-if="step === 1"/>
      <Step3 v-if="step === 2"/>
      <Step4 v-if="step === 3"/>
      <Step5 v-if="step === 4"/>
      <Step6 v-if="step === 5"/>
      <Step7 v-if="step === 6"/>
      <Step8 v-if="step === 7"/>
      <Step9 v-if="step === 8"/>
      <Step10 v-if="step === 9"/>
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <div class="hr6 w-full"></div>
      <p class="text-white text-center absolute bottom-1 left-1/2 -translate-x-1/2">2022 F2E 4th week3</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LoadingModule from '@/components/modules/LoadingModule'
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
import { onMounted } from 'vue'
export default {
  components: {
    LoadingModule,
    ProgressBar,
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
    const step = ref(9)

    onMounted(() => {
      // isLoading.value ? setTimeOut() : null
    })

    const setTimeOut = () => {
      if (isLoading.value) {
        const timeout = setTimeout(() => {
          isLoading.value = false
        }, 2000)
        clearTimeout(timeout.value)
      }
    }

    return {
      step,
      isLoading,
      timer,
      setTimeOut
    }
  }
}
</script>

<style scoped>
.hr6 {
  border-top: 32px solid rgba(6, 147, 227, 0.3);
}
</style>
