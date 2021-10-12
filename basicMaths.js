// Factorial

let f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}
  console.log (factorial (5));


  // FizzBuzz function
  function Multiples(number) {    
    
    if (number % 3 === 0 && number % 5 ===0 ){
      
       return "FizzBuzz";
    }
    
    else if( number % 3 === 0 ){
     
       return "Fizz" ;        
    }    
    else if (number % 5 === 0 ){
          
       return"Buzz" ;
    }
    
    else {
      return number;
    }
     
}
console.log (Multiples(15));