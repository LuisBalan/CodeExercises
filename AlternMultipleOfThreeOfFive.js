"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var fiveCoFactor = Math.floor((number - 1) / 5);
        var threeCoFactor = Math.floor((number - 1) / 3);
        var fifteenCoFactor = Math.floor((number - 1) / 15);
        var fiveSum = (5 * fiveCoFactor * (fiveCoFactor + 1)) / 2;
        var threeSum = (3 * threeCoFactor * (threeCoFactor + 1)) / 2;
        var fifteenSum = (15 * fifteenCoFactor * (fifteenCoFactor + 1)) / 2;
        return fiveSum + threeSum - fifteenSum;
    };
    return Challenge;
}());
exports.Challenge = Challenge;
console.log(Challenge.solution(10));
