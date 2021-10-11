// Dom Task2

// number of times a button has been clicked.
let count = 0;
let btn = document.getElementById("button");

button.onclick = function () {
    count++;
    btn.textContent = 'Clicked ' + count;
}


// convert rands into dollars, euros and pounds.
function convert(){
    let rand = document.getElementById('rands').value;
    let usd = 0.0066 * Number(rand);
    let euro = 0.057 * Number(rand);
    let pound = 0.049 * Number(rand);
    
    document.getElementById("dollars").innerHTML = 'USD = ' + usd;
    document.getElementById("euros").innerHTML = 'Euro = ' + euro;
    document.getElementById("pounds").innerHTML = 'Pound = ' + pound;
}


// function which creates a drop-down menu with 25 option
let element = document.getElementById("elements"); 
function drop() {  
       for(var i = 1; i < 26; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = i;
        opt.value = i;
        element.appendChild(opt);
    }   
}
    