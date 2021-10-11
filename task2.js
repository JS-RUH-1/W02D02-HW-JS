let count = 0;
function click_count(){
    count++;
    document.getElementById("button").innerHTML = "Clicked " + count;
}

function currency(){
    let rands = document.getElementById("rands").value;
    document.getElementById("dollars").innerHTML = rands * 0.0663 + " Dolars";
    document.getElementById("euros").innerHTML = rands * 0.0574 + " Euros";
    document.getElementById("pounds").innerHTML = rands * 0.0488 + " Pounds";
}
for(let i=1; i<=23; i++){
    document.getElementById("elements").innerHTML += `<option value="${i}">Option ${i}</option>`;
}
 

document.getElementById("button").addEventListener("click", click_count)
document.getElementById("convert").addEventListener("click", currency)
