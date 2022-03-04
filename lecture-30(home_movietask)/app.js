
const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/movie-app')
.then(()=>console.log('DB connected successfully'))
.catch((err)=>console.log(err));

const path=require('path');
const movie= require('./model/movies');
const SeedMovies = require('./seed');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

const seedmovie=require('./seed');

SeedMovies();

app.get("/",(req,res)=>{
res.send('connected')
})










app.get("/movies",async(req,res)=>{
 const movies=await movie.find({});//this model name depend upon the variable created above to store model reference 

 res.render('index',{movies})


})




app.listen(3000,(req,res)=>{
    console.log('Server started at port 3000')
})