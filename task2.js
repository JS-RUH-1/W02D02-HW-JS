let i = 0;
// function clickCount() {
//   i++;
//   let btn = (document.getElementById("button").innerHTML = "Clicked" + i);
// }
let btn = document.getElementById("button");
btn.addEventListener("click", function () {
  i++;
  this.innerHTML = "Clicked " + i;
});

let convertbtn = document.getElementById("convert");
convertbtn.addEventListener("click", function () {
  let num = document.getElementById("rands").value;
  let dollars = parseFloat(num) * 0.067;
  let euros = parseFloat(num) * 0.058;
  let pounds = parseFloat(num) * 0.049;
  document.getElementById("dollars").innerHTML = "in dollar:  " + dollars + "$";
  document.getElementById("euros").innerHTML = "in euros:  " + euros + "€";
  document.getElementById("pounds").innerHTML = "in pounds:  " + pounds + "£";
});
addEventListener("load", function () {
  let select = document.getElementById("elements");
  for (var i = 1; i <= 25; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
  }
});
