require("dotenv").config()


const _config = {
    secret_key : process.env.secret_key,
    public_key : process.env.public_key,
    private_key : process.env.private_key,
    url_endPoint : process.env.url_endPoint
}

const config = Object.freeze(_config)
module.exports = config