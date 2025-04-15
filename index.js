function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function sum(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    const sum = array.reduce((total, currentItem) =>{
        return total + currentItem;
    }, 0)
    return sum;
}

function multiply (x, y) {
    return x * y;
}

function divide(a, b) {
    return a/b;
}

function power(x,y) {
    return x**y;
}

function factorial(x) {
    if (x === 0 || x===1) return 1;
    let result = 1;
    for(let i =1; i<=x; i++){
        result *= i;
    }
    return result;
}