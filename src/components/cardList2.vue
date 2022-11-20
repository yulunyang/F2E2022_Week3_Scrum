<template>
  <div class="step6-card-list-container flex justify-center container mx-auto ">
    <div class="w-1/2 p-4">
      <div class="scrum-bg-black p-3 h-full">
        <div class="mb-4">
          <h6 class="text-3xl text-white text-left">產品待辦清單
            <span class="text-lg">Product Backlog</span>
          </h6>
        </div>
        <div class="p-4 flex-1">
          <Container
            drag-class="step6-card-ghost"
            drop-class="step6-card-ghost-drop h-full"
            :drop-placeholder="dropPlaceholderOptions"
            :get-child-payload="getChildPayload1"
            group-name="2"
            @drop="onDrop('listOne', $event)"
          >
            <Draggable v-for="(item, $index) in listOne" :key="$index">
              <Card :item="item" />
            </Draggable>
          </Container>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-4 relative">
      <!-- <div class="warning-pop absolute left-0 top-0 w-full h-full">
        <p class="text-3xl scrum-text-yellow absolute left-1/2 -translate-x-1/2 top-36">超過點數了！</p>
      </div> -->
      <div class="scrum-bg-black p-3 h-full">
        <div class="flex justify-between items-end mb-4">
          <h6 class="text-3xl text-white">開發 A 組的短衝待辦清單
          </h6>
          <span class="text-lg scrum-text-yellow">20 點 / 5 人</span>
        </div>
        <ProgressBarSquare :points="calcPoints" />

        <div class="p-4 flex-1">
          <Container
            drag-class="step6-card-ghost"
            drop-class="step6-card-ghost-drop"
            :drop-placeholder="dropPlaceholderOptions"
            :get-child-payload="getChildPayload2"
            group-name="2"
            @drag-enter="onDragEnter($event)"
            @drag-leave="onDragLeave()"
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
      listTwo: []
    };
  },
  watch: {
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
    },
  },
  methods: {
    onDrop(collection, dropResult) {
    // this.calcPoints + dropResult.payload.points < 20
      this[collection] = applyDrag(this[collection], dropResult)
    },
    getChildPayload1(index) {
      return this.listOne[index]
    },
    getChildPayload2(index) {
      return this.listTwo[index]
    },
    // onDragStart ({index, payload}) {
    //   console.log({index, payload})
    // },
    onDragEnter () {
      console.log('onDragEnter')
    },
    onDragLeave () {
      console.log('onDragLeave')
    }
  },
};
</script>

<style lang="scss">
.step6-card-list-container {
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
  .step6-card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(-10deg);
    background: #FFF205;
    border: 8px solid #FFFFFF;
    color: #454545;
    .point-text-container {
      color: #454545;
      .points {
        background: #454545;
      }
    }
  }
  .step6-card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg);
  }
  .warning-pop {
    background: rgb(24, 30, 42, 0.9);
  }
}

</style>