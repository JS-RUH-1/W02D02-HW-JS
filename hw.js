// Factorial
const factorial = (n) => {
  //base case
  if(n == 0 || n == 1){
      return 1;
  //recursive case
  }else{
      return n * factorial(n-1);
  }
}
let n = 12;
console.log("The factorial of " + n + " is " + factorial(n));

// FizzBuzz function
const fizzBuzz = (x) => {
  if( x % 3 == 0 && x % 5 == 0 ) return "FizzBuzz";
  if( x % 3 == 0 ) return "Fizz";
  if( x % 5 == 0 ) return "Buzz";
  return x;
}
console.log("FizzBuzz ", fizzBuzz(4));

