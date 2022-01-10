var Twit = require('twit')
const {tweet, twit} = require("twit/examples/bot");

require("dotenv").config();

const Bot = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
})

const mensagens= ["Ninguém, NIGUÉM nesta teirra consuegue agraidar todo muoindo",
    "O Homem saico do kuduro, tuido nele é saico, a visda dele é saico", "Vamos manter a quelma!", "Malusssssco Mueinto Doido",
    "Cuaintos Kwanzas precieiso para para compraiere um salguedo e um guaraveita?",
    "Aos meus inimiguuuUUss quiero agradeçueir,(Obrigueido por me deixeir mais fuerte)",
    "Tu é maluusssco, Tu é piraido, o terno dele é de saico, o oculos é de saico, tudo nele é saico"];

const  messageLocation = Math.floor(Math.random() * mensagens.length);

const writeTweet = function () {
    Bot.post('statuses/update', {
        status: mensagens[messageLocation]
    }, function (err, data, response) {
        console.log(data)
        console.log("postou!! ")
    });
}
writeTweet()
setInterval(writeTweet, 300000);
