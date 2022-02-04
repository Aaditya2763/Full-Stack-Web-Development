let a=15;
for(let i=1;i<=a;i++){
	if(i%3==0){
		console.log("Fizz")
	}
	else if(i%5==0){
		console.log("bizz")
	}
	else if(i%3==0 && i%5==0){
		console.log("Fizzbuzz")
	}
	else{
		console.log(i)
	}
}