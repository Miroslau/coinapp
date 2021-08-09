<template>
  <form class="form">
    <div class="form-row">
      <input class="form__input"
             type="text"
             id="name"
             v-model="nameCrypto"
             placeholder="Name Crypto"
             autocomplete="off"
      >
    </div>
    <div class="form-row">
      <input class="form__input"
             type="text"
             id="count"
             placeholder="Count"
             v-model="cryptoCount"
             autocomplete="off"
      >
    </div>
    <div class="form__button">
      <Button @buttonClick="addCrypto">Add</Button>
    </div>
  </form>
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
    max-width: 350px;
    padding: 50px 20px 20px;
    margin: 50px auto 30px;
    background: white;

    &__button {
      margin: 0;
      padding-top: 10px;
      width: 100%;
      line-height: 42px;
      border-width: 0;
      color: white;
      font-size: 20px;
    }

    &-row {
      position: relative;
      margin-bottom: 40px;
    }

    &__input {
      display: block;
      width: 100%;
      padding: 0 10px;
      line-height: 40px;
      background: none;
      border-width: 0;
      border-bottom: 2px solid #4a90e2;
      transition: all 0.2s ease;

      &:focus {
        outline: 0;
        border-color: #F77A52;
      }

      &:focus + label, :valid + label {
        transform: translateY(-60px);
        margin-left: -14px;
        font-size: 14px;
        font-weight: 400;
        outline: 0;
        border-color: #F77A52;
        color: #F77A52;
      }
    }

    &__label {
      position: absolute;
      left: 13px;
      color: #9d959d;
      font-size: 20px;
      font-weight: 300;
      transform: translateY(-35px);
      transition: all 0.2s ease;
    }
  }
</style>