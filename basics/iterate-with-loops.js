// Iterate with JavaScript While Loops
var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

// Iterate with JavaScript For Loops
var myArray = [];

for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

// Iterate Odd Numbers With a For Loop
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

// Count Backwards With a For Loop
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

// Iterate Through an Array with a For Loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

// Nesting For Loops
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 10)