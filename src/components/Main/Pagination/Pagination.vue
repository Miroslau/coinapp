<template>
  <div class="pagination">
    <div class="pagination__page"
         :class="{'pagination__page_active': currentPage === page}"
         v-for="currentPage in pages"
         :key="currentPage"
         @click="pageClick(currentPage)"
    >
      {{currentPage}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pages', 'page'],
  methods: {
    pageClick(item) {
      this.$emit('clickPage', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    position: relative;
    width: max-content;
    background: #fff;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    left: 50%;
    transform: translateX(-50%);

    &__page {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #383838;
      font-weight: 600;
      border-radius: 50%;
      cursor: pointer;
      transition: .3s ease-out;

      &_active {
        background: #383838;
        color: #fff;
      }

      &:hover {
        transition: .3s ease-out;
        background: #383838;
        color: #fff;
      }
    }
  }
</style>