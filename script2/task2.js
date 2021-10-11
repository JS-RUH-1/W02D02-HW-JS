var count = 0;
var button = document.getElementById("button").innerHTML=0
let button = document.getElementById("button").innerHTML=0
button.onclick = updateStatus;

function calc () {
    button.textContent = 'Clicked ' + ++count + ' times';
}
    

var gbp, usd, eur, 
function init()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
  
}

function gbp()
{
    usd.value = parseFloat(gbp.value) * 0.49246;
    eur.value = parseFloat(gbp.value) * 0.69714;
    cad.value = parseFloat(gbp.value) * 0.50221;
    aud.value = parseFloat(gbp.value) * 0.43497;
}

function eur()
{
    gbp.value = parseFloat(eur.value) * 1.43448;
    usd.value = parseFloat(eur.value) * 0.70641;
    cad.value = parseFloat(eur.value) * 0.72037;
    aud.value = parseFloat(eur.value) * 0.62382;
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");}
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
            