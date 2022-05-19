const jwt = require("jsonwebtoken")
const createToken = async()=>{
    let token = await jwt.sign({_id:"aman123123123"},"hello")
    console.log(token)
    const userVer = await jwt.verify(token, "hello", { expiresIn: "2 seconds"})
    console.log(userVer)
    return token
}
module.exports = createToken
