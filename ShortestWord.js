"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShort = void 0;
function findShort(s) {
    return s.split(' ').map(function (item) { return item.length; }).sort(function (a, b) { return a - b; })[0];
}
exports.findShort = findShort;
;
var testStringCollection = 'a este paso nunca llegaremos a la meta';
console.log(findShort(testStringCollection));
