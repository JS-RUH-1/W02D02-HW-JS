const sum = () => {
    let x = Number(document.getElementById("num1").value);
    let z = Number(document.getElementById("num2").value);
    document.getElementById("ansSum").innerHTML = (x + z);
}


const multiple = () => {
    let x = Number(document.getElementById("num3").value);
    let z = Number(document.getElementById("num4").value);
    document.getElementById("ansMultiply").innerHTML = (x * z);
}

const mod = () => {
    let x = Number(document.getElementById("num5").value);
    let z = Number(document.getElementById("num6").value);
    document.getElementById("ansMod").innerHTML = (x % z);
}
