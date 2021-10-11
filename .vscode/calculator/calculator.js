let numbers = [0];
let ops;

const updateCalc = (force) => {

    console.log(ops);
    console.log(numbers);

    if(force || numbers.length === 3) {
        
        if(force && !numbers[1]) numbers[1] = numbers[0];

            let newResult;
            if(ops === "+") newResult = numbers[0] + numbers[1]
            if(ops === "-") newResult = numbers[0] - numbers[1]
            if(ops === "*") newResult = numbers[0] * numbers[1]
            if(ops === "%") newResult = numbers[0] % numbers[1]
            if(ops === "/") newResult = numbers[0] / numbers[1]
            numbers = [newResult];
        
    }
    // UPDATE display number to result
    if(numbers[1] !== 0) document.getElementById("display").innerText = numbers[numbers.length - 1];
    // AC
    document.getElementById("ac").innerText = numbers[0] === 0 ? "AC" : "C";
}

const add = (num) => {
    numbers[numbers.length - 1] = Number(String(numbers[numbers.length - 1]) + num);
    updateCalc();
}

const op = (val) => {
    ops = val;
    numbers.push(0);
    updateCalc();
    if(numbers.length === 1) numbers.push(0);
}


const ac = () => {
    numbers = [0];
    updateCalc();
}

const equal = () => {
    updateCalc(true);
}

const abs = () => {
    if(numbers[numbers.length - 1] < 0) {
        numbers[numbers.length - 1] = Math.abs(numbers[numbers.length - 1])
    } else {
        numbers[numbers.length - 1] = -Math.abs(numbers[numbers.length - 1])
    }
    updateCalc();
}