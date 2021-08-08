<template>
<div class="crypto-card">
  <div class="crypto-card-head">
    <Button class="crypto-card__button"
            @buttonClick="backOnMainPage"
    >
      Back
    </Button>
    <Button class="crypto-card__button"
            @buttonClick="addInCryptoBriefcase"
    >
      Add
    </Button>
  </div>
  <div class="crypto-card-info">
    <div class="crypto-card-info__item">
      <div>Name: {{cryptoPayment.name}}</div>
      <div>Symbol: {{cryptoPayment.symbol}}</div>
      <div>Price: {{convertNumber(cryptoPayment.priceUsd)}} USD</div>
      <div>Change Percent 24 Hr: {{convertNumber(cryptoPayment.changePercent24Hr)}} %</div>
    </div>
    <div class="crypto-card-graphic">
      <iframe src="https://blockchain.info/" width="700" height="500px"></iframe>
    </div>
  </div>
</div>
</template>

<script>
import CoincapApi from '@/api/Coincap/api'
import Button from '@/components/Main/Button/Button'
import convertNUmber from '@/mixin/convertNUmber'
import {mapMutations} from 'vuex'
export default {
  name: "CryptoCard",
  mixins: [convertNUmber],
  components: {
    Button
  },
  data () {
    return {
      cryptoPayment: {}
    }
  },
  methods: {
    ...mapMutations(['createBriefcaseCryptoPayments']),
    getCryptoPayment () {
      CoincapApi.getCoinCapById(this.$route.params.id)
          .then((resp) => {
            this.cryptoPayment = resp.data.data
          })
          .catch((err) => {
            console.error(err)
          })
    },
    backOnMainPage () {
      const router = {
        name: 'Home'
      }
      this.$router.push(router)
    },
    addInCryptoBriefcase () {
      this.createBriefcaseCryptoPayments({
        name: this.cryptoPayment.name,
        count: 1,
        id: Date.now()
      })
    }
  },
  beforeMount() {
    this.getCryptoPayment()
  }
}
</script>

<style lang="scss" scoped>
  .crypto-card {
    position: relative;

    &-head {
      padding: 20px 0;
      background-color: #42b983;
      display: flex;
    }

    &-info {
      padding-top: 30px;
      border: 1px solid black;
      display: grid;
      grid-template-columns: minmax(100px, 500px) auto;

      &__item {
        background: #F4F4F4;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 0 0 20px rgba(black, 0.05);
        font-size: 30px;
      }
    }

    &__button {
      margin-left: 20px;
      background-color: white;
      color: black;
      border: 2px solid #555555;
      transition: .3s;

      &:hover {
        background-color: #555555;
        color: white;
      }
    }
  }
</style>