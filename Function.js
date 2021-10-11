// Factorial


function factrial(n) {
    let factor = [];
    for (i = 1; i <= n; i++) {

        factor.push(i)
    }
    return factor.reduce(function (a, c) {
        return a * c;
    })
}




console.log(factrial(3));
//return 6







// FizzBuzz function

function fizzBuzz(n) {
    if (n % 3 == 0) {
        return "Fizz";
    }else if(n%5==0){
        return "Buzz";
    }else{
        return n;
    }
}
