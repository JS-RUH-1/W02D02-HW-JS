let result = document.getElementById("count"),
    count = 0
function numberOfClicks() {
    count++
    result.innerHTML = count
}

// 
window.onload = function addOptions() {
    let selectElement = document.getElementById("elements")
    let num = 25;
    for (i = num; i > 0; i--) {
        selectElement.innerHTML += `<option> option ${num}</option>`
        num--
    }
}