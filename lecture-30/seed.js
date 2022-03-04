
const { Module } = require('module');
const mongoose=require('mongoose');
const product= require("./model/product");  //

const dummy_Products=[
    {
        name:"iphone",
        price:1000000,
        description:"This is  a iphone 13 Pro",
    },
    {
        name:"Vivo s5",
        price:10000,
        description:"This is  a vivo s5",
    },
    {
        name:"Mackbook air",
        price:900000,
        description:"This is a Mackbook air",
    },
    {
        name:"ifan",
        price:1000000,
        description:"This is a ifan",
    }
    
]

async function  seedDB(){
 await product.deleteMany({});
   await product.insertMany(dummy_Products);
   console.log("DB Seeded")
}




Module.exports=seedDB();


