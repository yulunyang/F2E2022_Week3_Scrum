<template>
  <div class="flex">
    <div class="w-1/2">
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item py-2 bg-gray-300">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <div class="w-1/2">
      <h3>Draggable 2</h3>
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element, index }">
          <div class="list-group-item py-2 bg-gray-300">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
      <!-- <draggable
        class="list-group"
        tag="transition-group"
        group="people"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
        :list="list2"

        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        @change="log"
        item-key="order"
      >
        <template #item="{ element }">
          <li class="list-group-item py-2 bg-gray-300">
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.name }}
          </li>
        </template>
      </draggable> -->
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable"
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      drag: false,
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    },
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style lang="scss">
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
  }
  .list-group-item i {
    cursor: pointer;
  }
</style>