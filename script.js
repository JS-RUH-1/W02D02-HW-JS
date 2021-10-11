
function num(num1) {
  let sum = 0;
  for (let i = -1; i <= num1; i++) {
    sum += num1;
    num1--;
  }
  return sum;
}
function malti(num2) {
  if (num2 % 3 == 0 && num2 % 5 == 0) {
    return "FizzBuzz";
  } else if (num2 % 3 == 0) {
    return "Fizz";
  } else if (num2 % 5 == 0) {
    return "buzz";
  } else {
    return num2;
  }
}

console.log(malti(9));
console.log(num(6));

