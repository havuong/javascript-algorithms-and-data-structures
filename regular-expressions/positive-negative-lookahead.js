// Positive and Negative Lookahead
/* 
Lookaheadsare patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
This can be useful when you want to search for multiple patterns over the same string.
There are two kinds of lookaheads: positive lookaheadand negative lookahead.
A positive lookaheadwill look to make sure the element in the search pattern is there,
but won't actually match it.
A positive lookahead is used as (?=...)where the ...is the required part that is not matched.
On the other hand, a negative lookaheadwill look to make sure the element in the search pattern is not there.
A negative lookahead is used as (?!...)where the ...is the pattern that you do not want to be there.
The rest of the pattern is returned if the negative lookahead part is not present.
Use lookaheadsin the pwRegexto match passwords that are greater than 5 characters long and have two consecutive digits.
*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);