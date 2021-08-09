<template>
  <div class="table">
    <div class="table-row table-row_header"
         :class="{'table-row_header_hide-border': hoverIndex === 0}"
         :style="columnsGrid"
         v-if="columns && columns.length > 0"
    >
      <div class="table-row-cell table-row-cell_header"
           :class="{'table-row-cell_pointer': column.pointer}"
           v-for="column in columns"
           :key="column.id"
           v-if="!column.hideHead"
           @mouseleave="filterOpen = false"
      >
        <span>{{column.title}}</span>
      </div>
    </div>
    <div class="table-body"
         :style="{maxHeight: maxHeight}"
    >
      <div class="table-row"
           :class="{
              'table-row_hide-border': hoverIndex === index + 1,
               'table-row_active': hoverRow === row.id
          }"
           v-for="(row, index) in rows"
           :key="row.id"
           :style="columnsGrid"
           @mouseleave="setHover(false, false)"
           @mouseenter="setHover(row.id, index)"
      >
        <div class="table-row-cell"
             v-for="column in columns"
             :key="column.id"
             :style="column.style || {}"
        >
          <component :is="getComponentByType(column)"
                     :row="row"
                     :column="column"
                     :hover="hoverRow"
                     :index="getIndexWithPage(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StringCell from '@/components/Main/Table/StringCell/StringCell'
export default {
  name: "Table",
  components: {
    StringCell
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    maxHeight: {
      type: String,
      default: 'auto'
    },
    limit: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      hoverIndex: false,
      hoverRow: false
    }
  },
  computed: {
    columnsGrid () {
      const columns = this.columns.filter(item => !item.hideHead)
      const repeat = columns.map(item => item.width || 'minmax(70px, 1fr)').join(' ')
      return {
        gridTemplateColumns: `${repeat}`
      }
    }
  },
  methods: {
    setHover (rowId, index) {
      this.hoverRow = rowId
      this.hoverIndex = index
    },
    getComponentByType (column) {
      const type = column.type || ''
      switch (type) {
        default:
          return StringCell
      }
    },
    getIndexWithPage (index) {
      return this.page === 1 ? index : index + ((this.page - 1) * this.limit)
    }
  }
}
</script>

<style lang="scss" scoped>
  .table {
    display: inline-grid;
    min-width: 100%;
    background: white;
    box-shadow: 0 0 20px rgba(black, 0.05);
    border-radius: 5px;
    min-height: 104px;

    &-body {
      padding: 12px 4px 9px;
      margin: -12px -4px 0;
      box-sizing: border-box;
    }

    &-row {
      position: relative;
      display: grid;
      align-items: center;
      height: auto;
      min-height: 52px;
      grid-gap: 0 20px;
      font-size: 13px;
      padding: 8px 35px;
      transition: 0.3s;

      &:hover:not(&_header) {
        box-shadow: 0 0 12px rgba(black, 0.15);
        border-radius: 0 5px 5px 0;
        border-top-color: transparent;
        z-index: 4;

        &:before {
          opacity: 1;
        }
      }

      &:before {
        content: '';
        position: absolute;
        top: -1px;
        left: -4px;
        width: 4px;
        opacity: 0;
        height: calc(100% + 2px);
        background-color: #4CAF50;
        border-radius: 4px 0 0 4px;
        transition: 0.3s;
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 35px;
        height: 1px;
        width: calc(100% - 70px);
        background-color: #F4F4F4;
      }

      &:last-child {
        &:after {
          content: none;
        }
      }

      &_header {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #4CAF50;
        z-index: 3;
        background-color: white;
        cursor: default;

        &_hide-border {
          &:after {
            background-color: transparent;
          }
        }
      }

      &_active, &_hide-border {
        &:after {
          background-color: transparent;
        }
      }

      &-cell {
        position: relative;
        user-select: none;

        &_header {
          display: flex;
          align-items: center;
          height: 100%;
        }

        &_pointer {
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            color: #2E98DD;
          }
        }

        &__filter {
          top: 36px;
          left: 0;
        }

        &__icon-sort {
          margin-left: 5px;
          font-size: 8px;
          transition: 0.2s linear;

          &_active {
            transform: rotate(180deg);
          }
        }

        &__icon-filter {
          margin-left: 5px;
          font-size: 6px;
          transition: 0.2s linear;
          transform: rotate(180deg);

          &_active {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
</style>