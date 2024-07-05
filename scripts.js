function add(num1, num2){ 
    let ans = (Number(num1) + Number(num2)).toFixed(getBigDecimal(num1, num2));
    let multiplier = getDecimalMultiplier(ans);

    return `${(ans * multiplier)/multiplier}`;
}

function subtract(num1, num2){
    let ans = (Number(num1) - Number(num2)).toFixed(getBigDecimal(num1, num2));
    let multiplier = getDecimalMultiplier(ans);
    return `${(ans * multiplier)/multiplier}`;
}

function multiply(num1, num2){
    let ans = (num1 * num2).toFixed(getBigDecimal(num1, num2));
    let multiplier = getDecimalMultiplier(num1);

    return `${((ans * multiplier))/multiplier}`;
}

function divide(num1, num2){
    console.log(num1%num2);
    if(+num2 === 0){
        return 'divide by zero'; 
    }
    let multiplier = 1;
    let ans = 0;
    if(num1 % 1 === 0 && num2 % 1 === 0){
        ans = (num1 / num2).toFixed(4);
        multiplier = 1;
    } else {
        ans = (num1 / num2).toFixed(getBigDecimal(num1, num2));
        multiplier = getDecimalMultiplier(ans);
    }
    return `${(ans * multiplier) / multiplier}`;
}

let firstNum = '';
let operat = '';
let secondNum = '';

function operate(op, num1, num2){
    updateExpression(op, num1, num2);
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
const expression = document.querySelector('#expression');
const zeroErrorOverlay = document.querySelector('#overlay');


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        displayNumber(buttons[i].id);
        operator(buttons[i].id);
    });
}

zeroErrorOverlay.addEventListener('click', () => {
    zeroErrorOverlay.style.display = 'none';
    allClear();
});

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
                if(decimalCheck === 0) {
                    if(displayNum === '') displayNum = '0';
                    displayNum += '.';
                    decimalCheck++;
                }
                problem.textContent = displayNum;
                break;
            case 'sign':
                if(displayNum !== '') displayNum = `${displayNum * (-1)}`;
                problem.textContent = displayNum;
                break;
            case 'percent':
                if(displayNum === '' || displayNum === '0') break;
                displayNum = `${displayNum/100}`;
                problem.textContent = displayNum;
                break;
            case 'equals':
                equals();
                break;
            case 'clear-entry':
                clearEntry();
                break;
        }
}

function updateAnswer(){
    if(secondNum !== ''){
        operate(operat,firstNum,secondNum);             
    }
    if(firstNum === '') firstNum = displayNum;
    if(operat !== '' && secondNum === ''){
        secondNum = displayNum;
        operate(operat, firstNum, secondNum);     
    }
    displayNum = '';
    problem.textContent = displayNum;
    if(decimalCheck > 0) decimalCheck--;
}

function operator(btnId){
    switch(btnId){
        case 'plus':
            if(operat !== '' && displayNum === '' || 
                firstNum === '' && displayNum === '') break;          
            updateAnswer();
            if(firstNum === 'divide by zero'){
                zeroErrorOverlay.style.display = 'block';
                break;
            }           
            operat = '+'           
            answer.textContent = firstNum + operat + secondNum;   
            break;
        case 'minus':
            if(operat !== '' && displayNum === '' || 
                firstNum === '' && displayNum === '') break;
            updateAnswer();
            if(firstNum === 'divide by zero'){
                zeroErrorOverlay.style.display = 'block';
                break;
            }
            operat = '-'
            answer.textContent = firstNum + operat + secondNum;
            break;
        case 'multiply':
            if(operat !== '' && displayNum === '' || 
                firstNum === '' && displayNum === '') break;
            updateAnswer();
            if(firstNum === 'divide by zero'){
                zeroErrorOverlay.style.display = 'block';
                break;
            }
            operat = '*'
            answer.textContent = firstNum + operat + secondNum;
            break;
        case 'divide':
            if(operat !== '' && displayNum === '' || 
                firstNum === '' && displayNum === '') break;
            updateAnswer();
            if(firstNum === 'divide by zero'){
                zeroErrorOverlay.style.display = 'block';
                break;
            }
            operat = '/'
            answer.textContent = firstNum + operat + secondNum;
            break;
        case 'all-clear':
            allClear();
            break;
    }
}

function updateExpression(op, num1, num2){
    let replaceOperat = '';
    if(op === '*'){
        replaceOperat = 'x';
    }else if(op === '/'){
        replaceOperat = '÷'
    }else {
        replaceOperat = op;
    }
    if (parseFloat(num2) < 0) num2 = `(${num2})`;
    (expression.textContent === '') ? expression.textContent += `${num1} ${replaceOperat} ${num2}` :
    expression.textContent += ` ${replaceOperat} ${num2}`;
}

function getDecimals(num){
   if(!(num.indexOf('.'))) return 0;
   let decimalPlaces = num.length - (num.indexOf('.') + 1);
    
   return decimalPlaces; 
}

function getBigDecimal(num1, num2){
    let dec1 = getDecimals(num1);
    let dec2 = getDecimals(num2);
    if ( dec1 > dec2)
        return dec1;
    return dec2;
}

function getDecimalMultiplier(num){
    if(!(num.indexOf('.'))) return 1;
    let index = num.length - (num.indexOf('.') + 1);
    let multiplier = '1';

    for(let i = 0; i < index; i++){
        multiplier += '0';
    }
    return multiplier;
}

function equals(){
    if(displayNum !== ''){
    operate(operat, firstNum, displayNum);
    if(firstNum === 'divide by zero'){
        zeroErrorOverlay.style.display = 'block';
    }else {
        answer.textContent = firstNum;
    }    

    displayNum = '';
    problem.textContent = displayNum;
    if(decimalCheck > 0) decimalCheck--;
    }
}

function clearEntry(){
        if(displayNum !== ''){
            displayNum = displayNum.split('').slice(0, displayNum.length - 1).join('');
            problem.textContent = displayNum;
        }else if(operat !== ''){
            operat = '';
            answer.textContent = firstNum;
        }
        if(decimalCheck > 0) decimalCheck--;
}

function allClear(){
        firstNum = '';
        operat = '';
        secondNum = '';
        displayNum = '';

        expression.textContent = '';
        answer.textContent = '';
        problem.textContent = displayNum;
        if(decimalCheck > 0) decimalCheck--;
}



