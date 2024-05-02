"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printerError = void 0;
function printerError(s) {
    var matches = s.match(/[^a-m]/g);
    // const matches = s.match(pattern)
    return "".concat(Array.isArray(matches) ? matches.length : undefined, "/").concat(s.length);
}
exports.printerError = printerError;
console.log(printerError('bileeeffaecldmdijlglbcmb'));
console.log('bfhgihgebgkjjhldficjlihdhidgfcjlglmcdhjikclhem'.match(/[^a-m]/g));
