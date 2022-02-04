const input=document.querySelector("#input");
const buttons=document.querySelectorAll("button");
let screenValue="";

for(btn of buttons){

  btn.addEventListener('click', (e)=>{

     const btnText= e.target.innerText;
    

    if(btnText=="=" ){
      try {
        // if expression is not evaluated then catch block will be executed
        input.value= eval(screenValue);
    }
    catch (error) {
        console.log(error.message);
        input.value = 'Invalid Operation';
    }

      
    }
    else if(btnText=="c"){
      input.value="";
      screenValue="";
    }
   
    else {
      screenValue +=btnText;
      input.value=screenValue;
    }
  })
 
}



document.addEventListener('keydown', function (e) {
  e.preventDefault();

  if (e.key === 'Enter') {
      try {
          // if expression is not evaluated then catch block will be executed
          input.value = eval(screenValue);
          screenValue="";
       
      }
      catch (error) {
          console.log(error.message);
          input.value = 'Invalid Operation';
      }
    
  }
})





