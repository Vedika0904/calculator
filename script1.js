let currentValue = '';
let operator = '';
let previousValue = '';

// Function to append numbers to the current value
function appendNumber(number) {
    currentValue += number;
    document.getElementById('display').value = currentValue;
}

// Function to set the operator
function setOperator(op) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        calculateResult();
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

// Function to calculate the result and show it in an alert box
function calculateResult() {
    if (previousValue === '' || currentValue === '') return;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousValue) + parseFloat(currentValue);
            break;
        case '-':
            result = parseFloat(previousValue) - parseFloat(currentValue);
            break;
        case '*':
            result = parseFloat(previousValue) * parseFloat(currentValue);
            break;
        case '/':
            result = parseFloat(previousValue) / parseFloat(currentValue);
            break;
        default:
            return;
    }
    alert("Result: " + result);  // Show the result in an alert box
    currentValue = result.toString();
    operator = '';
    previousValue = '';
}

// Function to clear the display
function clearDisplay() {
    currentValue = '';
    operator = '';
    previousValue = '';
    document.getElementById('display').value = '';
}

// Function to calculate the factorial of the current value and show it in an alert box
function calculateFactorial() {
    if (currentValue === '') return;
    let number = parseInt(currentValue);
    if (isNaN(number) || number < 0) {
        alert('Error: Invalid number for factorial.');
        return;
    }

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    alert("Factorial: " + result);  // Show the factorial in an alert box
    currentValue = result.toString();
}

