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