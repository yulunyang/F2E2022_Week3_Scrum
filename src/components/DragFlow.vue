<template>
  <div class="drag-flow max-w-7xl mx-auto scrum-bg-gray flex relative p-4">
    <div class="w-1/5 px-3 py-12">
      <div class="scrum-bg-yellow scrum-text-black py-2 px-3 text-xl">產品待辦清單</div>
      <div class="mb-2"><img src="@/assets/img/Union-arrow-down.png" class="object-contain -scale-x-100 mx-auto" /></div>
      <div class="scrum-bg-yellow scrum-text-black py-2 px-3 text-xl">短衝規劃</div>
      <div class="mb-2"><img src="@/assets/img/Union-arrow-down.png" class="object-contain -scale-x-100 mx-auto" /></div>
      <div class="flex w-full">
        <div class="scrum-bg-yellow scrum-text-black py-2 px-3 text-xl flex-1">短衝待辦清單</div>
        <div class="mb-2"><img src="@/assets/img/Union-arrow-active.png" class="object-contain mx-auto" /></div>
      </div>
    </div>
    <div class="w-3/5 flex py-12 drop-area justify-between relative">
      <div class="drop-item drop-item1 absolute">
        <Container
          class="drop flex-1"
          drag-class="card-ghost"
          drop-class="card-ghost-drop"
          :drop-placeholder="dropPlaceholderOptions"
          :get-child-payload="getChildPayload2"
          group-name="3"
          @drop="onDrop('listTwo', $event)"
        >
          <Draggable v-for="(item, $index) in listTwo" :key="$index">
            <div class="cursor-move my-2 mx-4 pock-card">
              <div class="p-4 text-left text-white">
                <p class="text-xl">{{ item.data }}</p>
                <p class="text-sm" v-if="item.text">{{ item.text }}</p>
              </div>
            </div>
            <!-- <Card :item="item" /> -->
          </Draggable>
        </Container>
      </div>
      <div class="drop-item drop-item2 absolute">
        <Container
          class="drop flex-1"
          drag-class="card-ghost"
          drop-class="card-ghost-drop"
          :drop-placeholder="dropPlaceholderOptions"
          :get-child-payload="getChildPayload3"
          group-name="3"
          @drop="onDrop('listThree', $event)"
        >
          <Draggable v-for="(item, $index) in listThree" :key="$index">
            <div class="cursor-move my-2 mx-4 pock-card">
              <div class="p-4 text-left text-white">
                <p class="text-xl">{{ item.data }}</p>
                <p class="text-sm" v-if="item.text">{{ item.text }}</p>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="drop-item drop-item3 absolute">
        <Container
          class="drop flex-1"
          drag-class="card-ghost"
          drop-class="card-ghost-drop"
          :drop-placeholder="dropPlaceholderOptions"
          :get-child-payload="getChildPayload4"
          group-name="3"
          @drop="onDrop('listFour', $event)"
        >
          <Draggable v-for="(item, $index) in listFour" :key="$index">
            <div class="cursor-move my-2 mx-4 pock-card">
              <div class="p-4 text-left text-white">
                <p class="text-xl">{{ item.data }}</p>
                <p class="text-sm" v-if="item.text">{{ item.text }}</p>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>

  </div>
  <div class="max-w-7xl mx-auto mt-4">
    <Container
      class="drag-area flex"
      drag-class="card-ghost"
      drop-class="card-ghost-drop h-full"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getChildPayload1"
      group-name="3"
      @drop="onDrop('listOne', $event)"
    >
      <Draggable v-for="(item, $index) in listOne" :key="$index">
        <Card :item="item" />
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/utils/helpers'
import Card from "@/components/modules/Card3.vue"
export default {
  name: "drag-flow",
  components: {
    Card,
    Container,
    Draggable,
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
          data: '短衝檢視會議',
          text: 'Sprint Review',
          sort: 2,
          points: 5
        },
        {
          id: 1,
          data: '短衝自省會議',
          text: `Sprint Retrospective`,
          sort: 3,
          points: 13
        },
        {
          id: 2,
          data: '每日站立會議',
          text: 'Daily Scrum',
          sort: 1,
          points: 8
        }
      ],
      listTwo: [],
      listThree: [],
      listFour: []
    };
  },
  computed: {
    // result () {
    //   if (this.listTwo.length > 0 && this.listThree.length > 0 && this.listFour.length > 0) {
    //     if (this.listTwo[0].sort === 1 && this.listThree[0].sort === 2 && this.listFour[0].sort === 3) {
    //       return { finish: true, sort: true }
    //     }
    //     return { finish: true, sort: false }
    //   }
    //   return { finish: false, sort: false }
    // }
  },
  methods: {
    onDrop(collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult)

      this.$emit('newFlow', { ar1: this.listTwo, ar2: this.listThree, ar3: this.listFour })
      // this.$emit('newFlow2', this.listThree)
      // this.$emit('newFlow3', this.listFour)

    },
    getChildPayload1(index) {
      return this.listOne[index]
    },
    getChildPayload2(index) {
      return this.listTwo[index]
    },
    getChildPayload3(index) {
      return this.listThree[index]
    },
    getChildPayload4(index) {
      return this.listFour[index]
    }
  },
};
</script>

<style lang="scss">
.drag-flow {
  .card-list-container {
    display: flex;
    justify-content: space-evenly;
  }
  .drag-area {
    display: flex !important;
    width: 100%  !important;
    height: auto;
    min-height: 92px !important;
  }
  .card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg);
  }
  .card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg);
  }
  .warning-pop {
    background: rgb(24, 30, 42, 0.9);
  }
  .drop-area {
    background-image: url('@/assets/img/Group13.png'), url('@/assets/img/Union-arrow-active.png');
    background-repeat: no-repeat;
    background-position: left 10% top 70%, left 87% top 67%;
  }
  .drop-item {
    width: 16.5rem;
    height: 6rem;
    border: 6px dashed #6D7179 !important;
    .drop {
      height: 100%;
      display: flex;
      .smooth-dnd-draggable-wrapper {
        display: flex;
        height: auto;
        align-items: center;
      }
    }
  }
}
  .drop-item1 {
    left: 30%;
  }
  .drop-item2 {
    left: 45%;
    top: 50%;
  }
  .drop-item3 {
    left: 90%;
    top: 50%;
  }
  .drag-area {
    width: 100%  !important;
    height: auto;
    min-height: 92px !important;
  }
</style>