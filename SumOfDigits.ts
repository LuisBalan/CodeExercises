export const digitalRoot = (n: number): number => {

    const stringifiedNumber: number[] = n.toString().split('').map((num: string) => Number(num));
    const digitsSum = stringifiedNumber.reduce((accum, curr) => accum + curr, 0);
    const stringifiedSum = digitsSum.toString();
    
    if ( stringifiedSum.length === 1){
        return digitsSum;
    }
    
    return digitalRoot(digitsSum);
    
};

console.log(16, ' ---> ', digitalRoot(16));
console.log(942, ' ---> ', digitalRoot(942));
console.log(132189, ' ---> ', digitalRoot(132189));
console.log(493193, ' ---> ', digitalRoot(493139));