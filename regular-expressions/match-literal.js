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