// Reuse Patterns Using Capture Groups
/* 
To specify where that repeat string will appear, you use a backslash (\) and then a number.
This number starts at 1 and increases with each additional capture group you use.
An example would be \1 to match the first group.
Use capture groupsin reRegexto match numbers that are repeated only three times in a string,
each separated by a space.
*/
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);