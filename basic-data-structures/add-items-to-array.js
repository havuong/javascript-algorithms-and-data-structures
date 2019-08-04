// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// Add Items Using splice()
// use that third parameter, which represents one or more elements, to add them as well
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}
// DarkSalmon,BlanchedAlmond,LavenderBlush,PaleTurqoise,FireBrick
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));