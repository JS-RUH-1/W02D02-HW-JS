// Addition Function
function addFunc() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = document.getElementById("ansSum")

    let cNum1 = parseInt(num1)
    let cNum2 = parseInt(num2)
    
    result.innerHTML = cNum1 + cNum2
}

// Multiplication Function
function multiplyFunc() {
    let num3 = document.getElementById("num3").value
    let num4 = document.getElementById("num4").value
    let result = document.getElementById("ansMultiply")

    let cNum3 = parseInt(num3)
    let cNum4 = parseInt(num4)
    
    result.innerHTML = cNum3 * cNum4
}

// Mod Function
function modFunc() {
    let num5 = document.getElementById("num5").value
    let num6 = document.getElementById("num6").value
    let result = document.getElementById("ansMod")

    let cNum5 = parseInt(num5)
    let cNum6 = parseInt(num6)
    
    result.innerHTML = cNum5 % cNum6

}