<template>
  <div class="form">
    <div class="form-row">
      <div>Name Crypto: </div>
      <input v-model="nameCrypto"
             class="form__input"
      >
    </div>
    <div class="form-row">
      <div>Count: </div>
      <input v-model="cryptoCount"
             class="form__input"
      >
    </div>
    <div class="form__button">
      <Button @buttonClick="addCrypto">Add</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Main/Button/Button'
import {mapMutations} from 'vuex'
export default {
  name: "Form",
  components: {
    Button
  },
  data () {
    return {
      nameCrypto: '',
      cryptoCount: ''
    }
  },
  methods: {
    ...mapMutations(['createBriefcaseCryptoPayments']),
    addCrypto () {
      this.createBriefcaseCryptoPayments({
        name: this.nameCrypto,
        count: this.cryptoCount,
        id: Date.now()
      })
      this.$emit('closeForm')
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    position: relative;
    padding: 20px 0;
    width: 500px;

    &-row {
      display: grid;
      grid-template-columns: 100px auto;
      grid-gap: 20px;
      align-items: center;
    }

    &__input {
      width: 50px;
      padding: 12px 20px;
      margin: 8px 0;
    }

    &__button {
      display: flex;
      padding-top: 15px;
    }
  }
</style>