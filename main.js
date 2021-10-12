function factorial(num) {
  let fact = 1;
  while (num > 0) {
    fact *= num;
    num--;
  }
  return fact;
}

function fizzbuzz(num) {
  let name = "";
  if (num % 3 == 0) 
    name += "fizz";
  
  if (num % 5 == 0) 
    name += "buzz";
  
  if (name != "") return name;
  else return num;
}
