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

// Manipulate Arrays With shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Shopping List
var myList = [["Chocolate Bar", 15],["Milk", 5],["Tea", 2],["Snack", 1],["Tissue", 2]];