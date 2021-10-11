function Factorial(num) {
  let res = 1;
  for (let index = 1; index <= num; index++) {
    res *= index;
  }
  return res;
}
// console.log(Factorial(3));
function FizzBuzz(num) {
    if (num % 3 == 0 && num % 5 != 0) {
        return "Fizz";
    }
    else if (num % 3 != 0 && num % 5 == 0)
        return "Buzz";
    else if (num % 3 == 0 && num % 5 == 0)
        return "FizzBuzz";
    else
        return num;
}
