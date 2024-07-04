"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
var digitalRoot = function (n) {
    var stringifiedNumber = n.toString().split('').map(function (num) { return Number(num); });
    var digitsSum = stringifiedNumber.reduce(function (accum, curr) { return accum + curr; }, 0);
    var stringifiedSum = digitsSum.toString();
    if (stringifiedSum.length === 1) {
        return digitsSum;
    }
    return (0, exports.digitalRoot)(digitsSum);
};
exports.digitalRoot = digitalRoot;
console.log(16, ' ---> ', (0, exports.digitalRoot)(16));
console.log(942, ' ---> ', (0, exports.digitalRoot)(942));
console.log(132189, ' ---> ', (0, exports.digitalRoot)(132189));
console.log(493193, ' ---> ', (0, exports.digitalRoot)(493139));
