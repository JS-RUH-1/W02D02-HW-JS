//SUM 
  
function sum(){

    var n1 =  document.getElementById('num1').value;
    var n2= document.getElementById('num2').value;
    let x = +n1+ +n2;
    document.getElementById("ansSum").innerHTML = x;
     
 } 
     

//MULTIPLE

function mul(){

    var n1 =  document.getElementById('num3').value;
    var n2= document.getElementById('num4').value;
    let x = n1 *n2;
    document.getElementById("ansMultiply").innerHTML = x;
     
 } 

//MOD

function mod(){

    var n1 =  document.getElementById('num5').value;
    var n2= document.getElementById('num6').value;
    let x = n1 %n2;
    document.getElementById("ansMod").innerHTML = x;
     
 } 