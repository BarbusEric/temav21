// console.log("hello");

let input1 = document.querySelector('.number1');
let input2 = document.querySelector('.number2');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let result = document.querySelector('.result');


function handlePlus() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let sum = number1 + number2;
    result.innerHTML = `
    Rezultatul operatiei este ${sum}
    `;
}

function handleMinus() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let sum = number1 - number2;
    result.innerHTML = `
    Rezultatul operatiei este ${sum}
    `;
}

function handleDivide() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let sum = number1 / number2;
    result.innerHTML = `
    Rezultatul operatiei este ${sum}
    `;
}

function handleMultiply() {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let sum = number1 * number2;
    result.innerHTML = `
    Rezultatul operatiei este ${sum}
`;
}

function handleInput1(event) {
    let value = event.target.value;
    if(isNaN(value)){
        result.innerHTML = 'Va rugam sa introduceti o valoare numerica!';
    }else {
        result.innerHTML = '';
    }
}

function handleInput2(event) {
    let value = event.target.value;
    if (isNaN(value)) {
        result.innerHTML = 'Va rugam sa introduceti o valoare numerica!';
    }else {
        result.innerHTML = '';
    }
}

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
divide.addEventListener('click', handleDivide);
multiply.addEventListener('click', handleMultiply);
input1.addEventListener('input', handleInput1);
input2.addEventListener('input', handleInput2);
