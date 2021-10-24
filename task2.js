let i =0 ;

function count ()
{
i++;
document.getElementById("button").innerHTML=`clicked ${i}`;
}

//

function convert (){
let input = parseInt (document.getElementById("rands").value);
document.getElementById("euros").innerHTML = input * 17.31 ;
document.getElementById("dollars").innerHTML = input * 14.94 ;
document.getElementById("pounds").innerHTML = input * 20.39 ;
}

//

function create_item (){
    let select = document.getElementById("elements");

    for ( let x = 1 ; x <= 25 ; x++ ){

        let option = document.createElement("option");
        option.text = `option ${x}`;
        select.add(option);

    }

}

create_item();