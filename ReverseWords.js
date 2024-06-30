"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWord = void 0;
function reverseWord(str) {
    var splitString = str.split(' ');
    var revertedWord = splitString.map(function (eachWord) {
        var newString = '';
        for (var i = eachWord.length - 1; i >= 0; i--) {
            newString += eachWord.charAt(i);
        }
        ;
        return newString;
    }).join(' ').trim();
    return revertedWord;
}
exports.reverseWord = reverseWord;
;
console.log(reverseWord('mi mama me mi mima'));
console.log('murcielago es tonto ', ' <---> ', reverseWord('murcielago es tonto '));
