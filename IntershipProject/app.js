const express=require('express');
const app=express();
const path=require('path');
const router=require('./routes/productRoutes');
const ejsMate=require('ejs-mate');
const mongoose=require('mongoose');
const methodoverride=require('method-override')
const bodyParser = require('body-parser')
const flash=require('connect-flash');
const session=require('express-session')


mongoose.connect('mongodb://localhost:27017/Internship-project')
.then(() => {
    console.log("DB Connected")
})
.catch((err) => {
   console.log("err") 
});


app.engine('ejs',ejsMate);
app.set('view engine','ejs')
app.set("views",path.join(__dirname,"views"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router);
app.use(methodoverride(_method));
app.use(flash)



const sessionConfig = {
    secret: 'weneedabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: true,
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 1,
      maxAge:1000 * 60 * 60 * 24 * 7 * 1
    }
  }

  app.use(session(sessionConfig));

  
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
   
    next();
  }); 

      
const User = require('./model/user');
const SeedUser=require('./seed');


SeedUser();










 



app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(3000,(req,res)=>{
    console.log("Server started at port 3000");
})