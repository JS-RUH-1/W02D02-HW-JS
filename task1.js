function cal() {
   let input = document.getElementById("math")
   let label = document.getElementById("show")

   label.innerHTML=eval(input.value);
}
cal()


function plus1(){
    let button = document.getElementById("button");
    let number=button.innerHTML.split(" ").slice(-1)[0];
    button.innerHTML = `Clicked ${++number}` 
   
}


function rand(){
    let randValue = document.getElementById('rand').value;
    let label = document.getElementById('count');

      let dollars = randValue * 0.067341;
      let eure = randValue * 0.057930 ;
      let pounds = randValue * 0.049020;

      let text = `
      Dollars:${dollars.toFixed(2)}
      Eure:${eure.toFixed(2)}
      Pound${pounds.toFixed(2)}`
      label.innerHTML= text;
}

function addToDropdown() {
    const NUM = 25;
    let dropdownContent = document.getElementsByClassName("dropdown-content")[0];
    
    for (let counter = 1; counter <=  NUM; counter++) {
        let element = document.createElement("p");
        element.innerHTML = `${counter} - option`;
        dropdownContent.appendChild(element);
        console.log(element);
    }
}

document.addEventListener("click", function(event) {
    addToDropdown()
})