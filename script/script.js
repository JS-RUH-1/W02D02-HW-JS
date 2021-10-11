function factorial (num) {

    for (i=1 ; i <=num ; i++) 
    let result
     result = result*i;
    return result
}
function fizzbuzz (num){ 
    
    if (num%3===0 && num!=5)
return("Fizz");
else if (num%5===0 && num!=3)
return("Buzz")
else if (num%3===0 && num%5===0)
return("FizzBuzz")
else return num;
}



    


