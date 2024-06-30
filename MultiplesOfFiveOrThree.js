"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var numberArray = [];
        var i = 1;
        do {
            numberArray.push(i);
            i++;
        } while (i < number);
        var sum = numberArray.reduce(function (accum, curr) {
            if (curr % 3 === 0 || curr % 5 === 0) {
                accum = accum + curr;
            }
            ;
            return accum;
        }, 0);
        return sum;
    };
    ;
    return Challenge;
}());
exports.Challenge = Challenge;
;
console.log(Challenge.solution(10));
