// the counter 
let counter = 0;
document.getElementById("button").addEventListener("click", function () {
    counter++
    this.innerHTML = `Clicked ${counter}`
})

// currency converter
let rands;
document.getElementById("rands").addEventListener("change", function () {
    rands = this.value
})

function convertCurrency() {
    console.log(parseFloat(rands));
    document.getElementById("dollars").innerHTML = parseFloat(rands) * 0.066 + " United States Dollar";
    document.getElementById("euros").innerHTML = parseFloat(rands) * 0.066 + " Pound";
    document.getElementById("pounds").innerHTML = parseFloat(rands) * 0.049 + " Euro";
}

for(let i =1;i<=25;i++){
const items = document.createElement("option");
const node = document.createTextNode(i);
items.appendChild(node);
const element = document.getElementById("elements");
element.appendChild(items);
}

