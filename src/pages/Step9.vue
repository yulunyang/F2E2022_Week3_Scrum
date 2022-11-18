<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full main-h relative step3 mt-3">
    <div class="flex container mx-auto mb-6">
      <div class="w-1/6 px-5"><img src="@/assets/img/role3.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center quote py-4 px-8 mb-2 scrum-bg-oliveGreen">
          <div class="text-white text-2xl text-left">
            <p>哇新來的，你真的很幸運，今天剛好是開發 B 組的 Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～<br/>
              我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再 Confluence 中。</p>
          </div>
        </div>
        <div class="flex items-center quote py-4 px-8 scrum-bg-oliveGreen">
          <div class="text-white text-2xl text-left">
            <p>重點在於『正面表述』，你也思考看看，哪一些是適合 Retro 的回饋吧～～</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto flex">
      <div class="w-1/2 p-2">
        <p class="scrum-text-yellow text-3xl mb-6">做得好的地方</p>

        <div class="item text-white text-3xl scrum-bg-black mb-4 p-3 h-32 flex items-center">
          <div class="w-1/12">
            <img src="@/assets/img/Union-arrow.png" class="object-contain block z-10 off" />
            <img src="@/assets/img/Union-arrow-active.png" class="object-contain z-10 on" />
          </div>
          <p class="flex-1 text-left">這次我幫了很多人救火耶。</p>
        </div>
        <div class="item text-white text-3xl scrum-bg-black mb-4 h-32 flex items-center">
          <div class="w-1/12">
            <img src="@/assets/img/Union-arrow.png" class="object-contain block z-10 off" />
            <img src="@/assets/img/Union-arrow-active.png" class="object-contain z-10 on" />
          </div>
          <p class="flex-1 text-left">大家在開發上都會互相 cover，讓任務準時在時間內完成。</p>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <p class="scrum-text-yellow text-3xl mb-6">有哪些可以做得更好？</p>
        <div class="item text-white text-3xl scrum-bg-black mb-4 p-3 h-32 flex items-center">
          <div class="w-1/12">
            <img src="@/assets/img/Union-arrow.png" class="object-contain block z-10 off" />
            <img src="@/assets/img/Union-arrow-active.png" class="object-contain z-10 on" />
          </div>
          <p class="flex-1 text-left">可以記錄這次的開發時間，讓預估團隊點數可以更精準。</p>
        </div>
        <div class="item text-white text-3xl scrum-bg-black mb-4 p-3 h-32 flex items-center">
          <div class="w-1/12">
            <img src="@/assets/img/Union-arrow.png" class="object-contain block z-10 off" />
            <img src="@/assets/img/Union-arrow-active.png" class="object-contain z-10 on" />
          </div>
          <p class="flex-1 text-left">開發時間預估不準確，請後端下次改進，避免 delay 到我。</p>
        </div>
      </div>
    </div>

    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a @click="setStep(7)" class="cursor-pointer"><img src="@/assets/img/CTA-arrow-left.png" class="object-contain" /></a>
        <a @click="setStep(9)" class="cursor-pointer"><img src="@/assets/img/CTA-understand.png" class="object-contain" /></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'step9',
  components: { },
  data () {
    return {
      array1: [
        { id: 0, text: '這次我幫了很多人救火耶。' },
        { id: 0, text: '大家在開發上都會互相 cover，讓任務準時在時間內完成。' }
      ],
      array2: [
        { id: 0, text: '可以記錄這次的開發時間，讓預估團隊點數可以更精準。' },
        { id: 0, text: '開發時間預估不準確，請後端下次改進，避免 delay 到我。' }
      ]
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
  .item {
    .on {
      display: none;
    }
    &:hover {
      background: #464B55;
      .on {
        display: block;
      }
      .off {
        display: none;
      }
    }
  }
  .item.active {
    color:#FFF205
  }
</style>