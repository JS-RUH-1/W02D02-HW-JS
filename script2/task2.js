let count = 0;

let button = document.getElementById("button")
// button.onclick = updateStatus;

function calc() {
    console.log("i am here")
    button.innerHTML = 'Clicked ' + ++count + ' times';
}
    


function Add(){
   
     let input=document.getElementById("rands").value ;

 let gbp =parseFloat(input)*0.049
 let usd =parseFloat(input)*0.067
 let eur =parseFloat(input)*0.058
 
  
    document.getElementById("GBP").innerHTML= gbp;
    document.getElementById("USD").innerHTML= usd;
    document.getElementById("EUR").innerHTML= eur ;


 

}

let slect= document.getElementById("elements")

for (let i =1; i<=25; i++){
    let option= document.createElement("option");
    option.innerHTML=i;
    slect.appendChild(option)
}

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");}
//     window.onclick = function(event) {
//         if (!event.target.matches('.dropbtn')) {
//           var dropdowns = document.getElementsByClassName("dropdown-content");
//           var i;
//           for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//               openDropdown.classList.remove('show');
//             }
            