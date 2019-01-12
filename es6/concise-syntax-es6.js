// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => {
    "use strict";
    return {
        name, age, gender
    };
    // ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
