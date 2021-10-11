
let equal = document.getElementById("ansSum");
let equal1 = document.getElementById("ansMultiply")
let equal2 = document.getElementById("ansMod")
// const summ = ;



// summ.addEventListener("click", function () {
//     equal.innerHTML = num1 + num2;
//   });
  
//   console.log(num(6));
  
//   console.log(malti(6));

document.getElementById("summ").addEventListener('click',sum);

function sum(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let semAns = num1+num2;
     
    equal.innerHTML=semAns;
    
}
document.getElementById("samm").addEventListener('click',malte);

function malte(){
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let ansMultiply = num3*num4;
     
    equal1.innerHTML=ansMultiply;
    
}

document.getElementById("sum1").addEventListener('click',mod);

function mod(){
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let ansMod = num5%num6;
     
    equal2.innerHTML=ansMod;
    
}
  