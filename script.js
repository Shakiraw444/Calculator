const display = document.getElementById("display");

function addNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}
//Function to add symbols or operators
function addSymbol(symbol) {
    display.innerText += symbol;
}
//Function to clear all display
function clearDisplay() {
    display.innerText = "0";
}
//Function to delete the last digit
function deleteNumber() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
    display.innerText = '0';
    }
}
//Function to calculate the total
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }
}