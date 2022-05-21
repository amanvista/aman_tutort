const bcrypt = require("bcryptjs/dist/bcrypt")

let makeHash = async (data)=>{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data,salt)
    return hashedPassword
}

makeHash("admin").then((pass)=>console.log(pass))