
const mongoose=require('mongoose');

const User = require('./model/user');


const Dummy_user=[
    {
      
        name:"Aaditya",
        phone_no:9467665000,
        email:"singhaditya2763@gmail.com",
        hobbies:"Coding"
            
            }
            
        ]


async function SeedUser(){
   await User.deleteMany({});  //we always work on model to perform operation on db
  await User.insertMany(Dummy_user)
   
 
   console.log("User seeded sucessfully");
   console.log(Dummy_user)
}


module.exports = SeedUser;