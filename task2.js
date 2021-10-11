let counter =0;
let dollars = document.getElementById("dollars");
let euros = document.getElementById("euros");
let pounds = document.getElementById("pounds")
// let rands = document.getElementById("rands").Value

let button=document.getElementById('button');

let elements = document.getElementById("elements");

document.getElementById("button").addEventListener('click',function(){
    
    counter++;
    button.innerText=counter

    
})
document.getElementById("convert").addEventListener("click",con) 

function con(){
    let rands = document.getElementById("rands").value;

    console.log(rands);
    
    dollars.innerText = rands * 14.9565
    euros.innerHTML = rands *17.30830
    pounds.innerHTML = rands *20.393202
    
    

}


window.addEventListener("load",drop);

function drop(){
    for(let i =0 ;i<=25;i++){
        let drop1 = document.createElement("option");
        drop1.innerHTML = i;
        elements.append(drop1)
        
    }
    // return elements
    

}