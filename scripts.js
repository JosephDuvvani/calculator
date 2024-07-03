function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let firstNum = '';
let operator = '';
let secondNum = '';

function operate(op, num1, num2){
    switch(op){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;    
    }
}

const buttons = document.querySelectorAll('button');
const problem = document.querySelector('#problem');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => { 
        problemDisplay(buttons[i].id);
    });
}
let displayNum = '';
let decimalCheck = 0;

function problemDisplay(btnId){
switch(btnId){
            case 'seven':
                displayNum += '7';
                problem.textContent = displayNum;
                break;
            case 'eight':
                displayNum += '8';
                problem.textContent = displayNum;
                break; 
            case 'nine':
                displayNum += '9';
                problem.textContent = displayNum;
                break;
            case 'four':
                displayNum += '4';
                problem.textContent = displayNum;
                break;
            case 'five':
                displayNum += '5';
                problem.textContent = displayNum ;
                break;
            case 'six':
                displayNum += '6';
                problem.textContent = displayNum;
                break;
            case 'one':
                displayNum += '1';
                problem.textContent = displayNum;
                break;
            case 'two':
                displayNum += '2';
                problem.textContent = displayNum;
                break;
            case 'three':
                displayNum += '3';
                problem.textContent = displayNum;
                break;
            case 'zero':
                displayNum += '0';
                problem.textContent = displayNum;
                break;
            case 'point':
                if(decimalCheck === 0) displayNum += '.';
                decimalCheck++;
                problem.textContent = displayNum;
                break;           
        }
}
