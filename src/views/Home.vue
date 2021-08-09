<template>
 <div class="home">
   <div class="home-container">
     <div class="home-container__title">Coin project</div>
     <Button class="home-container-button"
             @buttonClick="openForm"
     >
       Add
     </Button>
   </div>
   <div class="home-popular-crypto">
     <div class="home-popular-crypto__name">3 Popular crypto</div>
     <List :list="popularCrypto" @itemClick="briefcaseOpen"/>
   </div>
   <div class="home-table">
        <Table :columns="columnsCryptoPayments"
               :rows="displayCryptoPayments"/>
   </div>
   <div class="home__pagination">
     <Pagination :pages="pages"
                 :page="page"
                 @clickPage="clickPage"/>
   </div>
   <ModalWindow v-if="openBriefcase"
                @close="openBriefcase = false"
   >
     <CryptoBriefcase/>
   </ModalWindow>
   <ModalWindow v-if="formOpen" @close="formOpen = false">
     <Form @closeForm="formOpen = false"/>
   </ModalWindow>
 </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Table from '@/components/Main/Table/Table'
import cryptoPaymentsColumn from '@/constants/cryptocurrencyTable'
import CoincapApi from '@/api/Coincap/api'
import Button from '@/components/Main/Button/Button'
import List from '@/components/Main/List/List'
import ModalWindow from '@/components/Main/ModalWindow/ModalWindow'
import Form from '@/components/Main/Form/Form'
import CryptoBriefcase from '@/views/CryptoBriefcase'
import Pagination from '@/components/Main/Pagination/Pagination'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Table,
    List,
    ModalWindow,
    CryptoBriefcase,
    Pagination,
    Form,
    Button
  },
  computed: {
    allCryptoPayments: {
      get () {
        return this.$store.getters.allCryptoPayments
      },
      set (data) {
        this.$store.dispatch('getCryptoPayments', data)
      }
    },
    displayCryptoPayments () {
      return this.paginate(this.allCryptoPayments)
    }
  },
  data () {
    return {
      columnsCryptoPayments: cryptoPaymentsColumn,
      popularCrypto: [],
      defLimit: 30,
      openBriefcase: false,
      formOpen: false,
      eventForm: {
        create: false
      },
      page: 1,
      perPage: 9,
      pages: []
    }
  },
  methods: {
    getCryptoPaymentList () {
      CoincapApi.getCoinCap({limit: this.defLimit, page: this.page})
          .then((resp) => {
            this.allCryptoPayments = resp.data.data
            this.popularCrypto = this.allCryptoPayments.slice(0, 3)
          })
          .catch((err) => {
            console.error(err)
          })
    },
    paginate (cryptoPayments) {
      let page = this.page
      let perPage = this.perPage
      let from = (page * perPage) - perPage
      let to = (page * perPage)
      return cryptoPayments.slice(from, to)
    },
    setPages () {
      let numberOfPage = Math.ceil(this.allCryptoPayments.length / this.perPage)
      for (let index = 1; index <= numberOfPage; index++) {
        this.pages.push(index)
      }
    },
    clickPage (item) {
      this.page = item
    },
    briefcaseOpen (item) {
      this.openBriefcase = true
    },
    openForm () {
      this.formOpen = true
    }
  },
  beforeMount() {
    this.getCryptoPaymentList()
  },
  watch: {
    allCryptoPayments () {
      this.setPages()
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    position: relative;

    &-container {
      padding: 20px 0;
      background-color: #42b983;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__title {
        padding-left: 15px;
        font-size: 20px;
      }

      &-button {
        margin-right: 20px;
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

    &-popular-crypto {
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
      padding: 30px 0;

      &__name {
        padding-bottom: 15px;
        text-align: center;
        font-size: 35px;
      }
    }

    &__send {
      position: relative;
      padding-bottom: 0;
      padding-top: 30px;
      margin-right: 8px;
      display: flex;
      justify-content: flex-end;
      box-shadow: 0 -10px 35px -15px rgba(#B9B9B9, 0.4);
    }

    &-table {
      max-width: 1072px;
      width: 100%;
      margin: 0 auto;
    }

    &__pagination {
      margin-top: 20px;
    }
  }

  @media(min-width: 320px) and (max-width: 767px) {
    .home {
      &-popular-crypto {
        margin: 0 auto;

        &__name {
          font-size: 20px;
          text-align: center;
        }
      }
    }
  }
</style>
