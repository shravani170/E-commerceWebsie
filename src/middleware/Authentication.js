const jwt = require("jsonwebtoken")

const Auth = async function (req, res, next) {
    try {

   const authHeader= req.headers['authorization']
   if (!authHeader) {
    return res.status(403).send({ status: false, message: `Missing authentication token in request` })
}
   const bearerToken=authHeader.split(' ')
   const token=bearerToken[1]
        if (token) {
            let decodedtoken = await jwt.verify(token, 'project5')
            if (!decodedtoken) {
                res.status(403).send({ status: false, message: `Invalid authentication token in request` })
                return; 
            }
            req.user = decodedtoken//user id present in token
            //  console.log(decodedtoken)
            next()
        }
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}




module.exports.Auth = Auth