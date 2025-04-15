//Math functions

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

//Creating Number and Operation buttons

let inputContainer = document.querySelector("#calculator-input");

let columnaArray= [["1","4","7", "="],["2","5","8","0"],["3","6","9","."],["+","-","*","/"]]

function populateContainer(rows, columns) {
    for (let i =0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        inputContainer.appendChild(rowDiv);
        for (let j =0; j < columns; j++){
            const columnDiv = document.createElement("div");
            columnDiv.className = "column";
            columnDiv.textContent = columnaArray[i][j];
            rowDiv.appendChild(columnDiv);
        }
    }
}

populateContainer(4,4);
