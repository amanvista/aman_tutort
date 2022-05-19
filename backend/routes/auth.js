const createToken = require('../middleware/jwt')
const catchAsyncError = require("../middleware/catchAsyncError")
const generateOtp = require('../utils/otpGenerator')

const router = require('express').Router()

router.post('/register', (req,res)=>{
    res.send('Register') 
})


router.post('/login', catchAsyncError(
    async (req,res,next)=>{
        const token = await createToken()
    //res.header('auth-token', token).send(token)
    res.send({'token':token}) 
    }))

router.get('/otp', catchAsyncError(
    async (req,res,next)=>{
        let otp = generateOtp()
        res.send({'OTP':otp}) 
    }))

module.exports = router