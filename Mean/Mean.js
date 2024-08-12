function getMean(numbersArray) {
    let digitsSum = 0;
    for (let i = 0 ; i < numbersArray.length ; i++ ) {
        digitsSum = digitsSum + numbersArray[i];
    };
    return digitsSum/numbersArray.length ;
};

console.log(getMean([1, 2, 3, 4, 5]));
console.log(getMean([4, 2, 8, 6]));
console.log(getMean([1, 2, 3, 4]))
console.log(getMean([1, 2, 2]));