
const express=require('express');
const app=express();
const path=require('path');
 app.set('views',path.join(__dirname,'views'));
 app.set('view engine','ejs');

 const productRoutes=require('./routes/prouductRoutes')

 const mongoose=require('mongoose');
 mongoose.connect('mongodb://localhost:27017/shopping-website')
 .then(()=>console.log('DB Connected'))
 .catch((err)=>console.log(error));

 const seedDB=require('./seed');

 seedDB();











app.use(productRoutes);


app.get(('/'),(req,res)=>{
    res.send('connected')
})


app.listen(3000,(req,res)=>{
    console.log('Server started at port')
})