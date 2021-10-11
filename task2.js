// click counter
const clickCount = (element) => {
    let currentValue = Number(element.innerText.split(" ")[1]);
    element.innerText = "Clicked " + (currentValue + 1);
}

// currency converter
const convertButton = document.getElementById("convert");
convertButton.addEventListener("click", () => {
    let rands = Number(document.getElementById("rands").value);
    document.getElementById("dollars").innerText = rands * 0.067;
    document.getElementById("euros").innerText = rands * 0.12;
    document.getElementById("pounds").innerText = rands * 0.098;
})

// load options to the select
for (let i = 0; i<= 25; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = "Option loaded " + i;
    document.getElementById("elements").appendChild(opt);
}