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