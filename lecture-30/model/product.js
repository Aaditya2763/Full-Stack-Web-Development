const mongoose=require('mongoose');
const { stringify } = require('querystring');

const productSchema=new mongoose.Schema({
    price:Number,
    name:String,
    description:String,
})

const product=mongoose.model('product',productSchema);

module.exports=product;
