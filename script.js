function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

function FizzBuzz (n){
    if ( n % 5 == 0 && n % 3 == 0 ){
        return "FizzBuzz";
    } else if ( n % 5 == 0 ){
        return "Buzz";
    } else if ( n % 3 == 0){
        return "Fizz";
    }else{
        return n;
    }
}

console.log ( FizzBuzz(15));