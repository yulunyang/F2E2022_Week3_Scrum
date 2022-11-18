<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full main-h relative">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
      <div class="flex justify-center items-center mb-12">
        <div class="flex">
          <div class="square square1"></div>
          <div class="square square2"></div>
          <div class="square square3"></div>
          <div class="square square4"></div>
          <div class="square square5"></div>
          <div class="square square6"></div>
          <div class="square square7"></div>
          <div class="square square8"></div>
          <div class="square square9"></div>
          <div class="square square10"></div>
          <div class="square square11"></div>
        </div>
        <h5 class="text-5xl text-white mx-4">角色介紹</h5>
        <div class="flex">
          <div class="square square11"></div>
          <div class="square square10"></div>
          <div class="square square9"></div>
          <div class="square square8"></div>
          <div class="square square7"></div>
          <div class="square square6"></div>
          <div class="square square5"></div>
          <div class="square square4"></div>
          <div class="square square3"></div>
          <div class="square square2"></div>
          <div class="square square1"></div>
        </div>
      </div>
      <div class="flex justify-center mb-10 text-white w-full container mx-auto">
        <div class="w-1/3 p-4">
          <div class="mb-8"><img src="@/assets/img/role1.png" class="object-contain" /></div>
          <div class="text-left">
            <h6 class="text-4xl text-white mb-6">產品負責人</h6>
            <p class="text-2xl max-w-xs">產品方向及願景，定義產品細節，優先級別，交付時間。</p>
          </div>
        </div>
        <div class="w-1/3 p-4">
          <div class="mb-8"><img src="@/assets/img/role2.png" class="object-contain" /></div>
          <div class="text-left">
            <h6 class="text-4xl text-white mb-6">敏捷教練</h6>
            <p class="text-2xl max-w-xs">負責團隊 scrum 能合理運作，理解需求及安排產品技術製作時程，確保工程品質。</p>
          </div>
        </div>
        <div class="w-1/3 p-4">
          <div class="mb-8"><img src="@/assets/img/role3.png" class="object-contain" /></div>
          <div class="text-left">
            <h6 class="text-4xl text-white mb-6">開發團隊</h6>
            <p class="text-2xl max-w-xs">負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center container mx-auto">
        <a class="text-white underline underline-offset-2 text-xl" href="https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-scrum-%E7%9A%84%E8%A7%92%E8%89%B2%E5%88%86%E5%B7%A5-d1d05818a954">推薦閱讀連結</a>

        <div class="flex">
          <a @click="setStep(0)" class="cursor-pointer"><img src="@/assets/img/CTA-arrow-left.png" class="object-contain" /></a>
          <a @click="setStep(2)" class="cursor-pointer"><img src="@/assets/img/understand-btn.png" class="object-contain" /></a>
        </div>
      </div>
      <!-- <div class="flex justify-center">
        <a><img src="@/assets/img/CTA.png" class="object-contain" /></a>
      </div> -->
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
.square {
  width: 48px;
  height: 16px;
  background: #0693E3;
}
.square1 {
  opacity: 0.05;
}
.square2 {
  opacity: 0.1;
}
.square3 {
  opacity: 0.2;
}
.square4 {
  opacity: 0.3;
}
.square5 {
  opacity: 0.4;
}
.square6 {
  opacity: 0.5;
}
.square7 {
  opacity: 0.6;
}
.square8 {
  opacity: 0.7;
}
.square9 {
  opacity: 0.8;
}.square10 {
  opacity: 0.9;
}
.square11 {
  opacity: 1;
}
</style>