let variables = {
    input: document.getElementById('inputText'),
    inputStyles: document.getElementById('inputText').style,
    ans: 0,
}

function display(val) {
    variables.input.value += val;
}

function clearText() {
    variables.input.value = "";
}

function calculate() {
    if (variables.input.value == "") {
        variables.inputStyles.borderColor = "red"
    } else {
        variables.ans = eval(variables.input.value);
        variables.input.value = variables.ans;
    }
}


function myFunc() {
    let restriction = this.value.replace(new RegExp(/[^\d\+\-\/\*\%\=]/), "");
    this.value = restriction;
}

variables.input.addEventListener('input', myFunc);