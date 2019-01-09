// Set Default Parameters for Your Functions
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

// Use the Rest Operator with Function Parameters
/*
In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters.
With the rest operator, you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function.
*/
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(0, 1, 2)); // 3
console.log(sum(1, 2, 3, 4));  // 10
console.log(sum(5)); // 5
console.log(sum()); // 0