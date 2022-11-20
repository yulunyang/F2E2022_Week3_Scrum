<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CheckStep9 v-if="checkList" @setStep="setStep"  @closeCheckStep4="closeCheckStep4" :result="result" />
  <div class="w-full main-h relative step9 mt-4">
    <div class="flex container mx-auto mb-12">
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
        <p class="scrum-text-yellow text-4xl mb-6">做得好的地方</p>
        <div class="item text-white text-3xl scrum-bg-black p-3 h-36 flex items-center cursor-pointer" v-for="(item, idx) in array1" :key="idx" @click="selected1 = idx" :class="{ 'active': selected1 === idx }">
          <div class="w-1/12">
            <img src="@/assets/img/Union-arrow.png" class="object-contain block z-10 off" />
            <img src="@/assets/img/Union-arrow-active.png" class="object-contain z-10 on" />
          </div>
          <p class="flex-1 text-left">{{ item.text }}</p>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <p class="scrum-text-yellow text-4xl mb-6">有哪些可以做得更好？</p>
        <div class="item text-white text-3xl scrum-bg-black p-3 h-36 flex items-center cursor-pointer" v-for="(item, idx) in array2" :key="idx" @click="selected2 = idx" :class="{ 'active': selected2 === idx }">
          <div class="w-1/12">
            <img src="@/assets/img/Union-arrow.png" class="object-contain block z-10 off" />
            <img src="@/assets/img/Union-arrow-active.png" class="object-contain z-10 on" />
          </div>
          <p class="flex-1 text-left">{{ item.text }}</p>
        </div>
      </div>
    </div>

    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a @click="setStep(7)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
          <p class="z-10">&lt;</p>
        </a>
        <a @click="checkList = true" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
          <p class="z-10">我想我了解了！</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CheckStep9 from '@/components/modules/checkStep9'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'step9',
  components: { CheckStep9 },
  data () {
    return {
      checkList: false,
      array1: [
        { id: 0, text: '這次我幫了很多人救火耶。', result: false },
        { id: 1, text: '大家在開發上都會互相 cover，讓任務準時在時間內完成。', result: true }
      ],
      array2: [
        { id: 2, text: '可以記錄這次的開發時間，讓預估團隊點數可以更精準。', result: true },
        { id: 3, text: '開發時間預估不準確，請後端下次改進，避免 delay 到我。', result: false }
      ],
      selected1: -1,
      selected2: -1
    }
  },
  computed: {
    result () {
      if (this.selected1 > -1 && this.selected2 > -1 && this.array1[this.selected1].result && this.array2[this.selected2].result) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {},
  methods: {
    setStep (val) {
      this.$emit('setStep', val)
    },
    closeCheckStep4 () {
      this.checkList = false
    },
    newList (newList) {
      this.fininshArray = newList
    },
    checkListFunc () {
      this.setStep(4)
    }
  }
}
</script>
<style lang="scss" scoped>
  // .active {
  //   color: #181E2A;
  //   background: #FFF205;
  // }
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
    color:#FFF205;
    .on {
      display: block;
    }
    .off {
      display: none;
    }
  }
</style>