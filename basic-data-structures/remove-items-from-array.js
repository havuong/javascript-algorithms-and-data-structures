// Remove Items from an Array with pop() and shift()
// pop()removes an element from the end of an array, while shift()removes an element from the beginning.
// The key difference between pop()and shift()and their cousins push()and unshift(),
// is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()
// splice()allows us to do just that: remove any number of consecutive elements from anywhere in an array.
// splice()can take up to 3 parameters, but for now, we'll focus on just the first 2
// And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0
function sumOfTen(arr) {
    arr.splice(2, 2);
    return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));