"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = void 0;
function descendingOrder(n) {
    // take the arg
    // convert it to string
    var stringfiedNumber = n.toString();
    // split each character
    var stringifiedCollection = stringfiedNumber.split('')
        .map(function (item) { return Number(item); })
        .sort(function (a, b) { return b - a; })
        .map(function (eachNumber) { return eachNumber.toString(); });
    // convert each one to number again
    // reorder
    // 'paste them again'
    // convert them to number
    var result = Number(stringifiedCollection.join(''));
    return result;
}
exports.descendingOrder = descendingOrder;
;
var randomStrings = [];
for (var i = 1; i < 6; i++) {
    var randomNumber = Math.floor(Math.random() * 1000000);
    console.log('random number ', randomNumber);
    randomStrings.push(randomNumber);
}
;
console.log('random numbers array: ', randomStrings);
console.log('--- test ---');
randomStrings.forEach(function (item) { return console.log("".concat(item, " ---> "), descendingOrder(item)); });
