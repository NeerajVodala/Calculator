const upperDisplay = document.querySelector('.display-upper');
const mainDisplay = document.querySelector('.display-main');
const tempDisplay = document.querySelector('.display-temp');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');


let dot = false;
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if(number.value == "." && !dot) {
            dot = true;
        }else if (number.value == "." && dot) {
            return;
        }
        mainDisplay.innerText += number.value;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if(){

        }
        
        mainDisplay.innerText += operator.value;
    })
})
