// Explore Differences Between the var and let Keywords

/* 
One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
In a small application, you might not run into this type of problem
but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite.
Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
*/

let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();