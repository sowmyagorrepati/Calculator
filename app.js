function cleardisplay() {
    document.querySelector('.display').value = '';
}

function deletebtn() {
    let display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}

function solve(value) {
    let display = document.querySelector('.display');
    if (value === '%') {
        display.value += '/100'; 
    } else {
        display.value += value;
    }
}

function res() {
    let display = document.querySelector('.display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

