<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full main-h relative step7 mt-4">
    <div class="flex container mx-auto mb-4">
      <div class="w-1/6 px-5"><img src="@/assets/img/role3.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center quote py-4 px-8 mb-2 scrum-bg-oliveGreen">
          <div class="text-white text-xl text-left">
            <p>等等等等等，你應該還不知道什麼是 Sprint 吧？<br/>讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！</p>
          </div>
          <!-- <div class="w-1/4"><img src="@/assets/img/Jira.png" class="object-contain" /></div> -->
        </div>
        <div class="flex items-center quote py-4 px-8 scrum-bg-oliveGreen">
          <div class="text-white text-xl text-left">
            <p>Sprint 是一個短衝，如同前面敏捷教練所提到的，一次sprint一次sprint週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議（Daily Scrum） ，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint 的結束也會包含 短衝檢視會議（Sprint Review）、短衝自省會議（Sprint Retrospective）。</p>
          </div>
          <!-- <div class="w-1/4"><img src="@/assets/img/Jira.png" class="object-contain" /></div> -->
        </div>
      </div>
    </div>

    <div class="flex container mx-auto p-6 scrum-bg-gray text-white">
      <div class="w-1/3 py-3 cursor-pointer" :class="{ 'active': selected === 0 }" @click="selected = 0">
        <p class="text-xl mb-1">每日站立會議</p>
        <p>Daily Scrum</p>
      </div>
      <div class="w-1/3 p-3 cursor-pointer" :class="{ 'active': selected === 1 }" @click="selected = 1">
        <p class="text-xl mb-1">短衝檢視會議</p>
        <p>Sprint Review</p>
      </div>
      <div class="w-1/3 p-3 cursor-pointer" :class="{ 'active': selected === 2 }" @click="selected = 2">
        <p class="text-xl mb-1">短衝自省會議</p>
        <p>Sprint Retrospective</p>
      </div>
    </div>

    <div class="container mx-auto p-6 text-2xl text-white text-left leading-relaxed tracking-wider">
      <p v-if="selected === 0">每天都要進行的會議，以 15 分鐘為限制<br/>
      <ul class="list-disc list-inside">
        <li>昨天為團隊的短衝目標（Sprint Goal）做了那些進度 </li>
        <li>今天我會如何準備來幫助團隊達到短衝目標 </li>
        <li>過程中有遇到什麼問題、難題</li>
      </ul>
        透過團隊分享，追蹤大家的工作狀況。</p>
      <p v-if="selected === 1">向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。<br/>
        在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。</p>
      <p v-if="selected === 2">團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方、可以改進的地方。<br/>
        如何維持我們已有的成功經驗，優化工作流程、讓團隊有變得更好的機會。<br/>
        推薦工具：<span><img src="@/assets/img/confluence.png" class="object-contain" /></span></p>
    </div>
    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-12 flex justify-end items-center container mx-auto z-50 px-4">
      <div class="flex">
          <a @click="setStep(5)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
            <p class="z-10">&lt;</p>
          </a>
        <a @click="setStep(7)" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
          <p class="z-10">我瞭解了</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'step7',
  components: { },
  data () {
    return {
      selected: 0,
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
  .active {
    color: #181E2A;
    background: #FFF205;
  }
</style>