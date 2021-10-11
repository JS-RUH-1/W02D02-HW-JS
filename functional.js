//Function

//Factorial
console.log("Question one : Factorial.")
let number =3;
console.log("The Factorial of number ("+number+") is :")
 

console.log(fact(number));

function fact(num){

let fac=1;

for(let i=1 ;i<=num ;i++)
{
    fac =fac*i;
}
return fac;
}

console.log("------------------")

console.log("Question two : FizzBuzz function.")

let num =25;



 
 

fun(num);

if (fun(num) =='Fizz')
{
console.log('number is multiple of ('+ num +") is 3")
console.log()
console.log(fun(num))

}

else if (fun(num) =='Buzz')
{
console.log('number is multiple of ('+ num +") is 5")
console.log()
console.log(fun(num))

}
else {
    if (fun(num) =='Fizz')
{
console.log('number is multiple of ('+ num +") is both 3 and 5 ")
console.log()
console.log(fun(num))

}
}
function fun (num){
if  (num % 3 ==0 && num % 5 ==0 ){
    return 'FizzBuzz';
}

else if(num % 5 ==0 ){
 
return'Buzz';}

else if (num % 3 ==0 ){
     
    return 'Fizz'}
 
else{
    return num;
}
}

console.log('-----------------------')

