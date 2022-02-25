
const api={
    key:"785a3a07ab0ba57212ac5dd1e0b7ffcf",
    base:"https://api.openweathermap.org/data/2.5/"
}
const input=document.querySelector("input");



async function getdata(inputText){
    //fetching data
    // console.log("statting to fetch data");
    const res= await
    //1st method to fetch data 
    fetch(`${api.base}weather?q=${inputText}&units=metric&APPID=${api.key}`)
    // 2nd method to fetch data

    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=785a3a07ab0ba57212ac5dd1e0b7ffcf`)
    //units=matric means to take temperature in celius;
    //got the data  from fetch 
// console.log("data has been fetched");
// console.log("starting to parse the data")
    ///starting to parse the data
//     const data=await res.json();
  /// console.log(data);
//  console.log("Printing parse the data");

.then(res =>{
//     return res.json();
console.log(res.json())

 }).then(displayResult);


    }

input.addEventListener('keypress',setQuery);



function setQuery(e){
    if(e.key== "Enter"){
        const inputText=input.value;
        getdata(inputText);
        input.value="";
       }
}


// It is not necessary to write the same parameter name in both. ie in promise then and in function parameter.

 function displayResult(weather)
{
let  cityname=document.querySelector(".cityName");
cityname.innerText=`${weather.name},${weather.sys.country}`;

let temperature=document.querySelector(".temp");
temperature.innerHTML=`${Math.round(weather.main.temp)}<span>°c</span>`;

let weatherReport=document.querySelector(".weather");
weatherReport.innerHTML=weather.weather[0].main;

let hilow=document.querySelector(".hi-low");
hilow.innerHTML=`${Math.round(weather.main.temp_min)}°c /${Math.round(weather.main.temp_max)}°c`;
let now=new Date();
let date=document.querySelector(".date");
 date.innerHTML =dateBuilder(now);

}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }