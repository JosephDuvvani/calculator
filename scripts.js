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

let firstNum = 0;
let operator = '';
let secondNum = 0;

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

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        switch(buttons[i].id){
            case 'sign':
                
                break;
            case 'clear-entry':
                
                break; 
            case 'all-clear':
                
                break;
            case 'percent':
                
                break;
            case 'seven':
                
                break;
            case 'eight':
                
                break; 
            case 'nine':
                
                break;
            case 'divide':
                
                break;
            case 'four':
                
                break;
            case 'five':
                
                break;
            case 'six':
                
                break;
            case 'multiply':
                
                break;
            case 'one':
                
                break;
            case 'two':
                
                break;
            case 'three':
                
                break;
            case 'minus':
                
                break;
            case 'zero':
                
                break;
            case 'point':
                
                break;
            case 'equals':
                
                break;
            case 'plus':
                
                break;            
        }
    });
}
