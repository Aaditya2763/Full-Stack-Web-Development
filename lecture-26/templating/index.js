 const express =require('express');
 const app=express();
 const path=require('path');
 app.set('view engine','ejs');



 app.set('views',path.join(__dirname,'views'));
///////////////////////////////////////////////////////////////////////////////////////////////
 app.get('/r/:subredit',(req,res)=>{
    res.send(`<h1> You are looking for ${req.params.subredit} subredit</h1>`);
})
///////////////////////////////////////////////////////////////////////////////////////////

app.get('/',(req,res)=>{
    res.render('home'); 
})
////////////////////////////////////////////////////////////////////////////////////////////
const todos=["go to gym","Buy groceries","strat travelling","Download  a good movie","Pay electricity bill"]
app.get('/todo',(req,res)=>{

    const firstName ="Aaditya";
    const lastName="Singh";
    res.render('todos',{todos,firstName,lastName}); 
}) 

app.get('/random',(req,res)=>{
    const randomNum= Math.floor(Math.random()*10)+1;
    res.render('random',{randomNum})
})






 app.listen(3000,()=>{
     console.log("server started at port 3000")
 })