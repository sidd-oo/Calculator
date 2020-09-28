let operandOne = "";
let operandTwo = "";
let operator ;
let result = 0;
let tempResult = 0;
let displayStr = "0";

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
    if(operandTwo != 0){
        return operandOne / operandTwo;
    }else{
        return "ERROR : Division not possible";
    }
}

function operate(operator, operandOne, operandTwo){
    const displaySelector = document.querySelector('#display');
    if(operator == '+'){
        result = add(operandOne, operandTwo);
        // displaySelcetor.innerHTML = result;
    }else if(operator == '-'){
        result = subtract(operandOne, operandTwo);
    }else if(operator == '*'){
        result = multiply(operandOne, operandTwo);
    }else if(operator == '/'){
        result = divide(operandOne, operandTwo);
    }
}


const displaySelector = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

buttons.forEach((buttons)=>{
    buttons.addEventListener('click',function(e){
        
        if(e.target.classList.value === 'operand'){           // OPERANDS------------------
            displayStr = displayStr + e.target.value;
            if(operator === undefined ){
                if(operandOne.length < 9){
                    operandOne += e.target.value;
                }else{
                    operandOne = operandOne.slice(0,9);
                }
                console.log("operator ONE: " + operandOne);
            }else if( operator !== undefined){
                displayStr = "";
                if(operandTwo.length < 9){
                    operandTwo += e.target.value;
                }else{
                    operandOne = operandOne.slice(0,9);
                }
                console.log(operandTwo);
            }
        }else if (e.target.classList.value === 'operator'){   // OPERATOR------------------
            operator = e.target.value;
            console.log("OPERATOR" + operator);
        }else if(e.target.classList.value === 'equal'){       // EQUALS--------------------
            console.log(e.target.classList.value);
            operate(operator, operandOne, operandTwo);
        }

        displaySelector.innerHTML = displayStr.slice(0,9);
    })
})



