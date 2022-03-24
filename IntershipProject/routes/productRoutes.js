const express=require('express');
const router=express.Router();
// const bodyParser = require('body-parser')
const User=require('../model/user');




//home route

router.get('/',(req,res)=>{
 res.send("welcome to home page ")

})

//route to find product and display products

router.get(("/products"),async(req,res)=>{

    const users=await User.find({})

   res.render("products/index",{users})
})

//route to create new form
   router.get(('/products/new'),(req,res)=>{
       res.render("products/new")
   })

// route to create new product
   router.post(('/products'), async (req,res)=>{
       const {name , phone_no, email, hobbies}= req.body;
    await User.create({name, phone_no , email, hobbies});
  
    res.redirect('/products');
   })

   


//    router.get(('/products/:id/edit'),async(req,res)=>{

//      const {id}=req.params;
//      const user= await User.findByIdAndUpdate(id);

//     res.render("products/edit" ,{user});
// })

// router.delete(('/products/:id'), async (req,res)=>{
//     const {id} = req.params;
  
//     await User.findByIdAndDelete(id);
//     res.redirect("/products");
// })


// router.patch(("/products/:id"), async (req,res)=>{

//     const {id}=req.params;
//     const {name, phone_no, email, hobbies} =req.body;
//    await User.findByIdAndUpdate(id, {name, phone_no, email, hobbies});

//    res.redirect(`/products/${id}`);

// })


















module.exports=router;