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


