// Copy Array Items Using slice()
/*
The next method we will cover is slice(). slice(),
rather than modifying an array, copies, or extracts, a given number of elements to a new array,
leaving the array it is called upon untouched. slice()takes only 2 parameters —
the first is the index at which to begin extraction, and the second is the index at which to stop extraction
(extraction will occur up to, but not including the element at this index)
*/
function forecast(arr) {
    let forecast = arr.slice(2, 4); // ["warm", "sunny"]
    return forecast;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));
