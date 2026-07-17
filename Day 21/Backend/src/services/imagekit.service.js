const imageKit = require("imagekit")
const config = require("../config/config")


const imagekit = imageKit({
    publicKey :  config.public_key,
    privateKey : config.private_key,
    urlEndpoint : config.url_endPoint
})


module.exports = imagekit