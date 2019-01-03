// Use the parseInt Function
function convertToInteger(str) {
    var a = parseInt(str);
    return a;
}

convertToInteger("56");

// Use the parseInt Function with a Radix
function convertToInteger(str) {
    var a = parseInt(str, 2);
    return a;
}

convertToInteger("10011");