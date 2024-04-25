"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        // may the code be with you
        var stringifiedNumber = num.toString();
        var newString = "";
        for (var i = 0; i < stringifiedNumber.length; i++) {
            var tmpNum = Math.pow(Number(stringifiedNumber[i]), 2);
            newString = newString + tmpNum.toString();
        }
        return Number(newString);
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.squareDigits(123));
console.log(Kata.squareDigits(333));
console.log(Kata.squareDigits(444));
console.log(Kata.squareDigits(555));
console.log(Kata.squareDigits(888));
console.log(Kata.squareDigits(999999));
