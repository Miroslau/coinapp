export default {
    state: {
        briefcaseCryptoPayments: []
    },
    getters: {
        allBriefcaseCryptoPayments (state) {
            return state.briefcaseCryptoPayments
        }
    },
    mutations: {
        updateBriefcaseCryptoPayments (state, briefcaseCryptoPayments) {
            state.briefcaseCryptoPayments = briefcaseCryptoPayments
        },
        createBriefcaseCryptoPayments (state, newBriefcaseCryptoPayments) {
            state.briefcaseCryptoPayments.unshift(newBriefcaseCryptoPayments)
            localStorage.setItem('briefcaseCryptoPayments', JSON.stringify(state.briefcaseCryptoPayments))
        },
        deleteBriefcaseCryptoPayments (state, id) {
            console.log(id)
            const index = state.briefcaseCryptoPayments.findIndex(item => item.id === id)
            if (index !== -1) {
                state.briefcaseCryptoPayments.splice(index, 1)
                localStorage.setItem('briefcaseCryptoPayments', JSON.stringify(state.briefcaseCryptoPayments))
            }
        }
    },
    actions: {
        getBriefcaseCryptoPayments ({commit}) {
            const briefcaseCryptoPayments = JSON.parse(localStorage.getItem('briefcaseCryptoPayments'))
            commit('updateBriefcaseCryptoPayments', briefcaseCryptoPayments)
        }
    },
}