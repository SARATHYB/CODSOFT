let display = document.getElementById('result');
let currentInput = '';

function appendNumber(number) {
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
    currentInput += number;
}

function appendOperator(operator) {
    if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.textContent += operator;
    }
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculate() {
    try {
        display.textContent = eval(currentInput);
        currentInput = display.textContent;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}
