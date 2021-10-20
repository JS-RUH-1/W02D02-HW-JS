//displays the number of times a button has been clicked.

let count = 0;
function clicks() {
  count++;
  document.getElementById("button").innerHTML = `Clicked ${count}`;
}

// drop-down menu with 25 option
function options() {
  for (let i = 0; i < 25; i++) {
    let elem = document.getElementById("elements");
    let option = document.createElement("option");
    option.innerHTML = i;
    elem.appendChild(option);
  }
}
options();

// convert rands into dollars, euros and pounds.
function convert() {
  let total = document.getElementById("rands").value;
  let d = total * 0.067;
  let e = total * 0.058;
  let p = total * 0.049;

  document.getElementById("dollars").innerHTML = `Dollars: ${d}`;
  document.getElementById("euros").innerHTML = `Euros: ${e}`;
  document.getElementById("pounds").innerHTML = ` Pounds : ${p}`;
}
