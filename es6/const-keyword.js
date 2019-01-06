// Declare a Read-Only Variable with the const Keyword
/*
In ES6, you can also declare variables using the const keyword.

Const has all the awesome features that let has, with the added bonus that variables declared using const are read-only.
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
trying to reassign a variable declared with const will throw an error
You should always name variables you don't want to reassign using the const keyword.
This helps when you accidentally attempt to reassign a variable that is meant to stay constant.
A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
*/

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");