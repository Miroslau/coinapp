<template>
  <li class="item" @click="clickItem(item)">
    <span>{{index + 1}}</span>
    <span>{{convertNumber(item.priceUsd)}} USD</span>
    <span>{{convertNumber(item.changePercent24Hr)}}</span>
    <span>({{convertNumber(item.changePercent24Hr)}} %)</span>
  </li>
</template>

<script>
import convertNUmber from '@/mixin/convertNUmber'
export default {
  name: "Item",
  mixins: [convertNUmber],
  props: ['item', 'index', 'list'],
  methods: {
    clickItem (item) {
      this.$emit('itemClick', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
  }
</style>