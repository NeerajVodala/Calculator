const upperDisplay = document.querySelector('.display-upper');
const mainDisplay = document.querySelector('.display-main');
const tempDisplay = document.querySelector('.display-temp');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const allClearBtn = document.querySelector('.all-clear-button');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear-button');
const changeNegativeBtn = document.querySelector('.change-negative');

let upperDisplayNum = '';
let mainDisplayNum = '';
let result = null;
let prevOperator = '';
let dot = false;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (number.value == "." && !dot) {
            dot = true;
        } else if (number.value == "." && dot) {
            return;
        }
        mainDisplayNum += number.value;
        mainDisplay.innerText = mainDisplayNum;
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if (!mainDisplayNum) {
            return;
        }
        dot = false;
        const operationName = operator.value;
        if (upperDisplayNum && mainDisplayNum && prevOperator) {
            calculation();
        } else {
            result = parseFloat(mainDisplayNum);
        }
        clearVar(operationName);
        prevOperator = operationName;
    });
});

function clearVar(name = '') {
    upperDisplayNum += mainDisplayNum + ' ' + name + ' ';
    upperDisplay.innerText = upperDisplayNum;
    mainDisplayNum = '';
    mainDisplay.innerText = '0';
    tempDisplay.innerText = result;
}

function calculation() {
    if (prevOperator == '+') {
        result = parseFloat(result) + parseFloat(mainDisplayNum);
    } else if (prevOperator == '-') {
        result = parseFloat(result) - parseFloat(mainDisplayNum);
    } else if (prevOperator == '×') {
        result = parseFloat(result) * parseFloat(mainDisplayNum);
    } else if (prevOperator == '÷') {
        result = parseFloat(result) / parseFloat(mainDisplayNum);
    } else if (prevOperator == '%') {
        result = parseFloat(result) % parseFloat(mainDisplayNum);
    }

    if (result % 1 != 0) {
        dot = true;
    }
}

function allClear() {
    upperDisplay.innerText = '0';
    mainDisplay.innerText = '0';
    tempDisplay.innerText = '0';
    upperDisplayNum = '';
    mainDisplayNum = '';
    result = '';
    dot = false;
}

function equals() {
    if (!mainDisplayNum || !upperDisplayNum) {
        return;
    }
    dot = false;
    calculation();
    clearVar();
    mainDisplay.innerText = result;
    tempDisplay.innerText = '0';
    mainDisplayNum = result;
    upperDisplayNum = '';
}

function clearMain() {
    mainDisplayNum = '';
    mainDisplay.innerText = '0';
}

function changeNegative() {
    if (mainDisplayNum == 0) {
        return;
    } else if (mainDisplayNum > 0) {
        mainDisplayNum = '-' + mainDisplayNum;
        mainDisplay.innerText = mainDisplayNum;
    } else {
        mainDisplayNum = parseFloat(mainDisplayNum) * -1;
        mainDisplay.innerText = mainDisplayNum;
    }
}

equalsBtn.addEventListener('click', equals)
allClearBtn.addEventListener('click', allClear);
clearBtn.addEventListener('click', clearMain);
changeNegativeBtn.addEventListener('click', changeNegative);