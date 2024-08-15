const calculator = {
    add: addition(x, y),
    subtract: subtraction(x, y),
    multiply: multiplication(x, y),
    divide: division(x, y),
};

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}