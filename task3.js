// let coun =document.getElementById("button");

// coun.addEventListener("click", function(){
 
//     this.innerHTML=1
// });

// counts and displays the number of times 

let coun =document.getElementById('button');
let num = 0;
function count(){

    num++;
    coun.innerHTML="Clicked "+num;
}

 //convert rands into !!!!

 function conv()
 {
    let re =document.getElementById('rands').value;
    let eru =document.getElementById('rands').value;
    let poun= document.getElementById('rands').value;


//convert rands into dollars:
 document.getElementById('dollars').innerHTML=  (re * 0.066)+" $";
  
    //convert rands into euros:
 document.getElementById('euros').innerHTML= (eru * 0.057) +" Euros";
  
    //convert rands into pound:
 document.getElementById('pounds').innerHTML= (poun * 0.048 ) +" Pound ";
  
 }
 

 



//creates a drop-down menu with 25 option elements
for(let i = 1; i <= 25; i++) {

   let op = document.createElement("option");
   
  op .innerHTML="option ="+ i;

   //
   document.getElementById("elements").appendChild(op);
}