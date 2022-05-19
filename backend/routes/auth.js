const generateOtp = require('../utils/otpGenerator')
const bcrypt = require("bcryptjs");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })



const router = require('express').Router()

router.post('/register', urlencodedParser, catchAsyncErrors(async (req,res)=>{
     const {email, password} = req.body
     console.log(await bcrypt.hash(password, 10))
    res.send("Registered :)")
}))

router.post('/otp', (req,res)=>{
    res.send({'OTP':generateOtp()}) 
})

router.post('/login', (req,res)=>{
    res.send({'OTP':generateOtp()}) 
})
router.post('/login', async (req,res)=>{
    const token = awaitcreateToken()
    res.header('auth-token', token).send(token)
    res.send('Register') 
})
module.exports = router