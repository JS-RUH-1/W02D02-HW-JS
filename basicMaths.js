function factorl(num) {
    if (num === 0 || num === 1)
        return 1;

    let result = num
    for (let i = result - 1; i >= 1; i--) {
        result += i;
    }
    return result;
}
    
console.log(factorl(9)) 

function FizzBuzz(num) {

    if (num % 3 == 0){
      return ("fizz")
    } else if (num %5==0){
      return ("buzz");
      
    } else if (num % 15 == 0){
      
      return ("fizzbuss");
    }
    else {
      return (num);
    }
    
    
    
  }
      
  console.log(FizzBuzz()) 