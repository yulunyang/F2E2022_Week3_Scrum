<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full main-h relative step3">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">

      <div class="flex justify-center mb-10 text-white w-full container mx-auto">
        <div class="w-1/3 flex justify-center"><img src="@/assets/img/pinkPig.png" class="object-contain" /></div>
        <div class="w-2/3 text-2xl text-white quote py-8 px-8 leading-loose tracking-widest text-left">
          <p>我是 TT 資訊，開發 A 組的 PO，粉紅豬。</p>
          <p>PO 也就是產品負責人（Product Owner）。</p>
          <p>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！</p>
          <p>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！</p>
        </div>
      </div>

    </div>
      <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-20 flex justify-end items-center container mx-auto z-50">
        <!-- <a class="text-white underline underline-offset-2 text-xl" href="https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-scrum-%E7%9A%84%E8%A7%92%E8%89%B2%E5%88%86%E5%B7%A5-d1d05818a954">推薦閱讀連結</a> -->

        <div class="flex">
          <a @click="setStep(1)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
            <p class="z-10">&lt;</p>
          </a>
          <a @click="setStep(3)" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
            <p class="z-10">接受挑戰</p>
          </a>
          <!-- <a @click="setStep(3)" class="cursor-pointer"><img src="@/assets/img/understand-btn.png" class="object-contain" /></a> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: { },
  data () {
    return {
      step: 0
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
<style lang="scss" scoped>
.quote {
  background: linear-gradient(0deg, rgba(255, 82, 165, 0.3), rgba(255, 82, 165, 0.3)), #181E2A;
  border: 16px solid #FFFFFF;
  min-height: 240px;
  min-width: 931px;
  position: relative;
  &::after {
    content: '';
    width: 68px;
    height: 68px;
    position: absolute;
    left: -10%;
    top: -4%;
    background: linear-gradient(0deg, rgba(255, 82, 165, 0.3), rgba(255, 82, 165, 0.3)), #181E2A;
    /* White */

    border: 16px solid #FFFFFF;
    z-index: 20;
  }
  &::before {
    content: '';
    width: 48px;
    height: 48px;
    position: absolute;
    left: -16%;
    top: 1%;
    background: linear-gradient(0deg, rgba(255, 82, 165, 0.3), rgba(255, 82, 165, 0.3)), #181E2A;
    /* White */

    border: 16px solid #FFFFFF;
    z-index: 20;
  }
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