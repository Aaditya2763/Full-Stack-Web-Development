
const express=require('express');
const router=express.Router();


const product=require('../model/product');

router.get('/products',async(req,res)=>{
 const products=await product.find({});
res.render('index',{products})
})

router.get('/products/new',(req,res)=>{
    
    
   res.render('new')
})

router.post('/products',async(req,res)=>{
    const{name ,price ,desc}=req.body;
  await product.create({name,price,desc});
   res.redirect('/products')
})  






 


 
 
module.exports=router;