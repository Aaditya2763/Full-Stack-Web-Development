
const express=require('express');
const router=express.Router();


const product=require('../model/product');

router.get('/products',async(req,res)=>{
 const products=await product.find({});
res.render('index',{products})

})









module.exports=router;