let input3 = document.getElementById("num3").value;
let input4 = document.getElementById("num4").value;
let input5 = document.getElementById("num5").value;
let input6 = document.getElementById("num6").value;
function sum() {
  let input1 = document.getElementById("num1").value;
  let input2 = document.getElementById("num2").value;

  let res1 = document.getElementById("ansSum");
  let result = parseInt(input1) + parseInt(input2);

  res1.innerHTML = "result is " + result;
}
function mul() {
  let input3 = document.getElementById("num3").value;
  let input4 = document.getElementById("num4").value;

  let res2 = document.getElementById("ansMultiply");
  let result = parseInt(input3) * parseInt(input4);

  res2.innerHTML = "result is " + result;
}
function mod() {
  let input5 = document.getElementById("num5").value;
  let input6 = document.getElementById("num6").value;

  let res3 = document.getElementById("ansMod");
  let result = parseInt(input5) % parseInt(input6);

  res3.innerHTML = "result is " + result;
}
