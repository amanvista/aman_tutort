const express = require('express')
const app = express()
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());
app.set('view engine', 'ejs')
const port = 3000

app.use(express.static(__dirname+'/pages/assets'));

app.get("/ejs", function(req,res){
    res.render('login')
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/login/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/pages/admin_page/admin_page.html");
  });


const authRoute = require('./routes/auth')
const errorMiddleware = require("./middleware/error")


//Routes Middleware
app.use('/api/user', authRoute)
app.use(errorMiddleware)


app.listen(port, () => {
  console.log(`Server Running on ${port}`)
})