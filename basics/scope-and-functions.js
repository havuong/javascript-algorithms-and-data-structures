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