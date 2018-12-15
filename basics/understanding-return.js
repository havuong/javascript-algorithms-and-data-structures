// Return a Value from a Function with Return
function minusSeven(num) {
    return num - 7;
}

function timesFive(num) {
    return num *= 5;
}
timesFive(5);
timesFive(2);
timesFive(0);

console.log(minusSeven(10));

// Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

var returnedValue = addFive();

// Assignment with a Returned Value
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
