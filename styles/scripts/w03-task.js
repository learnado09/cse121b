/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}

function addNumbers() 
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);

    return sum;
}   
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
    
/* Function Expression - Subtract Numbers */

function subtract (number1, number2)
{
    return number1 - number2;
}

function subtractNumbers() 
{
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

    return difference;
}   
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

function multiply (number1, number2)
{
    return number1 * number2;
}

function multiplyNumbers() 
{
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);

    return product;
}   
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide (number1, number2)
{
    return number1 / number2;
}

function divideNumbers() 
{
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);

    return quotient;
}   
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Selection Structure */

let checkbox = document.querySelector('#member');
let amountInput = document.querySelector('#subtotal');
let totalSpan = document.querySelector('#total');

function calculateTotal() {
  let amount = parseFloat(amountInput.value) || 0;

  if (checkbox.checked) {
    amount = amount - (0.15 * amount);
    return totalSpan.textContent = '$' + amount.toFixed(2);
}

  return totalSpan.textContent = '$' + amount.toFixed(2);
}

document.querySelector('#getTotal').addEventListener('click', calculateTotal);

/* Decision Structure */
 let currentDate = new Date();
 let currentyear = new Date().getFullYear()
document.getElementById('#year').innerHTML = currentyear;



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2) + numbersArray.reduce((sum, number) => sum + number);