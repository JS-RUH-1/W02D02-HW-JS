function factorial(num){
 if (num<0)
     return -1 ;
 else if (num ==0)
     return 1;
 else {return (num* factorial(num-1))};
}
factorial(5);


function fizzbuzz(n){
 
    if(n % 3 == 0 && n % 5 == 0)
 return "FizzBuzz";
 else
    if(n % 3 == 0)
 return "fizz";
 else
 if(n % 5 == 0)
 return "buzz";
 else {return n ;}
}

fizzbuzz(5)

function randomNum()
    {
        var listOfNumbers=[];
        var stringOutput="";
        for (i=0;i<5;i++) {
            listOfNumbers.push(Math.floor(Math.random()*59)+1);
            stringOutput += listOfNumbers[i] + "";
        }
        document.getElementById("button").innerHTML = stringOutput;
    }
    document.getElementById("rands").value

    function init()
{
   let  gbp = document.getElementById("pounds");
   let  usd = document.getElementById("dollars");
   let  eur = document.getElementById("euros");}

   function gbpfunc()
{
    usd.value = parseFloat(gbp.value) * 0.49246;
    eur.value = parseFloat(gbp.value) * 0.69714;
}

function eurfunc()
{
    gbp.value = parseFloat(eur.value) * 1.43448;
    usd.value = parseFloat(eur.value) * 0.70641;}

    function usdfunc()
{
    gbp.value = parseFloat(usd.value) * 2.03032;
    eur.value = parseFloat(usd.value) * 1.41544;}

    init();