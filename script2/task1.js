function add(){
    let n1 =Number (document.getElementById("num1").value);
    let n2 = Number (document.getElementById("num2").value);
    let result = n1 + n2;
    document.getElementById("ansSum").innerText = result;
}
 
function muli(){
    let n1 = document.getElementById("num3").value;
    let n2 = document.getElementById("num4").value;
    let result = n1 * n2;
    document.getElementById("ansMultiply").innerText = result;
}
function mod(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let result = n1 % n2;
    document.getElementById("ansMod").innerText = result;
}