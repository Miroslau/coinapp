export default {
    state: {
        cryptoPayments: []
    },
    getters: {
        allCryptoPayments (state) {
            return state.cryptoPayments
        }
    },
    mutations: {
        updateCryptoPayments (state, cryptoPayments) {
            state.cryptoPayments = cryptoPayments
        }
    },
    actions: {
        getCryptoPayments ({commit}, data) {
            const cryptoPayments = data
            commit('updateCryptoPayments', cryptoPayments)
        }
    },
}