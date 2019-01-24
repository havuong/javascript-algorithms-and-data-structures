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

// Use Capture Groups to Search and Replace
/* 
You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
Returns "Camp Code"
*/
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, '');