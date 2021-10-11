function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(5));

function FizzBuzz(num) {
  if (num % 5 == 0 && num % 3 == 0) return "FizzBuzz";
  else if (num % 5 == 0) return "Buzz";
  else if (num % 3 == 0) return "Fizz";
  else return num;
}
console.log(FizzBuzz(25));
