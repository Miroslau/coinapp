export default {
    methods: {
        convertNumber: function (number) {
            let num = Math.round(+number * 100) / 100
            return String(num.toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
    }
}
