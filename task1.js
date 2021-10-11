function add(num) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let total = num1 + num2;
  document.getElementById("ansSum").innerHTML = num1 + num2;
}

function sum(num) {
  let num3 = Number(document.getElementById("num3").value);
  let num4 = Number(document.getElementById("num4").value);
  let total = num3 * num4;
  document.getElementById("ansMultiply").innerHTML = num3 * num4;
}

function mod(num) {
  let num5 = Number(document.getElementById("num5").value);
  let num6 = Number(document.getElementById("num6").value);
  let total = num5 * num6;
  document.getElementById("ansMod").innerHTML = num5 * num6;
}
