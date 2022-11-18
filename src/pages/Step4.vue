<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CheckStep4 v-if="checkList" @setStep="setStep"  @closeCheckStep4="closeCheckStep4" @newList="newList" />
  <div class="w-full main-h relative step4 mt-4">
    <div class="flex container mx-auto">
      <div class="w-1/6 px-3"><img src="@/assets/img/role1.png" class="object-contain -scale-x-100" /></div>
      <div class="w-5/6 px-5 ">
        <div class="flex items-center py-8 px-8 scrum-bg-purple">
          <div class="text-white text-2xl leading-loose tracking-widest text-left w-3/4">
            <p>請試著把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
            <p>我們公司也推薦使用 Jira 來做任務的管理呢！</p>
          </div>
          <div class="w-1/4"><img src="@/assets/img/Jira.png" class="object-contain" /></div>
        </div>
      </div>
    </div>
    <CardList />
    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-20 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a @click="setStep(2)" class="cursor-pointer btn-base inline-flex justify-center items-center mr-6">
          <p class="z-10">&lt;</p>
        </a>
        <a @click="checkListFunc" class="cursor-pointer btn-base text-4xl inline-flex justify-center items-center">
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
  components: { CardList, CheckStep4 },
  data () {
    return {
      checkList: false,

      fininshArray: null
    }
  },
  mounted (){},
  methods: {
    setStep (val) {
      this.$emit('setStep', val)
    },
    closeCheckStep4 () {
      this.checkList = false
    },
    newList (newList) {
      console.log(newList)
      this.fininshArray = newList
    },
    checkListFunc () {
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