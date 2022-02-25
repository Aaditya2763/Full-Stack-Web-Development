$(document).ready (function(){
    
defaultData(newsSearch.value);
newsSearch.value="";
    console.log("Documnet is sucessflly loaded")
})

//  const input=document.querySelector("input")

async function defaultData(defaultText){
    const res=await 
    fetch(`${api.base}apikey=${api.key}&category=${defaultText}&language=en`)
   .then(res =>{
       return res.json();


   })
   console.log(res);
    newsSearch.value="";
}


const api={
    key:'pub_4731fb44a480b6680fc5a971b652ce3d6d0e',
    base:'https://newsdata.io/api/1/news?'

}  


async function getData(inputText){
    const res=await 
    fetch(`${api.base}apikey=${api.key}&category=${inputText}&language=en`)
   .then(result =>{
       return result.json();
      
   }).then(displayResult)

    
}


$('#newsSearch').keypress(setQuery)



// input.addEventListener('keypress',setQuery)
  
    
function setQuery(e){
    if(e.key=="Enter"){
        const inputText=newsSearch.value;
        getData(inputText);
        newsSearch.value="";
        
    }
}

// let category=$('.lightText');
// category.text(newsSearch.value)

function displayResult(results){
for(let result of results){
console.log(result.country)

//     let category=$('.lightText');
//   category.text(result.title)
//     let heading=$('#news li h4');
//     let newsImg=$('newsImg');

    }
    
}
































    