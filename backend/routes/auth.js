const createToken = require('./jwt')

const router = require('express').Router()

router.post('/register', (req,res)=>{
    res.send('Register') 
})

router.post('/login', async (req,res)=>{
    const token = await createToken()
    res.header('auth-token', token).send(token)
    res.send('Register') 
})
module.exports = router