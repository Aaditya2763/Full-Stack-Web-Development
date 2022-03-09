
const express=require('express');
const Product = require('../model/product');
const router=express.Router();


router.get('/',(req,res)=>{
    res.send("Home Page")
})

router.get('/products',async(req,res) =>{
    const products=await Product.find({});

    res.render('product/index',{products});
})
 
router.get('/products/new',(req,res)=>{
    res.render('product/new')            
})

router.post('/products',async(req,res)=>{
    //can't destructure name,price etc due to data format so we have to use urlencoder)
   const {name,price,img,desc}=req.body;
   await Product.create({name,price,img,desc});
res.redirect('/products');
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    const product= await Product.findById(id);

    
   res.render('product/show', {product});
 

});





 
router.get('/products/:id/edit', async (req,res)=>{
    const {id}=req.params; 
    const product = await Product.findById(id);
   
    res.render('product/edit',{product})
});

router.patch("/products/:id",async(req,res)=>{
    const {id}=req.params;
    const {name,img,price,desc}=req.body;

    await Product.findByIdAndUpdate({name,img,price,desc});
    res.redirect('/products');

})

router.get('/products/:id/delete', async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id);

    res.redirect("/products")

})

















module.exports=router;