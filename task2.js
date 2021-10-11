let clickTimes = 0;
function buttonClicked ( ){
    clickTimes++
    document.getElementById("clickButton").childNodes[0].nodeValue = `Clicked ${clickTimes}`;
}

function randsConvert(){
    let num = parseInt ( document.getElementById("rands").value )
    document.getElementById("euros").innerHTML = num * 17.31;
    document.getElementById("dollars").innerHTML = num  * 14.94;
    document.getElementById("pounds").innerHTML = num * 20.39;
}
randsConvert();

function createOptionItems (){
    var x = document.getElementById("elements");
    for ( let i = 1; i <= 25; i++ ){
        let option = document.createElement("option");
        option.text = `Opition ${i}`;
        x.add(option); 
    }
}
createOptionItems();