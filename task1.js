function sum(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = a + b;
    document.getElementById("ansSum").innerText = c;

    }

    function Multiply(){
        let a = Number(document.getElementById("num3").value);
        let b = Number(document.getElementById("num4").value);
        let c = a + b;
        document.getElementById("ansMultiply").innerText = c;
    
        }
        function Mod(){
            let a = Number(document.getElementById("num5").value);
            let b = Number(document.getElementById("num6").value);
            let c = a % b;
            document.getElementById("ansMod").innerText = c;
        
            }
