const express=require('express');
const user = require('../model/user');
const router=express.Router();
const bodyParser = require('body-parser')
const User=require('../model/user');






router.get('/',(req,res)=>{
 res.send("welcome to home page ")

})

router.get(("/products"),async(req,res)=>{

    const users=await User.find({})

   res.render("products/index",{users})
})

   router.get(('/products/new'),(req,res)=>{
       res.render("products/new")
   })


   router.post(('/products'), async (req,res)=>{
       const {name , phone_no, email, hobbies}= req.body;
    await user.create({name, phone_no , email, hobbies});
    req.flash('success',"Entity added successfully")
    res.redirect('/products');
   })


   router.get(('/products/:id/edit'),async(req,res)=>{

     const {id}=req.params;
     const user= await User.findById(id)

    res.render("products/edit" ,{user})
})

router.delete(('/products/:id'), async (req,res)=>{
    const {id} = req.params;
  
    await user.findByIdAndDelete(id);
    res.redirect("/products");
})


router.patch(("/products/:id"), async (req,res)=>{

    const {id}=req.params;
    const {name, phone_no, email, hobbies} =req.body;
   await user.findByIdAndUpdate(id, {name, phone_no, email, hobbies});

   res.redirect(`/products/${id}`);

})


















module.exports=router;