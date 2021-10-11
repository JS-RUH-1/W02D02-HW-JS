
//---------- factorial Function -----------

function factorial(num) {
  if (num === 0 || num === 1)
    return 1; 
  for (var i = num - 1; i >= 1; i--) {
   
    num = num * i; 
  
  }
  return num; 
}
console.log(factorial(3));
console.log("------------------");

//---------- fizzbuzz Function -----------


function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
      }else if (i % 3 === 0){
        console.log("Fizz");
      }else if (i % 5 === 0){
        console.log("Buzz");
      }else{
        console.log(i);
      }
    }
  }