// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // true
let waldoRegex = /waldo/; // true
let result = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// Ignore Case While Matching
// There are other flags but here you'll focus on the flag that ignores case - the "i" flag.
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); // Returns ["/coding/; "]

// Find More Than the First Match
// To search or extract a pattern more than once, you can use the "g" flag.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;
let result = twinkleStar.match(starRegex);

// Match Anything with Wildcard Period
// The wildcard character "." will match any one character. The wildcard is also called "dot" and "period"
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// Match Single Character with Multiple Possibilities
// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // find all 25 vowels, match both upper- and lowercase vowels
let result = quoteSample.match(vowelRegex);

// Match Letters of the Alphabet
// match a large range of characters (for example, every letter in the alphabet).
// you can define a range of characters to match using a hyphencharacter: -.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

// Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters.
// It also works to match a range of numbers.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

// Match Single Characters Not Specified
// To create a negated character set (a set of characters that you do not want to match),
// you place a caretcharacter (^) after the opening bracket
// and before the characters you do not want to match.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // match 9 items.
let result = quoteSample.match(myRegex);

// Match Characters that Occur One or More Times
// match a character (or group of characters) that appears one or more times in a row.
// This means it occurs at least once, and may be repeated.
// You can use the "+" character to check if that is the case.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More Times
// The last challenge used the plus "+" sign to look for characters that occur one or more times.
// There's also an option that matches characters that occur zero or more times.
// The character to do this is the asteriskor star: *.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

// Find Characters with Lazy Matching
// The alternative is called a lazymatch, which finds the smallest possible part of the string
// You can apply the regex /t[a-z]*i/to the string "titanic".
// This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
// Regular expressions are by default greedy, so the match would return ["titani"].
// It finds the largest sub-string possible to fit the pattern.
// However, you can use the ?character to change it to lazymatching.
// "titanic"matched against the adjusted regex of /t[a-z]*?i/returns ["ti"].
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/;
let result = text.match(myRegex);

// Find One or More Criminals in a Hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// Match Beginning String Patterns
// the caretcharacter (^) inside a character setto create a negated character setin the form [^thingsThatWillNotBeMatched].
// Outside of a character set, the caretis used to search for patterns at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z].
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].
// This character class matches upper and lowercase letters plus numbers.
// Note, this character class also includes the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
// These shortcut character classes are also known as shorthand character classes.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_]using \w.
// A natural pattern you might want to search for is the opposite of alphanumerics.
// You can search for the opposite of the \w with \W. 
// Note, the opposite pattern uses a capital letter.
//This shortcut is the same as [^A-Za-z0-9_].
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d.
// This is equal to the character class [0-9],
// which looks for a single character of any number between zero and nine.
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;

// Match All Non-Numbers
// The shortcut to look for non-digit characters is \D.
// This is equal to the character class [^0-9],
// which looks for a single character that is not a number between zero and nine
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;

// Match Whitespace
// You can search for whitespace using \s, which is a lowercase s.
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
// it as similar to the character class [ \r\t\f\n\v].
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// Match Non-Whitespace Characters
// Search for non-whitespace using \S, which is an uppercase s.
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
// You can think of it being similar to the character class [^ \r\t\f\n\v].
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

// Specify Upper and Lower Number of Matches
/* 
Recall that you use the plus sign "+" to look for one or more characters
and the asterisk "*" to look for zero or more characters.
These are convenient but sometimes you want to match a certain range of patterns.
You can specify the lower and upper number of patterns with quantity specifiers.
Quantity specifiers are used with curly brackets ({and }).
You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter aappearing between 3 and 5 times in the string "ah",
your regex would be /a{3,5}h/.
 */
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);

// Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,30}ah/;
let result = haRegex.test(haStr);

// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr)

// Check for All or None
/*
Sometimes the patterns you want to search for may have parts of it that may or may not exist.
However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, ?.
This checks for zero or one of the preceding element.
You can think of this symbol as saying the previous element is optional.
*/
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);