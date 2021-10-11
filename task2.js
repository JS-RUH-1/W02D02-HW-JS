let count = 0;

function times(){
   
    count++;

    document.getElementById("button").innerHTML = "Clicked "+count;
}
  
    for(let i = 1; i <= 25; i++) {
       
        let option = document.createElement("option");
        option.innerHTML=`option ${i}`;
       document.getElementById("elements").appendChild(option);
    }

    function convert(rands){
        document.getElementById("dollars").innerHTML=`Dollars: ${parseInt(rands) * 0.067} `;
        document.getElementById("euros").innerHTML=`euros: ${parseInt(rands) * 0.058} `;
        document.getElementById("pounds").innerHTML=`pounds: ${parseInt(rands) * 0.04} `;


    }

