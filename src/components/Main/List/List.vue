<template>
  <div class="list">
    <ul class="list-item">
      <item v-for="(item, index) in list"
            :key="item.id"
            :item="item"
            :index="index"
            @itemClick="itemClick"
            :list="list"/>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Main/List/Item'
export default {
  name: "List",
  props: ['list'],
  components: {
    Item
  },
  methods: {
    itemClick (item) {
      this.$emit('itemClick', item)
    }
  }
}
</script>

<style lang="scss" scoped>
 .list {
   position: relative;

   &-item {
     margin: 0;
     padding: 0;
     list-style: none;
   }
 }
</style>