<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CheckStep4 v-if="checkList" :result="result" @closeModule="closeModule" @nextStep="nextStep" />
  <div class="w-full main-h relative step4 mt-4">
    <div class="flex container mx-auto">
      <div class="w-1/6 px-3"><img src="@/assets/img/role1.png" class="object-contain -scale-x-100 w-4/5" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center py-8 px-8 scrum-bg-purple">
          <div class="text-white text-xl leading-loose tracking-widest text-left w-3/4">
            <p>請試著把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
            <p>我們公司也推薦使用 Jira 來做任務的管理呢！</p>
          </div>
          <div class="w-1/4"><img src="@/assets/img/Jira.png" class="object-contain" /></div>
        </div>
      </div>
    </div>
    <CardList @newList="newList" />
    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a @click="setStep(2)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
          <p class="z-10">&lt;</p>
        </a>
        <a @click="checkList = true" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
          <p class="z-10">我完成了</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/cardList.vue'
import CheckStep4 from '@/components/modules/checkStep4.vue'

export default {
  components: {
    CardList,
    CheckStep4
  },
  data () {
    return {
      checkList: false,

      fininshArray: []
    }
  },
  computed: {
    result () {
      if (this.fininshArray.length === 4) {
        let n = 0
        for (let i = 0; i < this.fininshArray.length; i++) {
          if (i === this.fininshArray[i].sort) {
            n++
          }
        }
        if (n === 4) {
          return 1
        }
        return 2
      }
      return 0
    }
  },
  mounted () {},
  methods: {
    setStep (val) {
      this.$emit('setStep', val)
    },
    closeModule () {
      this.checkList = false
    },
    newList (newList) {
      this.fininshArray = newList
    },
    nextStep () {
      this.setStep(4)
    }
  }
}
</script>
<style>
.smooth-dnd-container.horizontal{
  display: flex !important;
}

.drag-bg {
  background: #2F343F;
  width: 600px;
  /* min-height: 288px; */
}
.card-scene {
  background: #2F343F;
}
.light-gray {
  background: #5F5F5F;
}
</style>