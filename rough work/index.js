const Fs= require("fs");
const path = require("path");
const f1=path.join(__dirname,'inp1.txt');
const f2=path.join(__dirname,'inp2.txt');
const f3=path.join(__dirname,'inp3.txt');

function readF1(){
    return new Promise((resolve, reject) =>{
        Fs.readFile(f1,(err,data) =>{
            if(err) throw new Error("Error!");
  resolve(data.toString().split("\n"));
        })
    })
}
    function readF2(){
        return new Promise((resolve, reject) =>{
            Fs.readFile(f2,(err,data) =>{
                if(err) throw new Error("Error!");
      resolve(data.toString().split("\n"));
            })
        })
    
    }
    function writeF3(data){
        return new Promise((resolve, reject) =>{
            Fs.writeFile(f3,data,(err) =>{
                if(err) throw new Error("Error!");
      resolve();
            })
        })
    
    }
    let arr3=[];

readF1()
.then((arr1) =>{
    arr3=arr1
    return readF2();
})
.then((arr2) =>{
    arr3=arr3.concat(arr2);
    arr3.sort((a,b)=>a-b);
    let data=arr3.join("\n");
    return writeF3(data);
})
.then(()=>{
console.log("file Written SuccessFully")
})