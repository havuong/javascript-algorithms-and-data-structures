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