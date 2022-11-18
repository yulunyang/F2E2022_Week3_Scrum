<template>
  <div class="flex justify-center container mx-auto ">
    <div class="w-1/2 p-4">
      <div class="scrum-bg-black p-3 h-full">
        <!-- <h6 class="text-3xl text-white text-left">產品待辦清單
          <span class="text-lg">Product Backlog</span>
        </h6> -->
          <div class="mb-4">
            <h6 class="text-3xl text-white text-left">產品待辦清單
              <span class="text-lg">Product Backlog</span>
            </h6>
          </div>
          <div class="p-4 flex-1">
            <Container
              drag-class="card-ghost"
              drop-class="card-ghost-drop h-full"
              :drop-placeholder="dropPlaceholderOptions"
              :get-child-payload="getChildPayload1"
              group-name="1"
              @drop="onDrop('listOne', $event)"
            >
              <Draggable v-for="(item, $index) in listOne" :key="$index">
                <Card :item="item" />
              </Draggable>
            </Container>
          </div>
      </div>
    </div>
    <div class="w-1/2 p-4">
      <div class="scrum-bg-black p-3 h-full">
        <div class="flex justify-between items-end mb-4">
          <h6 class="text-3xl text-white">開發 A 組的短衝待辦清單
          </h6>
          <span class="text-lg scrum-text-yellow">20 點 / 5 人</span>
        </div>
        <ProgressBarSquare />

        <div class="p-4 flex-1">
          <Container
            drag-class="card-ghost"
            drop-class="card-ghost-drop h-full"
            :drop-placeholder="dropPlaceholderOptions"
            :get-child-payload="getChildPayload2"
            group-name="1"
            @drop="onDrop('listTwo', $event)"
          >
            <Draggable v-for="(item, $index) in listTwo" :key="$index">
              <Card :item="item" />
            </Draggable>
          </Container>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="card-list-container">
    <div class="card-scene container mx-auto">
      <div class="flex">
        <div class="w-1/2 p-4">
          <div class="mb-4">
            <h6 class="text-3xl text-white">產品待辦清單
              <span class="text-lg">Product Backlog</span>
            </h6>
          </div>
          <Container
            drag-class="card-ghost"
            drop-class="card-ghost-drop h-full"
            :drop-placeholder="dropPlaceholderOptions"
            :get-child-payload="getChildPayload1"
            group-name="1"
            @drop="onDrop('listOne', $event)"
          >
            <Draggable v-for="(item, $index) in listOne" :key="$index">
              <Card :item="item" />
            </Draggable>
          </Container>
        </div>
        <div class="w-1/2 flex">
          <div class="flex flex-col justify-between text-white light-gray">
            <p class="origin-center -rotate-90 mt-8">優先度低</p>
            <p class="origin-center -rotate-90 mb-8">優先度高</p>
          </div>
          <div class="p-4 flex-1">
            <Container
              drag-class="card-ghost"
              drop-class="card-ghost-drop h-full"
              :drop-placeholder="dropPlaceholderOptions"
              :get-child-payload="getChildPayload2"
              group-name="1"
              @drop="onDrop('listTwo', $event)"
            >
              <Draggable v-for="(item, $index) in listTwo" :key="$index">
                <Card :item="item" />
              </Draggable>
            </Container>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/utils/helpers'
import Card from "@/components/modules/Card2.vue"
import ProgressBarSquare from '@/components/modules/progress-bar-square'
export default {
  name: "CardList",
  components: {
    Card,
    Container,
    Draggable,
    ProgressBarSquare
  },
  data() {
    return {
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: false,
      },
      listOne: [
        {
          id: 0,
          data: '前台職缺列表',
          text: '職缺詳細內容、點選可發送應徵意願',
          sort: 1,
          points: 5
        },
        {
          id: 1,
          data: '應徵者的線上履歷編輯器',
          text: ``,
          sort: 2,
          points: 13
        },
        {
          id: 2,
          data: '會員系統',
          text: '登入、註冊、權限管理',
          sort: 3,
          points: 8
        },
        {
          data: '後台職缺管理功能',
          text: '資訊上架、下架、顯示應徵者資料',
          sort: 0,
          points: 8
        }
      ],
      listTwo: [
      ]
    };
  },
  watch: {
    listTwo: {
      handler(newValue, oldValue) {
        // let self = this
        if (newValue !== oldValue) {
          console.log(`更改後${newValue}，更改前${oldValue}`)
          // self.$emit('newList', newValue)
          this.$emit('newList', newValue)
        }
      },
      deep: true
    }
  },
  computed: {
    calcPoints () {
      let n = 0
      if (this.listTwo.length > 0) {
        for (let i = 0; i < this.listTwo.length; i++) {
          n += this.listTwo[i].points
        }
        return n
      } else {
        return 0
      }
    }
  },
  methods: {
    onDrop(collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult)
    },
    getChildPayload1(index) {
      return this.listOne[index]
    },
    getChildPayload2(index) {
      // this.$emit('newList', this.listTwo)
      return this.listTwo[index]
    }
  },
};
</script>

<style scoped>
.card-list-container {
  display: flex;
  justify-content: space-evenly;
}
.smooth-dnd-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
  height: 100%;
  min-height: 380px;
}
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}
</style>