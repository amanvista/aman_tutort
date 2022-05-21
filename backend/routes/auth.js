const generateOtp = require('../utils/otpGenerator')
const bcrypt = require("bcryptjs");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const bodyParser = require('body-parser');
const { user } = require('pg/lib/defaults');
const showDBResults = require('../controllers/db');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


const router = require('express').Router()

router.post('/login', urlencodedParser, catchAsyncErrors(async (req,res)=>{
    const {email,password} = req.body
    // console.log(email,password)
    const userQuery = "select * from admin where email = '"+email+"' "
    let result = await showDBResults('tutort',userQuery)
    if(!result.rows[0]) res.status(400).send("Error Occured")
    else {
        let dbEmail = result.rows[0].email, dbpwdHash = result.rows[0].pwdHash
        let passwordCheck = await bcrypt.compare(password, dbpwdHash)
        if(passwordCheck) res.send("successful Login") 
        else res.send("Credentails Failed")
    }
}))


router.post('/register', urlencodedParser, catchAsyncErrors(async (req,res)=>{
    const {username,email,password} = req.body
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    console.log(username,email,password)
    // console.log(email,password)
    const userQuery = `insert into admin("userName","email","pwdHash") values('${username}','${email}','${hashedPassword}');`
    let result = await showDBResults('tutort',userQuery)
    res.send("successfully Registered") 
}))



module.exports = router