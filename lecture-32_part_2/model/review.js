
const mongoose=require('mongoose');

const reviewSchema =new mongoose.Schema({
    review:String,
    rating:number
})