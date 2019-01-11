// Use Destructuring Assignment to Assign Variables from Objects
/*
Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.
Here's the same assignment statement with ES6 destructuring syntax:

const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54

If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.

const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
*/
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
(() => {
    [a, b] = [b, a];
})();
console.log(a); // should be 6
console.log(b); // should be 8

// Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict";
    return function half({ max, min }) {
        // use function argument destructuring
        return (max + min) / 2.0;
    };

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015