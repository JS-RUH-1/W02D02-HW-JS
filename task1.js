function calSum(){
    document.getElementById("ansSum").innerHTML = 
        Number(document.getElementById("num1").value) + 
        Number(document.getElementById("num2").value)  
}

function calMulti(){
    document.getElementById("ansMultiply").innerHTML = 
        Number(document.getElementById("num3").value) * 
        Number(document.getElementById("num4").value)  
}

function calMod(){
    document.getElementById("ansMod").innerHTML = 
        Number(document.getElementById("num5").value) %
        Number(document.getElementById("num6").value)  
}
