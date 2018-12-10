// Manipulate Arrays With push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // myArray now equals [["John", 23], ["cat", 2], ["dog", 3]]

// Manipulate Arrays With pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3, and ourArray now equals [1,2]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();