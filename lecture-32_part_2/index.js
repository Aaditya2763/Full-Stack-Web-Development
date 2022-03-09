
const express=require("express");
const app=express();
const path=require ('path');
engine = require('ejs-mate');
const productroutes=require('./route/productroutes');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine','ejs');

const methodoverride=require("method-override");
app.use(methodoverride('_method'));
const mongoose=require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/shopping-website')
.then(()=> console.log("db Seeded"))
.catch((err) => console.log(err));
app.use(express.urlencoded({extended:true}));


app.use(productroutes);

const seedDB=require("./seed");


seedDB();








app.get('/',(req,res)=>{
    res.send('connected')
})


app.listen(3000,(req,res)=>{
    console.log("server started at port 3000")
})
