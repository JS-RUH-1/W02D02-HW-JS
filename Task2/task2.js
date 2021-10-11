let counter = 0;
let btn = document.getElementById("btn");
let display = document.getElementById("result");
let convertamount = document.getElementById("ammount");
btn.addEventListener("click", function () {
  counter++;
  display.innerHTML = counter;
});

function toDolar() {
  ammountRands = document.getElementById("Rands").value;
  convertamount.innerHTML = ammountRands * 0.067;
}
function toEuro() {
    ammountRands = document.getElementById("Rands").value;
    convertamount.innerHTML = ammountRands * 0.058;
}
function toPounds() {
    ammountRands = document.getElementById("Rands").value;
    convertamount.innerHTML = ammountRands *   0.049;
}

for (let i = 0; i<= 25; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = "Option loaded " + i;
    document.getElementById("elements").appendChild(opt);
}
