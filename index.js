//index.js
require("dotenv-safe").load()
const MercadoBitcoin = require("./api").MercadoBitcoin
const MercadoBitcoinTrade = require("./api").MercadoBitcoinTrade

var infoApi = new MercadoBitcoin({ currency: 'BTC' })
var tradeApi = new MercadoBitcoinTrade({
    currency: 'BTC',
    key: process.env.KEY,
    secret: process.env.SECRET,
    pin: process.env.PIN
})

setInterval(() =>
    infoApi.ticker((tick) => {
        // console.log(tick)
        console.log('Pesquisando Valor do Btc...')
        console.log(tick.ticker.sell)
        if (tick.ticker.sell <= 34500) {
            console.log('COOOOOOOMPRAAAA')
                // tradeApi.placeBuyOrder(1, 50000,
                //     (data) => console.log('Ordem de compra inserida no livro. ' + data),
                //     (data) => console.log('Erro ao inserir ordem de compra no livro. ' + data))
        } else
            console.log('Ainda muito alto, vamos esperar pra comprar depois.')
    }),
    process.env.CRAWLER_INTERVAL
)