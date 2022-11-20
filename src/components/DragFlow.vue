<template>
  <div class="drag-flow max-w-7xl mx-auto scrum-bg-gray p-10 py-24 flex relative">
    <div class="w-1/5 px-3">
      <div class="scrum-bg-yellow scrum-text-black py-2 px-3 text-xl">產品待辦清單</div>
      <div class="mb-2"><img src="@/assets/img/Union-arrow-down.png" class="object-contain -scale-x-100 mx-auto" /></div>
      <div class="scrum-bg-yellow scrum-text-black py-2 px-3 text-xl">短衝規劃</div>
      <div class="mb-2"><img src="@/assets/img/Union-arrow-down.png" class="object-contain -scale-x-100 mx-auto" /></div>
      <div class="flex w-full">
        <div class="scrum-bg-yellow scrum-text-black py-2 px-3 text-xl flex-1">短衝待辦清單</div>
        <div class="mb-2"><img src="@/assets/img/Union-arrow-active.png" class="object-contain mx-auto" /></div>
      </div>
    </div>
    <div class="absolute left-10 squote-border">
      <img src="@/assets/img/Group13.png" class="object-contain mx-auto" />
    </div>
    <div class="w-2/4 ml-48">
      <!-- <Container
        class="border drop flex-1"
        drag-class="card-ghost"
        drop-class="card-ghost-drop"
        :drop-placeholder="dropPlaceholderOptions"
        :get-child-payload="getChildPayload2"
        group-name="3"
        @drop="onDrop('listTwo', $event)"
      >
        <Draggable v-for="(item, $index) in listTwo" :key="$index">
          <Card :item="item" />
        </Draggable>
      </Container> -->
    </div>

  </div>
  <div class="max-w-7xl mx-auto mt-4">
    <!-- <Container
      class="drag"
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
    </Container> -->
  </div>
</template>

<script>
// import { Container, Draggable } from 'vue3-smooth-dnd'
// import { applyDrag } from '@/utils/helpers'
// import Card from "@/components/modules/Card3.vue"
export default {
  name: "drag-flow",
  components: {
    // Card,
    // Container,
    // Draggable,
  },
  data() {
    return {
      // dropPlaceholderOptions: {
      //   className: "drop-preview",
      //   animationDuration: "150",
      //   showOnTop: false,
      // },
      listOne: [
        {
          id: 0,
          data: '短衝檢視會議',
          text: 'Sprint Review',
          sort: 1,
          points: 5
        },
        {
          id: 1,
          data: '短衝自省會議',
          text: `Sprint Retrospective`,
          sort: 2,
          points: 13
        },
        {
          id: 2,
          data: '每日站立會議',
          text: 'Daily Scrum',
          sort: 3,
          points: 8
        }
      ],
      listTwo: [
        {
          id: 0,
          data: '短衝檢視會議',
          text: 'Sprint Review',
          sort: 1,
          points: 5
        },
        {
          id: 1,
          data: '短衝自省會議',
          text: `Sprint Retrospective`,
          sort: 2,
          points: 13
        },
        {
          id: 2,
          data: '每日站立會議',
          text: 'Daily Scrum',
          sort: 3,
          points: 8
        }
      ]
    };
  },
  watch: {
    // listTwo: {
    //   handler(newValue, oldValue) {
    //     // let self = this
    //     if (newValue !== oldValue) {
    //       console.log(`更改後${newValue}，更改前${oldValue}`)
    //       // self.$emit('newList', newValue)
    //       this.$emit('newList', newValue)
    //     }
    //   },
    //   deep: true
    // }
  },
  computed: {
  },
  methods: {
    // onDrop(collection, dropResult) {
    //   this[collection] = applyDrag(this[collection], dropResult)
    // },
    // getChildPayload1(index) {
    //   return this.listOne[index]
    // },
    // getChildPayload2(index) {
    //   // this.$emit('newList', this.listTwo)
    //   return this.listTwo[index]
    // }
  },
};
</script>

<style lang="scss">
.drag-flow {
  .card-list-container {
    display: flex;
    justify-content: space-evenly;
  }
  // .smooth-dnd-container {
  //   display: flex;
  //   width: 100%;
  //   max-width: 90%;
  //   height: 100%;
  //   min-height: 380px;
  // }
  .drag {
    display: flex !important;
    width: 100%  !important;
    height: auto;
    min-height: 92px;
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
  .drop {
    height: auto;
    display: flex;
    .smooth-dnd-draggable-wrapper {
      display: flex;
      height: auto;
      align-items: center;
    }
    .smooth-dnd-draggable-wrapper:nth-child(1){
      align-items: start;
    }
  }
}
.squote-border {
  left: 23%;
  top: 20%;
}

</style>