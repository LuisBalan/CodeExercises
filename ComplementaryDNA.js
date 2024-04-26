"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.dnaStrand = function (dna) {
        return dna.split('').map(function (symbol) {
            switch (symbol) {
                case 'A':
                    return 'T';
                case 'T':
                    return 'A';
                case 'G':
                    return 'C';
                case 'C':
                    return 'G';
            }
        }).join('');
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.dnaStrand('AAAAA'));
console.log(Kata.dnaStrand('TTTTT'));
console.log(Kata.dnaStrand('CCCCC'));
console.log(Kata.dnaStrand('GGGGG'));
console.log(Kata.dnaStrand('AGTCTGAGTACAAGGTTCCA'));
