function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}



const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".top");

let first;
let second;
let displayNumber;
let operation = false;
let operator;
let clear = true;

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        
        let id = e.target.getAttribute("id");
        
        if (id == "+" || id == "-" || id == "*" || id == "/") {
            e.target.style.background = "gray";

            
            // first and second
            if (first == null) {
                first = displayNumber;
            } else if (second == null) {
                second = displayNumber;
                operate(operator);
                second = null;
            } 

            operation = true;
            operator = id;

        } else if (id == "=") {
            second = displayNumber;
            operate(operator);
        } else if (id == "clear") {
            screen.textContent = "\u200B";
            displayNumber = null;
            first = null;
            second = null;
            buttons.forEach((button) => {
                button.style.background = "rgb(202, 202, 202)";
            });
            clear = true;

        } else {
            if (operation) {
                screen.textContent = null;
                let buttonID = "#\\" + operator;
                
                let buttonOp = document.querySelector(buttonID);

                buttonOp.style.background = "rgb(202, 202, 202)";
                operation = false;
            }
            if (clear) {
                screen.textContent = id;
                clear = false;
            } else {
                screen.textContent += id;
            }
            
            displayNumber = parseInt(screen.textContent);
            
        }
    }); 
});

function operate(id) {
    let result;
    if (id == "+") {
        result = add(first, second);
    } else if (id == "-") {
        result = subtract(first, second);
    } else if (id == "*") {
        result = multiply(first, second);
    } else if (id == "/") {
        result = divide(first, second);
    }

    screen.textContent = result;
    first = result;
}





