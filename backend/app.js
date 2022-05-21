const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const showDBResults = require('./controllers/db')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const authRoute = require('./routes/auth')
const errorMiddleware = require("./middleware/error");
const catchAsyncError = require('./middleware/catchAsyncError');


app.use(bodyParser.json());
app.set('view engine', 'ejs')
const port = 3000

app.use(express.static(__dirname+'/pages/assets'));

app.get("/", function(req,res){
    res.render('login')
})
app.get("/rpage", function(req,res){
    res.render('register')
})





app.get("/adminpage", (req, res) => {
    // res.sendFile(__dirname + "/pages/admin_page/admin_page.html");
    res.render('adminPage')
  });




//Routes Middleware
app.use('/api/user', authRoute)
app.use(errorMiddleware)


app.listen(port, () => {
  console.log(`Server Running on ${port}`)
})