
const express=require("express");
const app=express();












app.get('/',(req,res)=>{
    res.send('connected')
})


app.listen(3000,(req,res)=>{
    console.log("server started at port 3000")
})
