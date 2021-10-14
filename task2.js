function factorial(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        return num * factorial(num - 1);
    }
}
factorial(5);

function fizzbuzz(n) {
    if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz";
    else if (n % 3 == 0) return "fizz";
    else if (n % 5 == 0) return "buzz";
    else {
        return n;
    }
}

fizzbuzz(5);


let clicks = 0;
function add(){
    clicks++;
    document.getElementById("clicks").innerText=clicks
};

function Conversion() {
    var val = parseInt(document.getElementById("value").value);
    var madeSelection = parseInt(document.getElementById("Selection").value);

    switch (madeSelection) {
        case 1:
            var converted = val * 0.068; //rands to dollars
            break;
        case 2:
            var converted = val * 0.058; //rands to euros
            break;
        case 3:
            var converted = val * 0.049; //rands to pounds
            break;

        default:
            alert("You chose wrong option"); // if user chose wrong option, send him message
            break;
    }

    document.getElementById("conversion").value = converted;
    return false; //prevent for submit form
}
