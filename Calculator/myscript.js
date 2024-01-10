let displayValue = '0';
let currentOperator = '';
let previousValue = 0;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = '';
    previousValue = 0;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function setOperator(operator) {
    if (currentOperator !== '') {
        calculateResult();
    }
    currentOperator = operator;
    previousValue = parseFloat(displayValue);
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    const currentValue = parseFloat(displayValue);
    let result;

    switch (currentOperator) {
        case '+':
            result = previousValue + currentValue;
            break;
        case '-':
            result = previousValue - currentValue;
            break;
        case '*':
            result = previousValue * currentValue;
            break;
        case '/':
            result = previousValue / currentValue;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    currentOperator = '';
    updateDisplay();
}


document.querySelector('.copyright').innerText = ` ${new Date().getFullYear()} Copyright © AVINISH KUMAR SAH All Rights Reserved.`;

updateDisplay();
