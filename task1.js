function sumResult() {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("ansSum").innerHTML = parseFloat(num1) + parseFloat(num2);


}

function multiResult() {

    const num1 = document.getElementById("num3").value;
    const num2 = document.getElementById("num4").value;
    document.getElementById("ansMultiply").innerHTML = parseFloat(num1) * parseFloat(num2);


}

function modResult() {

    const num1 = document.getElementById("num5").value;
    const num2 = document.getElementById("num6").value;
    document.getElementById("ansMod").innerHTML = parseFloat(num1) % parseFloat(num2);


}
