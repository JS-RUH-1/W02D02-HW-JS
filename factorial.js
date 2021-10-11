function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;

    let result = num
    for (let i = result - 1; i >= 1; i--) {
        result += i;
    }
    return result;
}
    
console.log(factorialize(5)) //  5 + 4 + 3 + 2 + 1 = 15