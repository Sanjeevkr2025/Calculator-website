let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearLastNumber() {
    let value = display.value;
    value = value.replace(/([0-9.]+)[\+\-\*\/]?$/, '');
    display.value = value;
}

function calculate() {
    try {
        let input = display.value;

        // Fix percentage calculation by converting correctly
        input = input.replace(/(\d+)%/g, "($1/100)");

        // Fix for division by zero
        if (/\/0(?!\.)/.test(input)) {  // Ensures "divide by zero" cases are handled
            display.value = "Error";
        } else {
            let result = eval(input);
            display.value = result;
        }
    } catch (e) {
        display.value = "Error"; // Handles invalid input
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
