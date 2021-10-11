// HW 11/10/2021 JS - Abdulsalam Aldawsari

//Factorial function 
function factorialFN (n){
    let sum = 1;
    while(n!=0){
     sum *= n
     n--;
    }
    return sum

}
console.log(factorialFN(5))
//Function  Argurment  FUZZ-BIZZ 
function FuzzBizz (n){
    if (n % 15 == 0){return "FizzBuzz";}
    if (n % 3 == 0){return "Fizz";}
    if (n % 5 == 0){return "Buzz";}
    return index;
}
console.log(FuzzBizz(30))

