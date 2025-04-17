//Math functions

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide(a, b) {
    return a/b;
}


//Creating Number and Operation buttons

let inputContainer = document.querySelector("#calculator-input");
let resultsContainer = document.querySelector("#calculator-results");



const ACButton = document.getElementById("AC");

ACButton.addEventListener("click", ()=>{
    resultsContainer.textContent = "";
})

const CButton = document.getElementById("C");

CButton.addEventListener("click", ()=>{
    resultsContainer.textContent = resultsContainer.textContent.slice(0, -1);
})


let columnArray= [["1","4","7", "="],["2","5","8","0"],["3","6","9","."],["+","-","*","/"]]

let signArray = [".", "+","-","*","/"]
let numberArray =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function populateInputContainer(rows, columns) {
    for (let i =0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        inputContainer.appendChild(rowDiv);
        for (let j =0; j < columns; j++){
            const columnButton = document.createElement("button");
            columnButton.className = "inputButton";
            columnButton.textContent = columnArray[i][j];

            columnButton.addEventListener("click", ()=>{
                if (signArray.includes(columnArray[i][j]) && signArray.includes(resultsContainer.textContent.slice(-1))){
                    resultsContainer.textContent = resultsContainer.textContent.slice(0, -1);
                } else if (columnArray[i][j] !== "="){
                    resultsContainer.textContent += columnArray[i][j];
                } else {
                    operations()
                }
            })
            rowDiv.appendChild(columnButton);
        }
    }

}

populateInputContainer(4,4);



function operations() {
    console.log("Operations")
    let firstNumber;
    let secondNumber;
    for (let i = 0; i < resultsContainer.textContent.length; i++) {
        if (signArray.includes(resultsContainer.textContent[i])) {
            let sign = resultsContainer.textContent[i];
            let signPosition = i;
            firstNumber = parseFloat(resultsContainer.textContent.slice(0, signPosition));
            secondNumber = parseFloat(resultsContainer.textContent.slice(signPosition + 1, resultsContainer.textContent.length));

            if (sign === "+"){
                resultsContainer.textContent = add(firstNumber, secondNumber);
            } else if(sign === "-"){
                resultsContainer.textContent = subtract(firstNumber, secondNumber);
            } else if(sign === "*"){
                resultsContainer.textContent = multiply(firstNumber, secondNumber);
            } else if(sign === "/"){
                resultsContainer.textContent = divide(firstNumber, secondNumber);
            }
        }


    }

}