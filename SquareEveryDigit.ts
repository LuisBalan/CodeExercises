export class Kata {
  static squareDigits(num: number): number {
    // may the code be with you
    const stringifiedNumber = num.toString();
    let newString = "";
    for(let i = 0; i < stringifiedNumber.length; i++ ) {
        const tmpNum = Math.pow(Number(stringifiedNumber[i]), 2);
        newString = newString + tmpNum.toString();
    }
    return Number(newString)
  }
}

console.log(Kata.squareDigits(123));
console.log(Kata.squareDigits(333));
console.log(Kata.squareDigits(444));
console.log(Kata.squareDigits(555));
console.log(Kata.squareDigits(888));
console.log(Kata.squareDigits(999999));