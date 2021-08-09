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
      <div class="crypto-card-info__item_padding">Symbol: {{cryptoPayment.symbol}}</div>
      <div class="crypto-card-info__item_padding">Price: {{convertNumber(cryptoPayment.priceUsd)}} USD</div>
      <div class="crypto-card-info__item_padding">Change Percent 24 Hr: {{convertNumber(cryptoPayment.changePercent24Hr)}} %</div>
    </div>
    <div class="crypto-card-graphic">
      <iframe src="https://blockchain.info/" :width="defaltWidth" height="500px"></iframe>
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
      defaltWidth: 700,
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
    updateWidth() {
      const width = window.innerWidth;
      if (width === 320) this.defaltWidth = width
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
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;

      &__item {
        background: #F4F4F4;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 0 0 20px rgba(black, 0.05);
        font-size: 20px;

        &_padding {
          padding-top: 20px;
        }
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

  @media(min-width: 320px) and (max-width: 767px) {
    .crypto-card {
      &-head {
        justify-content: center;
      }

      &-info {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>