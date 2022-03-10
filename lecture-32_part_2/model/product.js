
const mongoose=require('mongoose');
const Review=require('./review');

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    img:String,
    desc:String,
    reviews:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:'Review'
        }
    ]
});

const product= mongoose.model('product',productSchema);

module.exports=product;