function sum (){
    alert( parseInt( document.getElementById('num1').value ) + parseInt( document.getElementById('num2').value ) );

}

function maltu(){
    alert( parseInt( document.getElementById('num3').value )  *  parseInt( document.getElementById('num4').value ) );


}

function mod(){
   let num5 = document.getElementById('num5').value;
   let num6 = document.getElementById('num6').value;
   
   let result = document.getElementById('ansMod');

   let n1 = parseInt (num5);
   let n2 = parseInt (num6);

   result.innerHTML=n1%n2;

     
}