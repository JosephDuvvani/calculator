function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
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
let operat = '';
let secondNum = '';

function operate(op, num1, num2){
    switch(op){
        case '+':
            firstNum = add(num1, num2);
            operat = '';
            secondNum = '';
            break;
        case '-':
            firstNum = subtract(num1, num2);
            operat = '';
            secondNum = '';
            break;
        case '*':
            firstNum = multiply(num1, num2);
            operat = '';
            secondNum = '';
            break;
        case '/':
            firstNum = divide(num1, num2);
            operat = '';
            secondNum = '';
            break;    
    }
}

const buttons = document.querySelectorAll('button');
const problem = document.querySelector('#problem');
const answer = document.querySelector('#answer');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => { 
        displayNumber(buttons[i].id);
        operator(buttons[i].id);
    });
}
let displayNum = '0';
let decimalCheck = 0;

function packDisplayNum(digit){
    if(displayNum === '0') displayNum='';
    displayNum += digit;
    problem.textContent = displayNum;
}

function displayNumber(btnId){
switch(btnId){
            case 'seven':
                packDisplayNum('7');
                break;
            case 'eight':
                packDisplayNum('8');
                break; 
            case 'nine':
                packDisplayNum('9');
                break;
            case 'four':
                packDisplayNum('4');
                break;
            case 'five':
                packDisplayNum('5');
                break;
            case 'six':
                packDisplayNum('6');
                break;
            case 'one':
                packDisplayNum('1');
                break;
            case 'two':
                packDisplayNum('2');
                break;
            case 'three':
                packDisplayNum('3');
                break;
            case 'zero':
                packDisplayNum('0');
                break;
            case 'point':
                if(decimalCheck === 0) displayNum += '.';
                decimalCheck++;
                problem.textContent = displayNum;
                break;           
        }
}

function updateExpression(){
    if(secondNum !== ''){
        operate(operat,firstNum,secondNum);             
    }
    if(firstNum === '') firstNum = displayNum;
    if(operat !== '' && secondNum === ''){
        secondNum = displayNum;
        operate(operat, firstNum, secondNum);     
    }
    displayNum = '0';
    problem.textContent = displayNum;
    if(decimalCheck > 0) decimalCheck--;
}

function operator(btnId){
    switch(btnId){
        case 'plus':
            updateExpression();
            operat = '+'           
            answer.textContent = firstNum + operat + secondNum;   
            break;
        case 'minus':
            updateExpression();
            operat = '-'
            answer.textContent = firstNum + operat + secondNum;
            break;
        case 'multiply':
            updateExpression();
            operat = '*'
            answer.textContent = firstNum + operat + secondNum;
            break;
        case 'divide':
            updateExpression();
            operat = '/'
            answer.textContent = firstNum + operat + secondNum;
            break;
    }
}




