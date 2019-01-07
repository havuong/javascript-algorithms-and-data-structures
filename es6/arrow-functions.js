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