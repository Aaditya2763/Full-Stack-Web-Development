const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
//const product=require('')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
const seedDB=require("./seed");
const product = require('./model/product');


mongoose.connect('mongodb://localhost:27017/shop-app')
.then(()=> console.log('DB Connected'))
.catch((err)=>console.log(err));


// Seed the dummu_products

seedDB;


























app.get("/products",async(req,res)=>{
    const products= await product.find({})

   res.render('index',{products})
   console.log(products)
 
    
})



app.get("/",(req,res)=>{
    res.send('Connected')
})


app.listen(3000,()=>{
    console.log('Server started at port 3000')
})