const generateOtp = require('../utils/otpGenerator')
const bcrypt = require("bcryptjs");
const catchAsyncErrors = require("../middleware/catchAsyncError")


const router = require('express').Router()

router.post('/register', catchAsyncErrors(async (req,res)=>{
     const {username, password} = req.body
     console.log(await bcrypt.hash(password, 10))
    res.send("Done")
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