<template>
  <button class="button" @click="clickButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    clickButton () {
      this.$emit('buttonClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
</style>