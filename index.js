const add = function(x,y) {
    return x + y;
};

const subtract = function(x,y) {
    return x - y;
};

const sum = function(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    const sum = array.reduce((total, currentItem) =>{
        return total + currentItem;
    }, 0)
    return sum;
};

const multiply = function(array) {
    if (array.length === 1) return array[0];
    const multiplication = array.reduce((total, currentItem) =>{
        return total * currentItem;
    }, 1)
    return multiplication;
};

const divide = function(a, b) {
    return a/b;
}

const power = function(x,y) {
    return x**y;
};

const factorial = function(x) {
    if (x === 0 || x===1) return 1;
    let result = 1;
    for(let i =1; i<=x; i++){
        result *= i;
    }
    return result;
};