// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));