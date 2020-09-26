let operandOne = 0;
let operandTwo = 0;
let tempResult = 0;
let operator ;


function operate(operator, operandOne, operandTwo){
    if(operator == 'add'){
        return operandOne + operandTwo;
    }else if(operator == 'subtract'){
        return operandOne - operandTwo;
    }else if(operator == 'multiply'){
        return operandOne * operandTwo;
    }else if(operator == 'divide'){
        if(operatorTwo != 0){
            return operandOne / operandTwo;
        }else{
            return "ERROR : Division not possible"
        }
    }
}



