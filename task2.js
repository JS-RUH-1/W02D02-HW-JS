let counter = 0;

let button = document.getElementById("button");
let rands = document.getElementById("rands");
let convert = document.getElementById("convert");
let dollarsLable = document.getElementById("dollars");
let eurosLable = document.getElementById("euros");
let poundsLable = document.getElementById("pounds");

function clickCounterHundler() {
  counter++;
  button.innerHTML = `Clicked ${counter}`;
}

function convertHundler() {
  let dollars = 0,
    euros = 0,
    pounds = 0;
  dollars = rands.value * 0.067;
  dollarsLable.innerHTML = dollars;
  euros = rands.value * 0.058;
  eurosLable.innerHTML = euros;
  pounds = rands.value * 0.049;
  poundsLable.innerHTML = pounds;
}

function options() {
  for (let i = 0; i < 25; i++) {
    let opt = document.createElement("option");
    document.getElementById("myElements").innerHTML +=
      '<option id="' + i + '">' + i + "</option>";
  }
}
