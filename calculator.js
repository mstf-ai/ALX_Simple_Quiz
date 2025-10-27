document.addEventListener("DOMContentLoaded", function() {
    const number1Input = document.getElementById("number1");
    const number2Input = document.getElementById("number2");
    const resultSpan = document.getElementById("calculation-result");

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }

    document.getElementById("add").addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        resultSpan.textContent = add(number1, number2);
    });

    document.getElementById("subtract").addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        resultSpan.textContent = subtract(number1, number2);
    });

    document.getElementById("multiply").addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        resultSpan.textContent = multiply(number1, number2);
    });

    document.getElementById("divide").addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        resultSpan.textContent = divide(number1, number2);
    });
});
