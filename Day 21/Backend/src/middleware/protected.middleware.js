const jwt = require("jsonwebtoken")
const config = require("../config/config")

const protected =  async (req, res, next) => {
    try {
         
      const token =  req.headers.authorization.split(" ")[1]
    

       let decode = await jwt.verify(token , "secret-key")
        
       req.userId = decode.id
       

       next()
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message})
        
    }
}


module.exports = protected