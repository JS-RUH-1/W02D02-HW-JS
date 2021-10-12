
let event_button=document.getElementById('button');
document.getElementById("button").addEventListener('click',function(){
    event_button.innerText=++counter;
})

let global = document.getElementById("convert").addEventListener("click",currency_convert);

function currency_convert(){
    let rands = document.getElementById("rands").value;
    dollars.innerText = rands * 0.066 + '$';
    euros.innerHTML = rands *0.057 + '€';
    pounds.innerHTML = rands *0.049 + '£';
}


let event_elements=document.getElementById('elements');
let global2 = window.addEventListener("load",drop_down);
function drop_down(){
    for(let i=1; i<=25; i++){
        let cell = document.createElement("option");
        cell.innerHTML = i;
        event_elements.append(cell);

    }
} 