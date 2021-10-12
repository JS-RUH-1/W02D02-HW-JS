


let event_n1=document.getElementById("num1");
let event_n2=document.getElementById("num2");
let event_n3=document.getElementById("num3");
let event_n4=document.getElementById("num4");
let event_n5=document.getElementById("num5");
let event_n6=document.getElementById("num6");

let event_add=document.getElementById("add");
let event_multiply=document.getElementById("multiply");
let event_mod=document.getElementById("mod");

let label1 = document.getElementById("ansSum");
let label2 = document.getElementById("ansMultiply")
let label3 = document.getElementById("ansMod")

event_add.addEventListener('click',sum);
event_multiply.addEventListener('click',mul);
event_mod.addEventListener('click',mod);

function sum(){
    let num1 = event_n1.value;
    let num2 = event_n2.value;
    let addition = parseInt(num1)+parseInt(num2);
    label1.innerHTML=addition;
}
function mul(){
    let num1 = event_n3.value;
    let num2 = event_n4.value;
    let multiplication = parseInt(num1)*parseInt(num2);
    label2.innerHTML=multiplication;
}
function mod(){
    let num1 = event_n5.value;
    let num2 = event_n6.value;
    let modulu = parseInt(num1)%parseInt(num2);
    label3.innerHTML=modulu;
}


