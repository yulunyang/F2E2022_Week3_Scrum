<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-screen relative step3 pt-24">
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

    <div class="card-scene container mx-auto">
      <div class="flex p-4">
        <div class="w-1/2">
          <div>
            <h6 class="text-3xl text-white">產品待辦清單
              <span class="text-lg">Product Backlog</span>
            </h6>
          </div>
        </div>
        <div class="w-1/2 flex h-72">
          <div class="flex flex-col justify-between text-white">
            <p class="origin-center -rotate-90 mt-10">優先度低</p>
            <p class="origin-center -rotate-90 mb-4">優先度高</p>
          </div>
          <div></div>
        </div>
      </div>

      <Container
        class="h-full flex overflow-x-auto gap-8 p-8 justify-center"
        group-name="cols"
        tag="div"
        :class="{ mycontainer: true }"
        orientation="horizontal"
        @drop="onColumnDrop($event)">
        <div class="bg-gray-200 dark:bg-gray-700 rounded-lg h-full flex-shrink-0 shadow-xl drag-bg overflow-x-hidden"
          v-for="column in scene.children" :key="column.id">
          <div class="h-full flex flex-col">
            <!-- column -->
            <Container
              class="flex-grow overflow-y-auto overflow-x-hidden"
              orientation="vertical"
              group-name="col-items"
              :shouldAcceptDrop="(e, payload) =>  (e.groupName === 'col-items' && !payload.loading)"
              :get-child-payload="getCardPayload(column.id)"
              :drop-placeholder="{ className:
                `bg-primary
                border-dotted border-2
                border-primary rounded-lg mx-4 my-2`,
              animationDuration: '200',
              showOnTop: true }"
              drag-class="
                border-2 border-primary-hover text-white
                transition duration-100 ease-in z-50
                transform rotate-6 scale-110"
              drop-class="transition duration-100
                ease-in z-50 transform
                -rotate-2 scale-90"
              @drop="(e) => onCardDrop(column.id, e)">

                <KanbanItem v-for="item in column.children" :key="item.id" :item="item"></KanbanItem>
            </Container>
          </div>
        </div>
      </Container>
    </div>
    <div class="absolute w-full left-1/2 -translate-x-1/2 bottom-16 flex justify-end items-center container mx-auto z-50">
      <div class="flex">
        <a @click="setStep(2)"><img src="@/assets/img/CTA-arrow-left.png" class="object-contain" /></a>
        <a @click="setStep(4)"><img src="@/assets/img/CTA-finish.png" class="object-contain" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { Container } from 'vue3-smooth-dnd'
import { applyDrag } from '@/utils/helpers'
import KanbanItem from '@/components/PockerItem.vue'

const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: [
    {
      children: [
        {
          id: "00",
          name: 'test11',
          props: {
            className:"card",
            style: {
              backgroundColor:"ghostwhite"
            }
          },
          type:"draggable",
          data: '前台職缺列表',
          text: '職缺詳細內容、點選可發送應徵意願'
        },
        {
          id: "00",
          name: 'test11',
          props: {
            className:"card",
            style: {
              backgroundColor:"ghostwhite"
            }
          },
          type:"draggable",
          data: '應徵者的線上履歷編輯器',
          text: ''
        },
        {
          id: "00",
          name: 'test11',
          props: {
            className:"card",
            style: {
              backgroundColor:"ghostwhite"
            }
          },
          type:"draggable",
          data: '會員系統',
          text: '登入、註冊、權限管理'
        },
        {
          id: "00",
          name: 'test11',
          props: {
            className:"card",
            style: {
              backgroundColor:"ghostwhite"
            }
          },
          type:"draggable",
          data: '後台職缺管理功能',
          text: '資訊上架、下架、顯示應徵者資料'
        },
      ],
      id: "column0",
      name: 'test1',
      props: {
        className:"card-container",
        orientation:"vertical"
      },
      type:"container"
    },
    {
      children: [],
      id: "column1",
      name: 'test1',
      props: {
        className:"card-container",
        orientation:"vertical"
      },
      type:"container"
    }
  ]
  // children: generateItems(4, i => ({
  //   id: `column${i}`,
  //   type: 'container',
  //   name: columnNames[i],
  //   props: {
  //     orientation: 'vertical',
  //     className: 'card-container'
  //   },
  //   children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
  //     type: 'draggable',
  //     id: `${i}${j}`,
  //     props: {
  //       className: 'card',
  //       style: {backgroundColor: pickColor()}
  //     },
  //     data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
  //   }))
  // }))
}

export default {
  components: { Container, KanbanItem },
  data () {
    return {
      scene,
      upperDropPlaceholderOptions: {
        className: 'cards-drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true
      }
    }
  },
  mounted(){},
  methods: {
    setStep (val) {
      this.$emit('setStep', val)
    },
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },
    onCardDrop (columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)
        this.scene = scene
      }
    },
    getCardPayload (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
    dragStart () {
      console.log('drag started')
    },
    log (...params) {
      console.log(...params)
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
</style>