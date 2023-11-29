<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full main-h relative step5 mt-4">
    <div class="flex container mx-auto mb-4 px-4">
      <div class="w-1/6 px-5"><img src="@/assets/img/role1.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center quote py-4 px-8 scrum-bg-purple">
          <div class="text-white text-xl text-left">
            <p>產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議（Sprint Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint Backlog），並由開發團隊在接下來的產品開發週期裡執行。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex container mx-auto mb-4 px-4">
      <div class="w-1/6 px-5"><img src="@/assets/img/role2.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-4">
        <div class="flex items-center quote py-4 px-8 mb-2 scrum-bg-green">
          <div class="text-white text-xl text-left">
            <p>嗨嗨(ﾟ∀ﾟ)你是新來的前端吧！我是這次的 Scrum Master 山豬，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。這位是黃黃，是我們開發團隊的成員唷～</p>
          </div>
        </div>
        <div class="flex items-center quote py-4 px-8 scrum-bg-green">
          <div class="text-white text-xl text-left">
            <p>目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。 </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex container mx-auto mb-4 px-4">
      <div class="w-1/6 px-5"><img src="@/assets/img/role3.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center quote py-4 px-8 mb-2 scrum-bg-oliveGreen">
          <div class="text-white text-xl text-left">
            <p>嘿！新來的，你應該還不知道點數是什麼意思吧(ゝ∀･)<br/>我來跟你介紹一下吧～ Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。</p>
          </div>
          <!-- <div class="w-1/4"><img src="@/assets/img/Jira.png" class="object-contain" /></div> -->
        </div>
        <div class="flex items-center quote py-4 px-8 scrum-bg-oliveGreen">
          <div class="text-white text-xl text-left">
            <p>我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！<br/>
              對了，我們平常管理任務是使用 Jira     這套軟體，你有時間記得先去註冊和熟悉唷～</p>
          </div>
          <!-- <div class="w-1/4"><img src="@/assets/img/Jira.png" class="object-contain" /></div> -->
        </div>
      </div>
    </div>
    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-12 flex justify-end items-center container mx-auto z-50 px-4">
      <div class="flex">
          <a @click="setStep(3)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
            <p class="z-10">&lt;</p>
          </a>
        <a @click="setStep(5)" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
          <p class="z-10">沒問題，我來挑戰！</p>
        </a>
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
<style>
</style>