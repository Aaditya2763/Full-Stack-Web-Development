
const express= require('express');
const app=express();
const path =require('path');
const bodyParser = require('body-parser');
const methodOverride=require ('method-Override');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride("_method"));
const{v4:uuid}=require('uuid');



app.use(bodyParser.urlencoded({ extended: true })) 


let comments=[
    {id:uuid(),author:'dog',comment:'woof woof'},
    {id:uuid(),author:'cat',comment:'meo meo'},
    {id:uuid(),author:'rat',comment:'chew chew'},
    {id:uuid(),author:'bat',comment:'booo booo'}
] 
///////////////////////////////////////////////////////////////
app.get('/comments',(req,res)=>{
    res.render('comments',{comments})
})
//////////////////////////////////////////////////////////////
app.get('/form',(req,res)=>{
  
     res.render('form');
   
       
})
//////////////////////////////////////////////////////////////

app.get('/user',(req,res)=>{
  const{username,age}=req.query;
//console.log(req.query);
res.send(`hello this request is requested by ${username}  ${age}`);
})

////////////////////////////////////////////////////////////
//request for new comment page 

app.get('/comments/new',(req,res)=>{
    res.render('newComment');
})
//////////////////////////////////////////////////////////
//creating new comment
app.post('/comments',(req,res)=>{
 const{author,comment}=req.body;
comments.push({id:uuid(),author,comment})
    res.redirect('/comments')
})

///////////////////////////////////////////////////////////
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('data is posted');
}) 
// Displaying a particular comment

app.get('/comments/:commentid',(req,res)=>{
    const {commentid}=req.params;
 
   const foundComment=comments.find((c)=>c.id===commentid);
 res.render('show',{c:foundComment})
})


//////////////////////////////////////////////////
//Edit comment from edit.ejs

app.get('/comments/:commentid/edit',(req,res)=>{
    const {commentid}=req.params;
    const foundComment=comments.find((c)=> c.id=== commentid);
    res.render('edit',{c:foundComment});
})

/////////////////////////////////////////////////////////
///For update.ejs

app.get('/comments/:commentid/update',(req,res)=>{
    const {commentid} =req.params;
    const foundComment=comments.find((c)=> c.id=== commentid);
    res.render("update",{c:foundComment})
})
/////////////////////////////////////////////////////////////
//updating commments from update.ejs

app.patch('/comments/:commentid',(req,res)=>{

const{commentid}=req.params;
const foundComment=comments.find((c)=> c.id=== commentid);
foundComment.author=req.body.author;
foundComment.comment=req.body.comment;
res.redirect('/comments')
})

/////////////////////////////////////////////////////////////////
////for deleting  a particular comment

app.delete('/comments/:commentid',(req,res)=>{
     const {commentid}=req.params;
    
     const newComment=comments.filter((c)=> c.id !==commentid);
     comments=newComment;
     res.redirect('/comments');
})

app.listen(3000,()=>{
    console.log('Server started at port 3000')  
});