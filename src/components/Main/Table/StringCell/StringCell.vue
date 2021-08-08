<template>
  <div class="string-cell"
       @click.stop="clickCell"
  >
    <span class="string-cell-text"
          :class="{
            'string-cell-text_capitalize': column.capitalize,
            'string-cell-text_with-hover': column.route || column.hover
          }"
    >
      {{value}}
    </span>
  </div>
</template>

<script>
import {get} from 'lodash'
import convertNUmber from '@/mixin/convertNUmber'
export default {
  name: "StringCell",
  mixins: [convertNUmber],
  props: ['row', 'column', 'index'],
  computed: {
    value () {
      const fromProp = get(this.row, this.column.prop, '')
      const postfix = get(this.column, 'postfix', '')
      let value = get(this.row, this.column.display, fromProp)
      value = this.column.type === 'number' ? this.convertNumber(value) : value
      return value + postfix
    }
  },
  methods: {
    clickCell () {
      const isRoute = get(this.column, ['route', 'name'], '')
      if (isRoute) this.goToRoute(isRoute)
    },
    goToRoute (routeName) {
      const router = {
        name: routeName
      }
      const paramName = get(this.column, ['route', 'paramName'], '')
      const paramProp = get(this.column, ['route', 'paramValue'], '')
      const paramValue = get(this.row, paramProp, '')
      if (paramName && paramValue) {
        router.params = {
          [paramName]: paramValue
        }
      }
      this.$router.push(router)
    }
  }
}
</script>

<style lang="scss" scoped>
  .string-cell {
    display: flex;
    position: relative;

    &-text {
      display: flex;
      align-items: center;

      &_capitalize {
        text-transform: capitalize;
      }

      &_with-hover {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: #0D7BC4;
        }
      }
    }
  }
</style>