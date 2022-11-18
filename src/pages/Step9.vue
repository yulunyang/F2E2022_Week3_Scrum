<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-screen relative step3 pt-24">
    <div class="flex container mx-auto mb-4">
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

    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a><img src="@/assets/img/CTA-arrow-left.png" class="object-contain" /></a>
        <a><img src="@/assets/img/CTA-understand.png" class="object-contain" /></a>
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
    }
  },
  mounted () {},
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .active {
    color: #181E2A;
    background: #FFF205;
  }
</style>