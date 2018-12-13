// Global Scope and Functions
var myGlobal = 10;
var oopsGlobal;
function fun1() {
  oopsGlobal = 5;
  
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  'use strict';
  var myVar;
  console.log(myVar);
}
myLocalScope(); // Run and check the console // myVar is not defined outside of myLocalScope
console.log(myVar); // Now remove the console log line to pass the test

// Global vs. Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();