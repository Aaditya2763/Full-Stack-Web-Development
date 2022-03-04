const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({
   title:String,
   year:Number,
   language:String,
   text:String,
  
   diractor:String

   
})


const movie=mongoose.model('movie',movieSchema) ;


module.exports=movie;