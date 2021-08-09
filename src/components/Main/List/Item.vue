<template>
  <li class="item" @click="clickItem(item)">
    <span>{{index + 1}}</span>
    <span class="item_start">{{convertNumber(item.priceUsd)}} USD</span>
    <span>{{convertNumber(item.changePercent24Hr)}}</span>
    <span class="item_end">({{convertNumber(item.changePercent24Hr)}} %)</span>
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
    display: grid;
    grid-template-columns: minmax(20px, 30px) repeat(3, minmax(100px, 200px));
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;

    &_start {
      text-align: left;
    }

    &_end {
      text-align: end;
    }

  }

  @media(min-width: 320px) and (max-width: 767px) {
    .item {
      font-size: 15px;
      grid-template-columns: repeat(4, auto);
    }
  }
</style>