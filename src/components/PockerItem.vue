<template>
  <Draggable v-if="item">
    <div class="cursor-move my-2 mx-4 pock-card">
      <div class="p-4 space-y-2">
        <p class="text-xl">{{ item.data }}</p>
        <p class="text-sm" v-if="item.text">{{ item.text }}</p>
      </div>
    </div>
  </Draggable>
</template>

<script>
import { getRandomEmoji } from '@/utils/helpers'
import { Draggable } from 'vue3-smooth-dnd'
export default {
  name: "PockerItem",
  components: { Draggable },
  data(){ 
    return {
      emoji: getRandomEmoji()
    }
  },
  props: {
    item: Object,
  },
};
</script>
<style scoped lang="scss">
.pock-card {
  border: 4px solid #FF52A5;
  background: #2F343F;
  color: white;
  &:active {
    // background: #2F343F;
    background: rgba(255, 17, 119, 0.1);
  }
}
</style>