const express = require('express')
const app = express()
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});
const authRoute = require('./routes/auth')
const errorMiddleware = require("./middleware/error")


//Routes Middleware
app.use('/api/user', authRoute)
app.use(errorMiddleware)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})