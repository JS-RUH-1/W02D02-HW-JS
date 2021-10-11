/* Factorial */
function factCalc(num){
  let num_arr = [];
  let factorial = 0;
  for(let i=1; i<=num; i++){
    num_arr.push(i)
  }
  while(num_arr.length != 0){
    if(factorial == 0){
      factorial = num_arr[0] * num_arr[1];
      num_arr.shift()
      num_arr.shift()
    }else{
      factorial *= num_arr[0]
      num_arr.shift()
    }
  }
  return factorial
}

/* FizzBuzz function */
function FizzBuzz(num){
    if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }else if(num % 3 == 0){
        return "Fizz";
    }else if(num % 5 == 0){
        return "Buzz"
    }
}