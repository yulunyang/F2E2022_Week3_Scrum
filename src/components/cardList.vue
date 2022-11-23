<template>
  <div class="step4-card-list-container">
    <div class="card-scene container mx-auto">
      <div class="flex">
        <div class="w-1/2 p-4">
          <div class="mb-4">
            <h6 class="text-2xl text-white">產品待辦清單
              <span class="text-lg">Product Backlog</span>
            </h6>
          </div>

          <Container
            drag-class="card-ghost"
            drop-class="step4-card-ghost-drop h-full"
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
              drop-class="step4-card-ghost-drop h-full"
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
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/utils/helpers'
import Card from "@/components/modules/Card.vue"
export default {
  name: "CardList",
  components: {
    Card,
    Container,
    Draggable,
  },
  data () {
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
          sort: 1
        },
        {
          id: 1,
          data: '應徵者的線上履歷編輯器',
          text: ``,
          sort: 2
        },
        {
          id: 2,
          data: '會員系統',
          text: '登入、註冊、權限管理',
          sort: 3
        },
        {
          data: '後台職缺管理功能',
          text: '資訊上架、下架、顯示應徵者資料',
          sort: 0
        }
      ],
      listTwo: [
      ]
    }
  },

  methods: {
    onDrop (collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult)

      if (this.listTwo.length === 4) {
        this.$emit('newList', this.listTwo)
      }
    },
    getChildPayload1(index) {
      return this.listOne[index]
    },
    getChildPayload2(index) {
      return this.listTwo[index]
    }
  },
};
</script>

<style scoped lang="scss">
.step4-card-list-container {
  display: flex;
  justify-content: space-evenly;
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
    transform: rotateZ(-10deg);
    background: #FF52A5;
    border: 8px solid #FFFFFF;
    box-shadow: 8px 8px 0px rgba(255, 255, 255, 0.32);
  }
  .step4-card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg);
  }
  .drop-preview {
    border: 8px dashed rgb(255, 255, 255) !important;
    margin: 5px;
    background: transparent !important;
  }
}

</style>