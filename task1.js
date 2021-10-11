function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
function mul(num3, num4) {
  return parseInt(num3) * parseInt(num4);
}

function mod(num5, num6) {
  return parseInt(num5) % parseInt(num6);
}

function hundlesSumBtn() {
  let firstRes = document.getElementById("ansSum");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let total = sum(num1, num2);
  firstRes.innerHTML = total;
}

function hundlesMulBtn() {
  let secondRes = document.getElementById("ansMul");

  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;
  let total = mul(num3, num4);
  secondRes.innerHTML = total;
}
function hundlesDivBtn() {
  let thirdRes = document.getElementById("ansDiv");

  let num5 = document.getElementById("num5").value;
  let num6 = document.getElementById("num6").value;
  let total = mod(num5, num6);
  thirdRes.innerHTML = total;
}
