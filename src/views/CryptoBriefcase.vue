<template>
  <div class="crypto-briefcase">
    <div class="crypto-briefcase-row"
         v-for="(cryptoBriefcase, index) in allCryptoBriefcase"
         :key="cryptoBriefcase.id"
    >
      <div>{{index + 1}}</div>
      <div>{{cryptoBriefcase.name}}</div>
      <div>{{cryptoBriefcase.count}}</div>
      <div @click="deleteItem(cryptoBriefcase)" class="crypto-briefcase-row__delete">&times;</div>
    </div>
  </div>
</template>

<script>
import {findIndex} from 'lodash'
import {mapMutations} from 'vuex'
export default {
  name: "CryptoBriefcase",
  computed: {
    allCryptoBriefcase: {
      get () {
        return this.$store.getters.allBriefcaseCryptoPayments
      }
    }
  },
  methods: {
    getCryptoBriefcase () {
      this.$store.dispatch('getBriefcaseCryptoPayments')
    },
    ...mapMutations(['deleteBriefcaseCryptoPayments']),
    deleteItem (item) {
      this.deleteBriefcaseCryptoPayments(item.id)
    }
  },
  beforeMount() {
    this.getCryptoBriefcase()
  }
}
</script>

<style lang="scss" scoped>
  .crypto-briefcase {
    position: relative;

    &-row {
      display: grid;
      grid-template-columns: 20px 100px 50px 50px;
      align-items: center;
      grid-gap: 15px;
      padding: 15px 0;

      &__delete {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
</style>