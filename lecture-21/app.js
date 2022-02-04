const form=document.querySelector('#form');
const result=document.querySelector("#result");

async function getMovies(searchText){

    const result= await
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`);
   const data= await result.json();
  for(let item of data){
      if(item.show.image){
       const imgUrl=item.show.image.medium;
      const image=document.createElement('img');
      image.src=imgUrl;
      result.append(image);
      }
     
  }       

}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
 
    const searchText=form.elements[0].value;
    getMovies(searchText);
    form.elements[0].value;
   
})