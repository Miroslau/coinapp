import Vue from 'vue'
import Vuex from 'vuex'
import cryptopayments from '@/store/modules/cryptopayments'
import briefcaseCryptoPayments from '@/store/modules/briefcaseCryptoPayments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cryptopayments,
    briefcaseCryptoPayments
  }
})
