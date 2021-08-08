const axios = require('axios')

export default {
    getCoinCap: function ({limit = 50, page = 1}) {
        const instCred = axios.create({
            baseURL: `https://api.coincap.io/v2/`
        })
        return instCred.get(`assets?limit=${limit}`)
    },
    getCoinCapById: function (id) {
        const instCred = axios.create({
            baseURL: `https://api.coincap.io/v2/`
        })
        return instCred.get(`assets/${id}`)
    }
}