

let event_button=document.getElementById('button');
document.getElementById("button").addEventListener('click',function(){
    event_button.innerText=++counter
})

let global = document.getElementById("convert").addEventListener("click",currency_convert) 

function currency_convert(){
    let rands = document.getElementById("rands").value;
    dollars.innerText = rands * 0.066
    euros.innerHTML = rands *0.057
    pounds.innerHTML = rands *0.049
}
