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

/* calculator */
function claen(){
    document.getElementById("val1").value =  ""
    document.getElementById("val2").value =  ""
    document.getElementById("op").value =  "";
    document.getElementById("equal").value = "";
    document.getElementById("res").value = "";
}
function disp(id){
    if(document.getElementById("equal").value == "="){
        document.getElementById("equal").value = "";
        document.getElementById("res").value = "";
    }
    let val = id.value;
    document.getElementById("val2").value +=  val;
}

function operation(id){
   document.getElementById("val1").value =  document.getElementById("val2").value;
   document.getElementById("val2").value = "";
   document.getElementById("op").value = id.value;
}
function calculate(){
    let val1 = Number(document.getElementById("val1").value);
    let val2 = Number(document.getElementById("val2").value);
    let op = document.getElementById("op").value;
    let res = 0;
    switch(op){
        case "X":
            res = val1 * val2;
            break;
        case "/":
            res = val1 / val2;
            break;
        case "+":
            res = val1 + val2;
            break;
        case "-":
            res = val1 - val2;
            break;
    }
    document.getElementById("val1").value = "";
    document.getElementById("op").value = "";
    document.getElementById("val2").value = "";
    document.getElementById("equal").value = "="
    document.getElementById("res").value = res;
}