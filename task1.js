function factorial(num){
    let i = num-1;
    while(i>1){
      num = num * i;
      i --;
    }
    return num;
}

function fizzBuzz(num){
        if(num % 3 == 0 && num % 5 == 0){
          return 'fizzBuzz';
        }
        
        else if(num % 3 == 0){
          return 'Fizz';
        }
        else if(num % 5 == 0){
          return 'Buzz';
        }
        else{
          return num;
        }
      
}


// Dom Task1
num1 = document.getElementById('num1');
num2 = document.getElementById('num2');
num3 = document.getElementById('num3');
num4 = document.getElementById('num4');
num5 = document.getElementById('num5');
num6 = document.getElementById('num6');

function add() {
  let x = document.getElementById("num1").value;
  let y = document.getElementById("num2").value;
  let sum = Number(x) + Number(y);

  document.getElementById("ansSum").innerHTML = sum;
}

function multiply() {
  let x = document.getElementById("num3").value;
  let y = document.getElementById("num4").value;
  let result = Number(x) * Number(y);

  document.getElementById("ansMultiply").innerHTML = result;
}

function mod(){
  let x = document.getElementById("num5").value;
  let y = document.getElementById("num6").value;
  let result = Number(x) % Number(y);

  document.getElementById("ansMod").innerHTML = result;
}


