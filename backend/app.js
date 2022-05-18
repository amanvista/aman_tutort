const express = require('express')
const app = express()
const port = 3000


const authRoute = require('./routes/auth')


//Routes Middleware
app.use('/api/user', authRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})