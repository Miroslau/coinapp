const routeToCryptCard = {
    name: 'CryptoCard',
    params: {
        id: 'id'
    },
    paramName: 'id',
    paramValue: 'id',
    props: true
}

const columns = [
    {
        title: 'Name',
        prop: 'name',
        route: routeToCryptCard,
        hover: true,
        width: 'minmax(40px, 1fr)'
    },
    {
        title: 'Price',
        prop: 'priceUsd',
        postfix: '$',
        type: 'number',
        width: 'minmax(60px, 1fr)'
    },
    {
        title: '24h%',
        prop: 'changePercent24Hr',
        type: 'number',
        width: 'minmax(30px, 1fr)'
    },
    {
        title: 'Difference in procent',
        prop: 'changePercent24Hr',
        postfix: '%',
        type: 'number',
        width: 'minmax(20px, auto)'
    }
]

export default columns