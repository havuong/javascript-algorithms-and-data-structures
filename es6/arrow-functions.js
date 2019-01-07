// Use Arrow Functions to Write Concise Anonymous Functions

/* 
var magic = function () {
    "use strict";
    return new Date();
};
*/

const magic = () => new Date();

// Write Arrow Functions with Parameters
// You can pass more than one argument into arrow functions as well.
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Write Higher Order Arrow Functions
// Use arrow function syntax to compute the square of only the positive integers 
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";

    const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));

    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);