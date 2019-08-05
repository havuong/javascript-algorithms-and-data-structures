// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) { //Checks every parameter for the element and if is NOT there continues the code
            newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
        }
    }
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
