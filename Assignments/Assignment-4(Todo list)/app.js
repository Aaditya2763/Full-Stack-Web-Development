// Function for random color

function randomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

//code to select tag

const input=document.getElementById('input');
const btn=document.getElementById('btn');
const list=document.getElementById('list');



//code to add todo in unordered List

function addTodo(todoText){
    const li=document.createElement('li');
    const delBtn=document.createElement('button')
    li.innerText=todoText;
    delBtn.innerText='X';
  
    if(li.innerText==="" || li.innerText.startsWith(Number)){
        alert("Enter todo")
    }
    else{
        list.append(li);
        li.append(delBtn)
        li.style.backgroundColor=randomColor();
        delBtn.style.backgroundColor='red';
        delBtn.style.width='auto'; 
        delBtn.style.padding='5px';
        delBtn.style.borderRadius='50%';
        delBtn.style.position="static";
        

       
        
    }
   
  
    
   

}

//Button event Listener code

btn.addEventListener('click',function(){
    const todoTask=input.value;
    addTodo(todoTask);
    input.value="";


})

// code to check input is empty or not while pressing enter
input.addEventListener('keypress',function(event)
{
   if(event.key==='Enter' && input.value!=""){
       const todoTask=input.value;
       addTodo(todoTask);
       input.value="";
       
   } 
   else if(event.key==='Enter' && input.value==""){
alert("enter todo")
   }
   
})

//code to delete li  while clicking on delete button(delBtn)


list.addEventListener("click",function(e){
    if(e.target.nodeName==="BUTTON"){
        e.target.parentElement.remove();
        
    }
})

