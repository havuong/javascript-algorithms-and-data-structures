// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => {
    "use strict";
    return {
        name, age, gender
    };
    // ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// Write Concise Declarative Functions with ES6
// With ES6, You can remove the function keyword and colon altogether when defining functions in objects.
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);