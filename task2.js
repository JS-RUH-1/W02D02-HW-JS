
    
    let elements=document.getElementById("elements");
    for(i=1;i<=25;i++){
    let o=document.createElement("OPTION");
    o.innerHTML=i;
    elements.appendChild(o);
    }

let click=0;
function coUnts(){
    document.getElementById("counts").innerHTML=click++;
}
 
function convert(rands){

    document.getElementById("dollars").innerHTML = `dollars:${ parseInt(rands) * 0.067 }`;

    document.getElementById("euros").innerHTML = `euros: ${ parseInt(rands) * 0.058  }`;

    document.getElementById("pounds").innerHTML =  ` pounds : ${ parseInt(rands) * 0.049  }`;



  }