let operandOne = "";
let operandTwo = "";
let operator  = "";
let result = 0;
let tempResult = 0;
let displayStr = "";
let precededSign = ""

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
        return add(operandOne, operandTwo);
    }else if(operator == '-'){
        return subtract(operandOne, operandTwo);
    }else if(operator == '*'){
        return multiply(operandOne, operandTwo);
    }else if(operator == '/'){
        return divide(operandOne, operandTwo);
    }
}


const displaySelector = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

buttons.forEach((buttons)=>{
    buttons.addEventListener('click',function(e){
        
        if(e.target.classList.value === 'operand'){           // OPERANDS------------------
            handleOperands(e);
        }else if (e.target.classList.value === 'operator'){   // OPERATOR------------------
            handleOperator(e);
        }else if(e.target.classList.value === 'equal'){       // EQUALS--------------------
            handleEquals();
        }else if(e.target.classList.value === 'clear'){       // CLEAR-----------------------
            handleClear();
        }else if(e.target.classList.value === 'sign'){        // SIGN------------------------
            handleSign();
        }else if(e.target.classList.value === "percentage"){  //PERCENTAGE-------------------
            handlePercentage();
        }else if(e.target.classList.value === "decimal"){     // DECIMAL----------------------
            handleDecimal();
        }                                                                

        displaySelector.innerHTML = displayStr.slice(0,9);
    })
})

function handleOperands(e){
    displayStr = displayStr + e.target.value;
            if(operator === ""){
                if(operandOne.length < 9){
                    operandOne += e.target.value;
                }else{
                    operandOne = operandOne.slice(0,9);
                }
                console.log("operator ONE: " + operandOne);
            }else if( operator !== ""){
                if(operandTwo.length < 9){
                    operandTwo += e.target.value;
                }else{
                    operandTwo = operandTwo.slice(0,9);
                }
                console.log("OPERAND TWO: " + operandTwo);
            }
}

function handleOperator(e){
        operator = e.target.value;
        console.log("OPERATOR: " + operator);
        displayStr = "";
}

function handleClear(){
        operandOne = "";
        operandTwo = "";
        operator = "";
        displayStr = "";
    console.log("Screen clear");
}

function handleEquals(){
    if(operandTwo !== "" ){
        result = operate(operator, operandOne, operandTwo);
        displayStr = (Number.isInteger(result)) ? String(result) : String(result.toFixed(2));
        console.log("Equals click: now answer prompted: [" + displayStr + "] result: (" + result+")");
        operandOne = "";
        operandTwo = "";
        operator = "";
    }
}


function handleDecimal(){
    if(operator === ""){
        operandOne  = operandOne + ".";
        displayStr += ".";
    }else if(operator !== "" && operandTwo !== ""){
        displayStr = displayStr + ".";
    }else if(operator !== "" && operandOne !== ""){
        console.log("operator 2 decimal check")
        operandTwo = operandTwo + ".";
        displayStr += ".";
    }
}

function handlePercentage(){
    if(operator === ""){
        operandOne /= 100;
        displayStr = operandOne + "";
        console.log("Percentage functionality applied : " + operandOne);
    }else{
        operandTwo /= 100;
        displayStr = operandTwo + "";
        console.log("Percentage functionality applied : " + operandTwo);
    }
}

function handleSign(){
    if(operator === ""){
        operandOne *= -1;
        displayStr = operandOne
        console.log("OperandOne sign changed: " + operandOne);
    }else{
        operandTwo *= -1;
        displayStr = operandTwo;
        console.log("operandTwo sign changed: " + operandTwo);
    }
}


