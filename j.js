function FactOrial(n){
    let fact=1;
    for(i=n;i>=1;i--)
    fact*=i;
    return fact;
}

FactOrial(3),

function fizzBuzz(n){
    for(i=1;i<101;i++){
      if(i%15==0){
        console.log("fizzbuzz");
      }
      else if(i%3==0){
        console.log("fizz");
      }
      else if(i%5==0){
        console.log("buzz");
      }
      else{
         console.log(i);
      }
    }
    };
    
    fizzBuzz(3)
     