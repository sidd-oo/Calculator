let operandOne = 0;
let operandTwo = 0;
let operator = '';
let result;
let tempResult = 0;


function add(operandOne, operandTwo){
    return operandOne + operandTwo;
}

function subtract(operandOne, operandTwo){
    return operandOne - operandTwo;
}

function multiply(operandOne, operandTwo){
    return operandOne * operandTwo;
}

function divide(operandOne, operandTwo){
    if(operatorTwo != 0){
        return operandOne / operandTwo;
    }else{
        return "ERROR : Division not possible"
    }
}

function operate(operator, operandOne, operandTwo){
    if(operator == 'add'){
        result = add(operandOne, operandTwo);
    }else if(operator == 'subtract'){
        result = subtract(operandOne, operandTwo);
    }else if(operator == 'multiply'){
        result = multiply(operandOne, operandTwo);
    }else if(operator == 'divide'){
        result = divide(operandOne, operandTwo);
    }
}


