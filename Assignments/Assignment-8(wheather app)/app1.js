
// const api={
//     key:"785a3a07ab0ba57212ac5dd1e0b7ffcf",
//     base:"https://api.openweathermap.org/data/2.5/"
// }
const input=document.querySelector("input");

const cityname=document.querySelector(".cityName");
const temperature=document.querySelector(".temp");
const weather=document.querySelector(".weather");
const hilow=document.querySelector(".hi-low");
const date=document.querySelector(".date");

async function getdata(inputText){
    //fetching data
    console.log("statting to fetch data");
    const res= await
    //1st method to fetch data 
    // fetch(`${api.base}weather?q=${inputText}&units=metric&APPID=${api.key}`);
    // 2nd method to fetch data

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=785a3a07ab0ba57212ac5dd1e0b7ffcf`)
    //units=matric means to take temperature in celius;
    //got the data  from fetch 
console.log("data has been fetched");
console.log("starting to parse the data")
    ///starting to parse the data
    const data=await res.json();

 console.log(data);
 console.log("Printing parse the data");

    }
input.addEventListener('keypress',(e)=>{
if(e.key=="Enter"){
 const inputText=input.value;
 getdata(inputText);
 input.value="";
}

})




